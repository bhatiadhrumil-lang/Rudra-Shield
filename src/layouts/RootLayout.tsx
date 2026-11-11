import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { PageLoader } from "../components/PageLoader";

export function RootLayout() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="site-atmosphere" aria-hidden="true" />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  );
}
