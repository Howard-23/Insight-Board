"use client";

import { useEffect } from "react";
import { CloseIcon } from "@/components/icons/Icons";
import { Button } from "@/components/ui/Button";

type ModalProps = {
  title: string;
  description?: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export function Modal({ title, description, open, onClose, children, footer }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={onClose}>
      <div className="modal-panel" onClick={(event) => event.stopPropagation()}>
        <div className="card-header" style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div className="stack-sm">
            <h3 id="modal-title" className="title-lg" style={{ fontSize: "1.25rem" }}>
              {title}
            </h3>
            {description ? <p className="text-muted" style={{ margin: 0 }}>{description}</p> : null}
          </div>
          <Button variant="ghost" aria-label="Close modal" onClick={onClose}>
            <CloseIcon size={16} />
          </Button>
        </div>
        <div className="card-body">{children}</div>
        {footer ? <div className="card-header">{footer}</div> : null}
      </div>
    </div>
  );
}
