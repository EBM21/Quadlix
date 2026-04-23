'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center bg-background p-6 text-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold font-heading">System Error</h2>
              <p className="text-muted-foreground">A critical failure occurred in the neural link. Attempting recovery.</p>
              <button 
                onClick={() => window.location.reload()}
                className="px-8 py-4 bg-primary text-white rounded-xl font-bold"
              >
                Re-initialize System
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
