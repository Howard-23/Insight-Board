"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { CloseIcon } from "@/components/icons/Icons";

type ToastItem = {
  id: string;
  title: string;
  description?: string;
};

type ToastContextValue = {
  pushToast: (toast: Omit<ToastItem, "id">) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const pushToast = useCallback((toast: Omit<ToastItem, "id">) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((current) => [...current, { ...toast, id }]);
    window.setTimeout(() => {
      setToasts((current) => current.filter((item) => item.id !== id));
    }, 2800);
  }, []);

  const dismiss = (id: string) => setToasts((current) => current.filter((item) => item.id !== id));

  const value = useMemo(() => ({ pushToast }), [pushToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: "fixed",
          right: 20,
          bottom: 20,
          display: "grid",
          gap: 10,
          zIndex: 60
        }}
      >
        {toasts.map((toast) => (
          <div key={toast.id} className="card" style={{ minWidth: 280, maxWidth: 360, padding: "14px 14px 12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
              <div className="stack-sm">
                <strong>{toast.title}</strong>
                {toast.description ? <span className="text-muted" style={{ fontSize: "var(--text-sm)" }}>{toast.description}</span> : null}
              </div>
              <button
                type="button"
                className="button button-ghost"
                aria-label="Dismiss notification"
                onClick={() => dismiss(toast.id)}
                style={{ padding: 6, borderRadius: 8 }}
              >
                <CloseIcon size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used inside ToastProvider");
  }
  return context;
}
