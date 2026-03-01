import Link from "next/link";
import { CheckCircleIcon, SparkleIcon } from "@/components/icons/Icons";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Card, CardBody } from "@/components/ui/Card";

const pillars = [
  {
    title: "Executive Dashboard",
    body: "Track the KPIs that matter with clean hierarchy and high signal density."
  },
  {
    title: "Composable Reports",
    body: "Turn recurring analyses into reusable templates your team can trust."
  },
  {
    title: "Revenue Monitoring",
    body: "Detect contraction and expansion trends before they hit quarterly outcomes."
  },
  {
    title: "Workflow Automation",
    body: "Send summaries, alerts, and updates automatically to internal channels."
  },
  {
    title: "Role Permissions",
    body: "Keep access scoped by team, function, and environment with clear auditability."
  },
  {
    title: "Delightful UX",
    body: "Every interaction is tuned for speed, readability, and operational confidence."
  }
];

export default function FeaturesPage() {
  return (
    <section className="section page-transition">
      <Container>
        <div className="stack-lg">
          <div className="stack-md" style={{ maxWidth: 760 }}>
            <Badge>Feature Deep Dive</Badge>
            <h1 className="title-xl">Everything your growth team needs in one system.</h1>
            <p className="text-muted" style={{ margin: 0 }}>
              InsightBoard replaces fragmented spreadsheets and dashboards with one premium command center.
            </p>
          </div>
          <div className="feature-grid">
            {pillars.map((pillar) => (
              <Card key={pillar.title}>
                <CardBody className="stack-sm">
                  <span className="feature-icon">
                    <CheckCircleIcon size={18} />
                  </span>
                  <h2 style={{ margin: 0, fontSize: "var(--text-lg)" }}>{pillar.title}</h2>
                  <p className="text-muted" style={{ margin: 0 }}>
                    {pillar.body}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
          <Card>
            <CardBody
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 14
              }}
            >
              <div className="stack-sm">
                <h2 style={{ margin: 0, fontSize: "var(--text-xl)" }}>Ready to operationalize your metrics?</h2>
                <p className="text-muted" style={{ margin: 0 }}>
                  Start with a 14-day free trial. No card required.
                </p>
              </div>
              <Link href="/signup" className="button button-primary button-md">
                <SparkleIcon size={16} />
                <span>Try InsightBoard</span>
              </Link>
            </CardBody>
          </Card>
        </div>
      </Container>
    </section>
  );
}
