import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { mainNavigation } from "../data/navigation";
import { site } from "../data/site";
import { ButtonLink } from "./ButtonLink";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const reducedMotion = useReducedMotion();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    }, 80);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        window.setTimeout(() => toggleRef.current?.focus(), 20);
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) return;
      const focusable = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex="0"]'),
      ).filter((element) => element.offsetParent !== null);

      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
        <div className="container-shell site-header__inner">
          <Logo />

          <nav className="nav-desktop hidden items-center gap-[1.2rem] xl:flex" aria-label="Primary navigation">
            {mainNavigation.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === "/"} className="nav-link">
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <ButtonLink
              to="/contact?enquiry=University%20Partnership"
              size="sm"
              className="header-cta"
            >
              Partner With Us
            </ButtonLink>
            <button
              ref={toggleRef}
              type="button"
              className="mobile-toggle"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-navigation"
            ref={menuRef}
            className="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <div className="container-shell flex min-h-full flex-col py-7">
              <nav aria-label="Mobile primary navigation">
                <ul>
                  {mainNavigation.map((item, index) => (
                    <li key={item.to}>
                      <NavLink
                        to={item.to}
                        end={item.to === "/"}
                        className="mobile-menu__link"
                        onClick={() => setOpen(false)}
                      >
                        <span>{item.label}</span>
                        <span className="flex items-center gap-3">
                          <span className="mobile-menu__index">{String(index + 1).padStart(2, "0")}</span>
                          <ArrowUpRight size={16} aria-hidden="true" className="text-cyber-500" />
                        </span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-auto pt-10">
                <ButtonLink
                  to="/contact?enquiry=University%20Partnership"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Partner With Us
                </ButtonLink>
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <span className="chip chip--cyan">{site.programAcronym}</span>
                  <span className="chip">Value-added program</span>
                  <span className="chip">No curriculum change</span>
                </div>
                <p className="mt-5 text-xs leading-relaxed text-ink-dim">
                  Industry-integrated cybersecurity education, practical labs and career readiness, delivered
                  alongside existing university degree programs.
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
