"use client";

import { useEffect, useState } from "react";
import { BarChart } from "@/components/charts/BarChart";
import { Button } from "@/components/ui/Button";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";
import { Tabs } from "@/components/ui/Tabs";
import { reportBreakdown } from "@/data/mockMetrics";

export function ReportsClient() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <Card>
      <CardHeader className="stack-sm">
        <h1 className="title-lg" style={{ fontSize: "1.6rem" }}>
          Reports
        </h1>
        <p className="text-muted" style={{ margin: 0 }}>
          Generate and share strategic views by team and segment.
        </p>
      </CardHeader>
      <CardBody className="stack-md">
        <Tabs
          tabs={[
            {
              value: "overview",
              label: "Overview",
              content: loading ? <Skeleton height={180} /> : <BarChart data={reportBreakdown} />
            },
            {
              value: "cohorts",
              label: "Cohorts",
              content: (
                <div className="empty-state">
                  <h2 style={{ margin: 0, fontSize: "var(--text-lg)" }}>No cohort data yet</h2>
                  <p className="text-muted" style={{ margin: 0 }}>
                    Connect product event sources to generate retention cohorts.
                  </p>
                  <div>
                    <Button variant="secondary">Connect source</Button>
                  </div>
                </div>
              )
            },
            {
              value: "exports",
              label: "Exports",
              content: (
                <div className="empty-state">
                  <h2 style={{ margin: 0, fontSize: "var(--text-lg)" }}>No scheduled exports</h2>
                  <p className="text-muted" style={{ margin: 0 }}>
                    Create recurring exports to sync reporting with stakeholders.
                  </p>
                  <div>
                    <Button>Create export</Button>
                  </div>
                </div>
              )
            }
          ]}
        />
      </CardBody>
    </Card>
  );
}
