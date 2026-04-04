import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught app error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: "2rem", color: "#ff4444", backgroundColor: "#111", minHeight: "100vh", zIndex: 99999, position: "relative" }}>
                    <h2>Application Crashed!</h2>
                    <p style={{ fontFamily: "monospace", fontSize: "1.2rem" }}>{this.state.error?.message}</p>
                    <p>Please check your F12 Developer Tools Console for the exact code line causing this.</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;