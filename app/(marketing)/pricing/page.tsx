import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";

const tiers = [
  {
    name: "Starter",
    price: "$49",
    note: "/month",
    description: "For early-stage teams validating growth loops.",
    features: ["Up to 3 teammates", "Core dashboard", "Email digests"]
  },
  {
    name: "Growth",
    price: "$199",
    note: "/month",
    description: "For scaling teams managing multiple product funnels.",
    features: ["Up to 15 teammates", "Automated reports", "Custom alerts"]
  },
  {
    name: "Enterprise",
    price: "Custom",
    note: "annual",
    description: "For complex organizations requiring governance at scale.",
    features: ["Unlimited seats", "Advanced permissions", "Priority support"]
  }
];

export default function PricingPage() {
  return (
    <section className="section page-transition">
      <Container>
        <div className="stack-lg">
          <div className="stack-md" style={{ maxWidth: 720 }}>
            <Badge>Pricing</Badge>
            <h1 className="title-xl">Simple pricing. Premium product.</h1>
            <p className="text-muted" style={{ margin: 0 }}>
              Start free, then upgrade when your reporting cadence demands more power.
            </p>
          </div>

          <div className="pricing-grid">
            {tiers.map((tier, index) => (
              <Card key={tier.name}>
                <CardHeader className="stack-sm">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h2 style={{ margin: 0, fontSize: "var(--text-xl)" }}>{tier.name}</h2>
                    {index === 1 ? <Badge variant="success">Most Popular</Badge> : null}
                  </div>
                  <p className="text-muted" style={{ margin: 0 }}>
                    {tier.description}
                  </p>
                </CardHeader>
                <CardBody className="stack-md">
                  <p style={{ margin: 0, display: "flex", alignItems: "baseline", gap: 8 }}>
                    <span style={{ fontSize: "var(--text-2xl)", fontWeight: 700 }}>{tier.price}</span>
                    <span className="text-muted">{tier.note}</span>
                  </p>
                  <ul style={{ margin: 0, paddingLeft: 18, display: "grid", gap: 8 }}>
                    {tier.features.map((item) => (
                      <li key={item} className="text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/signup"
                    className={`button ${index === 1 ? "button-primary" : "button-secondary"} button-md`}
                    style={{ width: "100%" }}
                  >
                    {index === 2 ? "Contact sales" : "Start free"}
                  </Link>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
