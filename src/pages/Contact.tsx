import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Check,
  Info,
  Mail,
  Phone,
  ShieldCheck,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { ContactForm } from "../components/ContactForm";
import { FaqAccordion } from "../components/FaqAccordion";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { Seo } from "../components/Seo";
import { contactFaqs } from "../data/faqs";
import { enquiryTypes, site, type EnquiryType } from "../data/site";

type ContactChannel = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
};

const channels: ContactChannel[] = [
  {
    icon: Building2,
    label: "Company",
    value: site.name,
  },
  {
    icon: Mail,
    label: "General enquiries",
    value: site.generalEmail.value,
    href: site.generalEmail.href,
  },
  {
    icon: BriefcaseBusiness,
    label: "Hiring & recruitment",
    value: site.hiringEmail.value,
    href: site.hiringEmail.href,
  },
  {
    icon: Phone,
    label: "Phone",
    value: site.phone.value,
    href: site.phone.href,
  },
  {
    icon: UserRound,
    label: "Website owner",
    value: site.owner,
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
        title="Contact RudraShield Cyber Systems"
        description="Contact RudraShield Cyber Systems by email or phone for university partnerships, cybersecurity training, recruitment, internships, industry collaboration or general enquiries."
        path="/contact"
      />

      <PageHero
        eyebrow="Contact RudraShield"
        title="Contact RudraShield Cyber Systems."
        description="Let's build a stronger cybersecurity talent pipeline. Reach our team by email or phone for university partnerships, cybersecurity training, recruitment, internships, industry collaboration or general enquiries."
        meta={[
          { label: "Company", value: site.name },
          { label: "General enquiries", value: "Email & phone" },
          { label: "Hiring & recruitment", value: "Email" },
          { label: "Website owner", value: site.owner },
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
                          {channel.href ? (
                            <a className="contact-channel__link" href={channel.href}>
                              {channel.value}
                            </a>
                          ) : (
                            <span>{channel.value}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="notice-strip mt-6">
                  <Info aria-hidden="true" />
                  <span>
                    <strong className="font-medium text-white">Contact guidance:</strong> use general enquiries for
                    university partnerships, institutional collaborations, training and corporate partnerships. Use
                    hiring &amp; recruitment for resumes and career enquiries.
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

      <section className="section section-veil" aria-labelledby="faq-heading">
        <div className="container-shell">
          <div className="faq-layout">
            <div className="faq-aside">
              <SectionHeading
                eyebrow="Common questions"
                title="Clarity before the first conversation."
                description="Straight answers about curriculum, delivery, career support and how a university partnership begins."
                id="faq-heading"
              />
              <div className="faq-aside__note">
                <span className="mono-label">Still have a different question?</span>
                <a href="#enquiry-form" className="link-arrow mt-3">
                  Go to the enquiry form
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </div>
            <Reveal delay={0.08}>
              <FaqAccordion items={contactFaqs} />
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
