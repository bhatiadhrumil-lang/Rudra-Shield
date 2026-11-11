import { ButtonLink } from "../components/ButtonLink";
import { Seo } from "../components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you requested could not be found."
        path="/404"
        noindex
      />
      <section className="page-hero">
        <div className="absolute inset-0 grid-backdrop opacity-70" aria-hidden="true" />
        <div className="container-shell relative z-10 py-16 md:py-24">
          <span className="eyebrow">Error 404</span>
          <h1 className="display-lg mt-5 max-w-3xl">This route is outside the perimeter.</h1>
          <p className="lede mt-5">
            The page you requested does not exist, has moved, or is not publicly available.
          </p>
          <div className="hero-actions">
            <ButtonLink to="/">Return Home</ButtonLink>
            <ButtonLink to="/programs" variant="secondary">
              Explore Programs
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
