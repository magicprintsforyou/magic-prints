'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RotateCcw } from 'lucide-react';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[400px] flex items-center justify-center p-6 bg-[#0f172a] rounded-3xl border border-white/10 m-4">
          <div className="text-center space-y-6 max-w-md">
            <div className="w-20 h-20 bg-red-500/20 rounded-full mx-auto flex items-center justify-center text-red-500 shadow-2xl shadow-red-500/20">
              <AlertCircle size={40} />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter italic">Interface Flicker</h2>
              <p className="text-white/40 text-sm font-medium">A client-side exception occurred while rendering this section.</p>
            </div>
            
            <div className="bg-black/40 p-4 rounded-xl border border-white/5 text-left">
              <p className="text-[10px] font-mono text-red-400 break-words opacity-80">
                {this.state.error?.message || 'Unknown runtime error'}
              </p>
            </div>

            <button
              onClick={() => this.setState({ hasError: false })}
              className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-black tracking-widest uppercase hover:bg-[#d90082] hover:border-transparant transition-all flex items-center gap-2 mx-auto"
            >
              <RotateCcw size={16} /> Attempt Recovery
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
