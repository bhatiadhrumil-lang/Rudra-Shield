import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, Info, Loader2, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { enquiryTypes, type EnquiryType } from "../data/site";
import {
  ContactConfigurationError,
  ContactSubmissionError,
  isContactEndpointConfigured,
  sendEnquiry,
} from "../lib/contact";

const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Enter your full name.")
    .max(100, "Please keep your name under 100 characters."),
  email: z
    .string()
    .trim()
    .min(1, "Enter your email address.")
    .email("Enter a valid email address.")
    .max(160, "Please keep your email under 160 characters."),
  phone: z
    .string()
    .trim()
    .min(6, "Enter a valid phone number.")
    .max(30, "Please keep your phone number under 30 characters.")
    .regex(/^\+?[0-9][0-9\s()\-]{5,}$/, "Use digits, spaces, parentheses, hyphens or a leading +."),
  organization: z
    .string()
    .trim()
    .min(2, "Enter your organization or university name.")
    .max(160, "Please keep this under 160 characters."),
  designation: z
    .string()
    .trim()
    .min(2, "Enter your designation.")
    .max(120, "Please keep this under 120 characters."),
  enquiryType: z
    .string()
    .min(1, "Select an enquiry type.")
    .refine(
      (value) => (enquiryTypes as readonly string[]).includes(value),
      "Select a valid enquiry type.",
    ),
  message: z
    .string()
    .trim()
    .min(20, "Please provide at least 20 characters so we can understand your enquiry.")
    .max(2000, "Please keep your message under 2,000 characters."),
  consent: z.boolean().refine((value) => value, {
    message: "Please confirm that you agree to be contacted about this enquiry.",
  }),
  website: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

type FormStatus = "idle" | "loading" | "success" | "error" | "config";

type ContactFormProps = {
  initialEnquiry?: EnquiryType | "";
};

const fieldErrorId = (field: keyof ContactFormValues) => `${field}-error`;

