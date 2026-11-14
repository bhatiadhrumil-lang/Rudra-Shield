import { ArrowUpRight, BriefcaseBusiness, Mail, Phone, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { footerNavigation } from "../data/navigation";
import { site } from "../data/site";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container-shell pt-14 pb-8">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.55fr_0.7fr_0.9fr]">
          <div>
            <Logo variant="stacked" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-dim">
              An industry-integrated cybersecurity education partner for universities and institutions, focused on
              practical capability, employability and career development.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="chip chip--cyan">{site.programAcronym}</span>
              <span className="chip">University–Industry</span>
            </div>
          </div>

          {footerNavigation.map((group) => (
            <div key={group.heading}>
              <h2 className="footer-col-heading">{group.heading}</h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="footer-col-heading">Get in touch</h2>
            <p className="mt-4 text-sm font-medium text-ink-soft">{site.name}</p>
            <ul className="mt-4 flex flex-col gap-3.5">
              <li className="flex items-start gap-2.5">
                <Mail size={14} className="mt-1 shrink-0 text-cyber-500" aria-hidden="true" />
                <span>
                  <span className="footer-contact-label">General enquiries</span>
                  <a className="footer-contact-link" href={site.generalEmail.href}>
                    {site.generalEmail.value}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <BriefcaseBusiness size={14} className="mt-1 shrink-0 text-cyber-500" aria-hidden="true" />
                <span>
                  <span className="footer-contact-label">Hiring &amp; recruitment</span>
                  <a className="footer-contact-link" href={site.hiringEmail.href}>
                    {site.hiringEmail.value}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={14} className="mt-1 shrink-0 text-cyber-500" aria-hidden="true" />
                <span>
                  <span className="footer-contact-label">Phone</span>
                  <a className="footer-contact-link" href={site.phone.href}>
                    {site.phone.value}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <UserRound size={14} className="mt-1 shrink-0 text-cyber-500" aria-hidden="true" />
                <span>
                  <span className="footer-contact-label">Website owner</span>
                  <span className="text-xs leading-relaxed text-ink-dim">{site.owner}</span>
                </span>
              </li>
            </ul>
            <Link to="/contact" className="link-arrow mt-5">
              Contact our team
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/5 pt-6 md:flex-row md:items-start md:justify-between">
          <p className="max-w-3xl text-[0.68rem] leading-relaxed text-ink-dim">
            Program statistics, outcomes and lab environments describe the U-CSVAP framework and its intended scope.
            They are program targets and are not independently verified achievements. Lab provisioning, certifications
            and commercial terms are confirmed through institutional agreements.
          </p>
          <p className="shrink-0 font-mono text-[0.58rem] uppercase tracking-[0.1em] text-ink-dim">
            Career support only — no employment guarantee
          </p>
        </div>

        <div className="footer-bottom">
          <span>© {year} RudraShield Cyber Systems. All rights reserved.</span>
          <span>Designed for university, industry and student audiences.</span>
        </div>
      </div>
    </footer>
  );
}
