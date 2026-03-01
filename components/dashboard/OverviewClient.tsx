"use client";

import { useEffect, useState } from "react";
import { BarChart } from "@/components/charts/BarChart";
import { MiniSparkline } from "@/components/charts/MiniSparkline";
import { Badge } from "@/components/ui/Badge";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";
import { Table } from "@/components/ui/Table";
import { activityFeed, mockMetrics, reportBreakdown } from "@/data/mockMetrics";
import { Transaction, mockTransactions } from "@/data/mockTransactions";

function statusBadge(status: Transaction["status"]) {
  if (status === "Paid") return <Badge variant="success">Paid</Badge>;
  if (status === "Pending") return <Badge variant="warning">Pending</Badge>;
  return <Badge variant="danger">Failed</Badge>;
}

function SkeletonMetricCard() {
  return (
    <Card>
      <CardBody className="stack-sm">
        <Skeleton width="55%" />
        <Skeleton width="75%" height={26} />
        <Skeleton width="42%" />
        <Skeleton width="100%" height={58} />
      </CardBody>
    </Card>
  );
}

export function OverviewClient() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="stack-lg">
      <section className="metric-grid" aria-label="Key performance metrics">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => <SkeletonMetricCard key={index} />)
          : mockMetrics.map((metric) => (
              <Card key={metric.id}>
                <CardBody className="kpi">
                  <span className="kpi-label">{metric.label}</span>
                  <h2 className="kpi-value">{metric.value}</h2>
                  <span className="kpi-trend">{metric.trend}</span>
                  <MiniSparkline points={metric.sparkline} />
                </CardBody>
              </Card>
            ))}
      </section>

      <section className="split-grid">
        <Card>
          <CardHeader className="stack-sm">
            <h3 style={{ margin: 0, fontSize: "var(--text-xl)" }}>Recent transactions</h3>
            <p className="text-muted" style={{ margin: 0 }}>
              Latest billing events in your workspace.
            </p>
          </CardHeader>
          <CardBody>
            {loading ? (
              <div className="stack-sm">
                <Skeleton height={16} />
                <Skeleton height={16} />
                <Skeleton height={16} />
                <Skeleton height={16} />
              </div>
            ) : (
              <Table
                caption="Recent transaction list"
                rowKey={(row) => row.id}
                rows={mockTransactions.slice(0, 5)}
                columns={[
                  { key: "id", label: "ID" },
                  { key: "customer", label: "Customer" },
                  { key: "amount", label: "Amount" },
                  { key: "status", label: "Status", render: (value) => statusBadge(value as Transaction["status"]) }
                ]}
              />
            )}
          </CardBody>
        </Card>

        <div className="stack-md">
          <Card>
            <CardHeader className="stack-sm">
              <h3 style={{ margin: 0, fontSize: "var(--text-lg)" }}>Plan mix</h3>
              <p className="text-muted" style={{ margin: 0 }}>
                Revenue concentration by segment.
              </p>
            </CardHeader>
            <CardBody>{loading ? <Skeleton height={140} /> : <BarChart data={reportBreakdown} />}</CardBody>
          </Card>
          <Card>
            <CardHeader className="stack-sm">
              <h3 style={{ margin: 0, fontSize: "var(--text-lg)" }}>Activity feed</h3>
            </CardHeader>
            <CardBody>
              {loading ? (
                <div className="stack-sm">
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                </div>
              ) : (
                <ul style={{ margin: 0, paddingLeft: 18, display: "grid", gap: 10 }}>
                  {activityFeed.map((item) => (
                    <li key={item} className="text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </CardBody>
          </Card>
        </div>
      </section>
    </div>
  );
}
