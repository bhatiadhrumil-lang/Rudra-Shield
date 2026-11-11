import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("RudraShield route error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container-shell flex min-h-[70vh] flex-col items-start justify-center py-24">
          <span className="eyebrow">Unexpected error</span>
          <h1 className="display-md mt-4">This page could not be displayed.</h1>
          <p className="lede mt-4">
            An unexpected error occurred while rendering this page. Please reload the site or return to the homepage.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" className="btn btn-primary" onClick={() => window.location.reload()}>
              Reload page
            </button>
            <a href="/" className="btn btn-secondary">
              Return home
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
