"use client";

import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex flex-col items-center justify-center p-6 border border-red-100 bg-red-50/30 rounded-2xl text-center space-y-3">
          <span className="text-3xl">⚠️</span>
          <div>
            <p className="text-xs font-bold text-ink uppercase tracking-wider">Failed to load content</p>
            <p className="text-[11px] text-muted mt-1 max-w-xs">
              We encountered a minor issue loading this part of the page.
            </p>
          </div>
          <button
            onClick={this.handleReset}
            className="text-[11px] font-black uppercase tracking-wider bg-olive text-white px-4 py-1.5 rounded-xl hover:bg-olive-dark transition active:scale-[0.98] shadow-sm"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
