import { Check, Info, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { ContactForm } from "../components/ContactForm";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { Seo } from "../components/Seo";
import { enquiryTypes, site, type EnquiryType } from "../data/site";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: site.email.value,
    tag: "Placeholder",
  },
  {
    icon: Phone,
    label: "Phone",
    value: site.phone.value,
    tag: "Pending",
  },
  {
    icon: MapPin,
    label: "Office",
    value: site.address.value,
    tag: "Pending",
  },
];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const requestedEnquiry = searchParams.get("enquiry") ?? "";
  const initialEnquiry: EnquiryType | "" = (enquiryTypes as readonly string[]).includes(requestedEnquiry)
    ? (requestedEnquiry as EnquiryType)
    : "";

  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact RudraShield Cyber Systems about university partnerships, cybersecurity training, internships, industry collaboration or general enquiries."
        path="/contact"
      />

      <PageHero
        eyebrow="Contact RudraShield"
        title="Let's build a stronger cybersecurity talent pipeline."
        description="Whether you are a university exploring a partnership, an organisation interested in collaboration or a student seeking program information, start with an enquiry."
        meta={[
          { label: "Enquiry types", value: "05 categories" },
          { label: "Official details", value: "Pending publication" },
          { label: "Form delivery", value: "Configuration required" },
          { label: "Program", value: site.programAcronym },
        ]}
      />

      <section className="section" aria-labelledby="contact-heading">
        <div className="container-shell">
          <div className="contact-layout">
            <div>
              <SectionHeading
                eyebrow="Get in touch"
                title="Start with a conversation."
                description="Share enough context for us to understand your institution, program or question. The more specific your enquiry, the more useful the next conversation can be."
                id="contact-heading"
              />

              <Reveal delay={0.08}>
                <div className="mt-9">
                  {channels.map((channel) => (
                    <div className="contact-channel" key={channel.label}>
                      <span className="contact-channel__icon">
                        <channel.icon aria-hidden="true" />
                      </span>
                      <div>
                        <h3>{channel.label}</h3>
                        <div className="contact-channel__value">
                          <span>{channel.value}</span>
                          <span className="status-tag">{channel.tag}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="notice-strip mt-6">
                  <Info aria-hidden="true" />
                  <span>
                    <strong className="font-medium text-white">Placeholder notice:</strong> official contact details have
                    not been supplied. The email address is a reserved placeholder and is not a live inbox. These must be
                    replaced with confirmed institutional details before launch.
                  </span>
                </div>

                <div className="mt-9">
                  <span className="mono-label">Enquiries we handle</span>
                  <ul className="mt-4 grid gap-0 sm:grid-cols-2">
                    {enquiryTypes.map((type) => (
                      <li
                        className="flex items-start gap-2.5 border-t border-white/5 py-3 text-sm text-ink-soft"
                        key={type}
                      >
                        <Check size={14} className="mt-1 shrink-0 text-cyber-500" aria-hidden="true" />
                        {type}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="callout mt-8">
                  <span className="callout__label">
                    <ShieldCheck size={14} aria-hidden="true" />
                    What happens next
                  </span>
                  <p>
                    Enquiries are reviewed in context. Where there is a fit, the next step is a scoping conversation.
                    Partnership scope, delivery requirements and commercial terms are developed and confirmed per
                    engagement. Timelines may vary by enquiry type.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <ContactForm initialEnquiry={initialEnquiry} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-sm section-bordered" aria-labelledby="contact-note-heading">
        <div className="container-shell">
          <div className="panel panel-corners p-6 md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <span className="eyebrow">Before you submit</span>
                <h2 id="contact-note-heading" className="display-sm mt-3 max-w-2xl">
                  Please do not include confidential or sensitive information.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-ink-dim">
                This public enquiry form is intended for initial contact only. Do not submit personal data about third
                parties, credentials, security vulnerabilities or confidential institutional information. Formal data
                handling terms will be confirmed in the applicable agreement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
