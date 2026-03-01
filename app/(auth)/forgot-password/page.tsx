"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email.includes("@")) {
      setError("Please enter a valid work email.");
      return;
    }
    setError("");
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <Card className="auth-card">
      <CardHeader className="stack-sm">
        <h1 className="title-lg" style={{ fontSize: "1.6rem" }}>
          Reset password
        </h1>
        <p className="text-muted" style={{ margin: 0 }}>
          We will send reset instructions to your inbox.
        </p>
      </CardHeader>
      <CardBody>
        {submitted ? (
          <div className="stack-md">
            <p style={{ margin: 0 }}>
              If an account exists for <strong>{email}</strong>, a reset link has been sent.
            </p>
            <Link href="/login" className="button button-secondary button-md" style={{ width: "100%" }}>
              Back to sign in
            </Link>
          </div>
        ) : (
          <form className="stack-md" onSubmit={onSubmit} noValidate>
            <Input
              id="reset-email"
              label="Work email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              helperText="Use the email linked to your InsightBoard account."
              error={error || undefined}
            />
            <Button type="submit" loading={loading} disabled={loading} style={{ width: "100%" }}>
              Send reset link
            </Button>
            <p className="text-muted" style={{ margin: 0, fontSize: "var(--text-sm)", textAlign: "center" }}>
              Remembered it?{" "}
              <Link href="/login" style={{ color: "var(--primary)", fontWeight: 600 }}>
                Sign in
              </Link>
            </p>
          </form>
        )}
      </CardBody>
    </Card>
  );
}