export function ContactForm({ initialEnquiry = "" }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const submittingRef = useRef(false);
  const statusRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      organization: "",
      designation: "",
      enquiryType: initialEnquiry,
      message: "",
      consent: false,
      website: "",
    },
  });

  useEffect(() => {
    if (initialEnquiry) {
      setValue("enquiryType", initialEnquiry, { shouldValidate: false });
    }
  }, [initialEnquiry, setValue]);

  useEffect(() => {
    if (status !== "success" && status !== "error" && status !== "config") return;

    const element = statusRef.current;
    if (!element) return;

    element.focus({ preventScroll: true });
    element.scrollIntoView({ block: "center", behavior: "auto" });
  }, [status]);

  const onSubmit = async (values: ContactFormValues) => {
    setErrorMessage("");

    if (values.website) {
      setStatus("error");
      setErrorMessage("This submission could not be processed. Please try again through the enquiry form.");
      return;
    }

    if (submittingRef.current) return;
    submittingRef.current = true;
    setStatus("loading");

    try {
      await sendEnquiry({
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        organization: values.organization,
        designation: values.designation,
        enquiryType: values.enquiryType as EnquiryType,
        message: values.message,
      });
      reset({
        fullName: "",
        email: "",
        phone: "",
        organization: "",
        designation: "",
        enquiryType: "",
        message: "",
        consent: false,
        website: "",
      });
      setStatus("success");
    } catch (error) {
      if (error instanceof ContactConfigurationError) {
        setStatus("config");
        return;
      }

      setStatus("error");

      if (error instanceof ContactSubmissionError) {
        console.error(
          `Enquiry submission failed (code: ${error.code ?? "UNKNOWN"}, status: ${
            error.status ?? "no HTTP response"
          }).`,
        );

        if (error.code === "RATE_LIMITED" || error.status === 429) {
          setErrorMessage("Too many requests. Please wait a moment and try again.");
        } else if (
          error.code === "VALIDATION_ERROR" ||
          error.code === "INVALID_REQUEST" ||
          error.status === 400 ||
          error.status === 422
        ) {
          setErrorMessage("Some details were not accepted. Check the form and try again.");
        } else if (
          error.code === "SERVICE_UNAVAILABLE" ||
          error.code === "BUSY" ||
          (error.status !== null && error.status >= 500)
        ) {
          setErrorMessage("The enquiry service is temporarily unavailable. Please try again shortly.");
        } else if (error.code === "TIMEOUT") {
          setErrorMessage("The request timed out. Please try again.");
        } else if (error.status === null) {
          setErrorMessage("Check your connection and try again.");
        } else {
          setErrorMessage("Please try again.");
        }
        return;
      }

      console.error("Enquiry submission failed (unknown code, no HTTP response).");
      setErrorMessage("Please try again.");
    } finally {
      submittingRef.current = false;
    }
  };

  const loading = status === "loading" || isSubmitting;

  return (
    <div id="enquiry-form" className="panel panel-corners contact-panel">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <span className="eyebrow">Enquiry form</span>
          <h2 className="display-sm mt-3">Start a conversation</h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-dim">
            Tell us about your institution, program or area of interest. Required fields are marked with an asterisk.
          </p>
        </div>
        <span className="chip chip--cyan">Secure enquiry</span>
      </div>

      {!isContactEndpointConfigured ? (
        <div className="notice-strip mt-6">
          <Info aria-hidden="true" />
          <span>
            <strong className="font-medium text-white">Backend configuration required.</strong> Enquiry delivery is
            not connected in this deployment. Submissions will not be transmitted until a contact endpoint is
            configured. Please use the email or phone details on this page for direct contact.
          </span>
        </div>
      ) : null}

      {status === "success" ? (
        <div
          ref={statusRef}
          className="form-status form-status--success mt-6"
          role="status"
          aria-live="polite"
          tabIndex={-1}
        >
          <CheckCircle2 aria-hidden="true" />
          <div>
            <strong>Thank you!</strong> Your enquiry has been submitted successfully. Our team will contact you soon.
          </div>
        </div>
      ) : null}

      {status === "config" ? (
        <div ref={statusRef} className="form-status form-status--config mt-6" role="alert" tabIndex={-1}>
          <Info aria-hidden="true" />
          <div>
            <strong>Form delivery is not configured</strong>
            No message was sent. This deployment requires a contact endpoint before enquiries can be delivered. Please
            use the email or phone details on this page for direct contact.
          </div>
        </div>
      ) : null}

      {status === "error" ? (
        <div ref={statusRef} className="form-status form-status--error mt-6" role="alert" tabIndex={-1}>
          <AlertCircle aria-hidden="true" />
          <div>
            <strong>Unable to submit your enquiry.</strong> {errorMessage || "Please try again."}
          </div>
        </div>
      ) : null}

      <form className="mt-7" onSubmit={handleSubmit(onSubmit)} noValidate aria-busy={loading}>
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="fullName">
              <span>
                Full name <span className="req">*</span>
              </span>
            </label>
            <input
              id="fullName"
              className="input"
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              maxLength={100}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? fieldErrorId("fullName") : undefined}
              {...register("fullName")}
            />
            {errors.fullName ? (
              <p className="form-error" id={fieldErrorId("fullName")}>
                <AlertCircle aria-hidden="true" />
                {errors.fullName.message}
              </p>
            ) : null}
          </div>

          <div className="form-field">
            <label htmlFor="email">
              <span>
                Email address <span className="req">*</span>
              </span>
            </label>
            <input
              id="email"
              className="input"
              type="email"
              autoComplete="email"
              placeholder="you@university.edu"
              maxLength={160}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? fieldErrorId("email") : undefined}
              {...register("email")}
            />
            {errors.email ? (
              <p className="form-error" id={fieldErrorId("email")}>
                <AlertCircle aria-hidden="true" />
                {errors.email.message}
              </p>
            ) : null}
          </div>

          <div className="form-field">
            <label htmlFor="phone">
              <span>
                Phone number <span className="req">*</span>
              </span>
            </label>
            <input
              id="phone"
              className="input"
              type="tel"
              autoComplete="tel"
              placeholder="+00 00000 00000"
              maxLength={30}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? fieldErrorId("phone") : undefined}
              {...register("phone")}
            />
            {errors.phone ? (
              <p className="form-error" id={fieldErrorId("phone")}>
                <AlertCircle aria-hidden="true" />
                {errors.phone.message}
              </p>
            ) : null}
          </div>

          <div className="form-field">
            <label htmlFor="organization">
              <span>
                Organization / University <span className="req">*</span>
              </span>
            </label>
            <input
              id="organization"
              className="input"
              type="text"
              autoComplete="organization"
              placeholder="Institution or company name"
              maxLength={160}
              aria-invalid={Boolean(errors.organization)}
              aria-describedby={errors.organization ? fieldErrorId("organization") : undefined}
              {...register("organization")}
            />
            {errors.organization ? (
              <p className="form-error" id={fieldErrorId("organization")}>
                <AlertCircle aria-hidden="true" />
                {errors.organization.message}
              </p>
            ) : null}
          </div>

          <div className="form-field">
            <label htmlFor="designation">
              <span>
                Designation <span className="req">*</span>
              </span>
            </label>
            <input
              id="designation"
              className="input"
              type="text"
              autoComplete="organization-title"
              placeholder="Your role or designation"
              maxLength={120}
              aria-invalid={Boolean(errors.designation)}
              aria-describedby={errors.designation ? fieldErrorId("designation") : undefined}
              {...register("designation")}
            />
            {errors.designation ? (
              <p className="form-error" id={fieldErrorId("designation")}>
                <AlertCircle aria-hidden="true" />
                {errors.designation.message}
              </p>
            ) : null}
          </div>

          <div className="form-field">
            <label htmlFor="enquiryType">
              <span>
                Enquiry type <span className="req">*</span>
              </span>
            </label>
            <select
              id="enquiryType"
              className="input"
              aria-invalid={Boolean(errors.enquiryType)}
              aria-describedby={errors.enquiryType ? fieldErrorId("enquiryType") : undefined}
              {...register("enquiryType")}
            >
              <option value="">Select an enquiry type</option>
              {enquiryTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.enquiryType ? (
              <p className="form-error" id={fieldErrorId("enquiryType")}>
                <AlertCircle aria-hidden="true" />
                {errors.enquiryType.message}
              </p>
            ) : null}
          </div>

          <div className="form-field form-field--full">
            <label htmlFor="message">
              <span>
                Message <span className="req">*</span>
              </span>
              <span className="form-field__hint">Minimum 20 characters</span>
            </label>
            <textarea
              id="message"
              className="input"
              rows={5}
              placeholder="Tell us about your institution, program, cohort requirements or question."
              maxLength={2000}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? fieldErrorId("message") : undefined}
              {...register("message")}
            />
            {errors.message ? (
              <p className="form-error" id={fieldErrorId("message")}>
                <AlertCircle aria-hidden="true" />
                {errors.message.message}
              </p>
            ) : null}
          </div>

          <div className="honeypot" aria-hidden="true">
            <label htmlFor="website">Leave this field empty</label>
            <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
          </div>

          <div className="form-field form-field--full">
            <label className="form-consent cursor-pointer" htmlFor="consent">
              <input
                id="consent"
                type="checkbox"
                aria-invalid={Boolean(errors.consent)}
                aria-describedby={errors.consent ? fieldErrorId("consent") : undefined}
                {...register("consent")}
              />
              <span>
                I consent to RudraShield Cyber Systems contacting me about this enquiry. I understand that this is an
                enquiry, not a confirmed engagement.
              </span>
            </label>
            {errors.consent ? (
              <p className="form-error" id={fieldErrorId("consent")}>
                <AlertCircle aria-hidden="true" />
                {errors.consent.message}
              </p>
            ) : null}
          </div>

          <div className="form-field form-field--full mt-1">
            <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="animate-spin" aria-hidden="true" />
                  Submitting Enquiry...
                </>
              ) : (
                <>
                  Submit Enquiry
                  <Send aria-hidden="true" />
                </>
              )}
            </button>
            <p className="table-note mt-2">
              Protected by required-field validation, input limits and spam-trap controls. No API keys are stored in
              the browser.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
