"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";

function passwordRules(value: string) {
  return [
    { label: "At least 8 characters", valid: value.length >= 8 },
    { label: "Contains an uppercase letter", valid: /[A-Z]/.test(value) },
    { label: "Contains a number", valid: /\d/.test(value) }
  ];
}

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const rules = useMemo(() => passwordRules(password), [password]);
  const passwordValid = rules.every((rule) => rule.valid);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!fullName || !email.includes("@") || !passwordValid || !agree) {
      setError("Please complete all required fields and accept the terms.");
      return;
    }

    setError("");
    setSubmitting(true);
    window.setTimeout(() => setSubmitting(false), 1200);
  };

  return (
    <Card className="auth-card">
      <CardHeader className="stack-sm">
        <h1 className="title-lg" style={{ fontSize: "1.6rem" }}>
          Create your account
        </h1>
        <p className="text-muted" style={{ margin: 0 }}>
          Start your 14-day trial and build your executive dashboard.
        </p>
      </CardHeader>
      <CardBody>
        <form className="stack-md" onSubmit={onSubmit} noValidate>
          <Input
            id="name"
            label="Full name"
            autoComplete="name"
            placeholder="Alex Morgan"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
          <Input
            id="email"
            type="email"
            autoComplete="email"
            label="Work email"
            placeholder="you@company.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <div className="stack-sm">
            <Input
              id="password"
              type="password"
              autoComplete="new-password"
              label="Password"
              placeholder="Create a strong password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <ul style={{ margin: 0, paddingLeft: 18, display: "grid", gap: 6 }}>
              {rules.map((rule) => (
                <li
                  key={rule.label}
                  style={{
                    color: rule.valid ? "var(--success)" : "var(--muted)",
                    fontSize: "var(--text-xs)"
                  }}
                >
                  {rule.label}
                </li>
              ))}
            </ul>
          </div>
          <Checkbox
            id="terms"
            label="I agree to the Terms and Privacy Policy"
            checked={agree}
            onChange={(event) => setAgree(event.target.checked)}
          />
          {error ? <p className="input-error-text" role="alert">{error}</p> : null}
          <Button type="submit" loading={submitting} disabled={submitting} style={{ width: "100%" }}>
            Create account
          </Button>
          <p className="text-muted" style={{ margin: 0, fontSize: "var(--text-sm)", textAlign: "center" }}>
            Already have an account?{" "}
            <Link href="/login" style={{ color: "var(--primary)", fontWeight: 600 }}>
              Sign in
            </Link>
          </p>
        </form>
      </CardBody>
    </Card>
  );
}
