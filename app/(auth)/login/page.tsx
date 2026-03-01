"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email.includes("@") || password.length < 8) {
      setError("Use a valid email and a password with at least 8 characters.");
      return;
    }

    setError("");
    setLoading(true);
    window.setTimeout(() => setLoading(false), 1100);
  };

  return (
    <Card className="auth-card">
      <CardHeader className="stack-sm">
        <h1 className="title-lg" style={{ fontSize: "1.6rem" }}>
          Welcome back
        </h1>
        <p className="text-muted" style={{ margin: 0 }}>
          Sign in to continue to your analytics workspace.
        </p>
      </CardHeader>
      <CardBody>
        <form className="stack-md" onSubmit={onSubmit} noValidate>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            label="Work email"
            placeholder="you@company.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            invalid={Boolean(error)}
          />
          <Input
            id="password"
            type="password"
            autoComplete="current-password"
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            invalid={Boolean(error)}
          />
          {error ? <p className="input-error-text" role="alert">{error}</p> : null}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <Checkbox
              id="remember"
              label="Remember me"
              checked={remember}
              onChange={(event) => setRemember(event.target.checked)}
            />
            <Link href="/forgot-password" className="text-muted" style={{ fontSize: "var(--text-sm)" }}>
              Forgot password?
            </Link>
          </div>
          <Button type="submit" loading={loading} disabled={loading} style={{ width: "100%" }}>
            Sign in
          </Button>
          <p className="text-muted" style={{ margin: 0, fontSize: "var(--text-sm)", textAlign: "center" }}>
            No account yet?{" "}
            <Link href="/signup" style={{ color: "var(--primary)", fontWeight: 600 }}>
              Create one
            </Link>
          </p>
        </form>
      </CardBody>
    </Card>
  );
}
