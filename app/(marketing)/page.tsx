import Link from "next/link";
import { ArrowRightIcon, SparkleIcon } from "@/components/icons/Icons";
import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";
import { Badge } from "@/components/ui/Badge";
import { Card, CardBody } from "@/components/ui/Card";

const logos = ["Nova", "Baseline", "Northstar", "Arcadia", "Pulse", "Frame"];

const features = [
  {
    title: "Live Executive Metrics",
    description: "See MRR, churn, retention and cash health in one decision-ready view."
  },
  {
    title: "Insight Automations",
    description: "Automate weekly snapshots and anomaly alerts without manual exports."
  },
  {
    title: "Board-Ready Reporting",
    description: "Create beautiful summaries with clear trends and credible context."
  },
  {
    title: "Revenue Intelligence",
    description: "Track customer movement and expansion signals before they impact growth."
  },
  {
    title: "Team Collaboration",
    description: "Work from shared annotations, comments, and role-based permissions."
  },
  {
    title: "Secure by Default",
    description: "Built-in audit trails, permission controls, and strong defaults."
  }
];

const steps = [
  {
    title: "Connect your stack",
    detail: "Plug in Stripe, CRM, and product events in minutes.",
    outcome: "Implementation team not required."
  },
  {
    title: "Model your KPIs",
    detail: "Define business logic once, then reuse it across teams.",
    outcome: "Reusable metric definitions with full audit history."
  },
  {
    title: "Move faster",
    detail: "Ship sharper decisions with shared trusted dashboards.",
    outcome: "Board and product teams align from the same source."
  }
];

const testimonials = [
  {
    quote: "InsightBoard replaced three tools and gave our leadership one source of truth.",
    name: "Mia Jennings",
    role: "COO, Northstar"
  },
  {
    quote: "Our board updates now take 20 minutes instead of two full days.",
    name: "Ben Wallace",
    role: "Head of Finance, Arcadia"
  },
  {
    quote: "It feels like Stripe quality with analytics depth we actually needed.",
    name: "Sam Rivera",
    role: "Founder, Baseline"
  }
];

const liveMetrics = [
  { label: "Monthly recurring revenue", value: "$482,340", delta: "+14.2%" },
  { label: "Active users", value: "18,240", delta: "+9.5%" },
  { label: "Net retention", value: "118%", delta: "+3.1%" }
];

export default function LandingPage() {
  return (
    <>
      <section className="section marketing-hero">
        <Container>
          <Grid className="hero-grid">
            <div className="col-7 stack-lg reveal">
              <Badge className="hero-badge">Premium Analytics for Product-led Teams</Badge>
              <div className="stack-md">
                <h1 className="title-xl">Decide with precision. Scale with confidence.</h1>
                <p className="text-muted hero-summary">
                  InsightBoard gives founders and operators a clean command center for revenue, retention, and growth.
                  Every signal in one place, designed for velocity.
                </p>
              </div>
              <div className="hero-cta-row">
                <Link href="/signup" className="button button-primary button-md">
                  <SparkleIcon size={16} />
                  <span>Start free trial</span>
                </Link>
                <Link href="/features" className="button button-secondary button-md">
                  <ArrowRightIcon size={16} />
                  <span>Explore features</span>
                </Link>
              </div>
              <div className="hero-proof-list">
                <span>14-day trial</span>
                <span>No credit card</span>
                <span>Cancel anytime</span>
              </div>
            </div>
            <div className="col-5 reveal reveal-delay-2">
              <Card className="hero-snapshot-card">
                <CardBody className="stack-md">
                  <div className="hero-snapshot-head">
                    <strong>Live Snapshot</strong>
                    <Badge variant="success">Realtime</Badge>
                  </div>
                  <div className="hero-metric-list">
                    {liveMetrics.map((metric) => (
                      <div key={metric.label} className="hero-metric-row">
                        <span className="text-muted">{metric.label}</span>
                        <div className="hero-metric-value-wrap">
                          <strong>{metric.value}</strong>
                          <span className="hero-metric-delta">{metric.delta}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div aria-hidden="true" className="hero-track">
                    <span className="hero-track-fill" />
                  </div>
                </CardBody>
              </Card>
            </div>
          </Grid>
        </Container>
      </section>

      <section className="section marketing-trust-section">
        <Container>
          <div className="stack-md">
            <span className="text-muted marketing-trust-label">Trusted by high-velocity teams</span>
            <div className="logo-row marketing-logo-row">
              {logos.map((logo) => (
                <div key={logo} className="logo-chip">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="stack-lg">
            <div className="stack-sm">
              <span className="eyebrow">Features</span>
              <h2 className="title-lg">A premium workflow from metrics to action</h2>
            </div>
            <div className="feature-grid marketing-feature-grid">
              {features.map((feature, index) => (
                <Card key={feature.title} className="marketing-feature-card reveal">
                  <CardBody className="stack-sm">
                    <span className="feature-icon">
                      <span className="feature-icon-index">{String(index + 1).padStart(2, "0")}</span>
                    </span>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="text-muted feature-description">{feature.description}</p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="stack-lg">
            <div className="stack-sm">
              <span className="eyebrow">How It Works</span>
              <h2 className="title-lg">Three steps to a faster analytics loop</h2>
            </div>
            <div className="pricing-grid marketing-steps-grid">
              {steps.map((step, index) => (
                <Card key={step.title} className="marketing-step-card reveal">
                  <CardBody className="stack-sm">
                    <Badge variant="default">Step {index + 1}</Badge>
                    <h3 className="feature-title">{step.title}</h3>
                    <p className="text-muted feature-description">{step.detail}</p>
                    <p className="step-outcome">{step.outcome}</p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="stack-lg">
            <div className="stack-sm">
              <span className="eyebrow">Testimonials</span>
              <h2 className="title-lg">Loved by operators who run lean and fast</h2>
            </div>
            <div className="testimonial-grid marketing-testimonial-grid">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="marketing-testimonial-card reveal">
                  <CardBody className="stack-md">
                    <p className="testimonial-quote">&ldquo;{testimonial.quote}&rdquo;</p>
                    <div className="testimonial-meta">
                      <span className="testimonial-avatar" aria-hidden="true">
                        {testimonial.name.charAt(0)}
                      </span>
                      <p className="text-muted testimonial-author">
                        {testimonial.name} - {testimonial.role}
                      </p>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section marketing-cta-section">
        <Container>
          <Card className="marketing-cta-card">
            <CardBody className="marketing-cta-body">
              <div className="stack-sm">
                <span className="eyebrow">Pricing</span>
                <h2 className="title-lg">Choose your growth lane</h2>
                <p className="text-muted marketing-cta-text">
                  Start with a focused free trial, then scale into advanced reporting and collaboration controls.
                </p>
              </div>
              <div className="marketing-cta-actions">
                <Link href="/pricing" className="button button-secondary button-md">
                  Compare plans
                </Link>
                <Link href="/signup" className="button button-primary button-md">
                  Start free
                </Link>
              </div>
            </CardBody>
          </Card>
        </Container>
      </section>
    </>
  );
}
