"use client";

import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Select } from "@/components/ui/Select";
import { Skeleton } from "@/components/ui/Skeleton";
import { Table } from "@/components/ui/Table";
import { Transaction, mockTransactions } from "@/data/mockTransactions";

function statusToBadge(status: Transaction["status"]) {
  if (status === "Paid") return <Badge variant="success">Paid</Badge>;
  if (status === "Pending") return <Badge variant="warning">Pending</Badge>;
  return <Badge variant="danger">Failed</Badge>;
}

export function TransactionsClient() {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<"all" | Transaction["status"]>("all");

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 950);
    return () => window.clearTimeout(timer);
  }, []);

  const filteredRows = useMemo(() => {
    if (status === "all") return mockTransactions;
    return mockTransactions.filter((item) => item.status === status);
  }, [status]);

  return (
    <Card>
        <CardHeader
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 16
          }}
        >
        <div className="stack-sm">
          <h1 className="title-lg" style={{ fontSize: "1.6rem" }}>
            Transactions
          </h1>
          <p className="text-muted" style={{ margin: 0 }}>
            Monitor billing events and payment status across accounts.
          </p>
        </div>
        <div style={{ minWidth: 220 }}>
          <Select
            id="status-filter"
            label="Filter status"
            value={status}
            onChange={(event) => setStatus(event.target.value as "all" | Transaction["status"])}
            options={[
              { label: "All", value: "all" },
              { label: "Paid", value: "Paid" },
              { label: "Pending", value: "Pending" },
              { label: "Failed", value: "Failed" }
            ]}
          />
        </div>
      </CardHeader>
      <CardBody>
        {loading ? (
          <div className="stack-sm">
            <Skeleton height={18} />
            <Skeleton height={18} />
            <Skeleton height={18} />
            <Skeleton height={18} />
            <Skeleton height={18} />
          </div>
        ) : filteredRows.length === 0 ? (
          <div className="empty-state">
            <h2 style={{ margin: 0, fontSize: "var(--text-lg)" }}>No transactions match this filter.</h2>
            <p className="text-muted" style={{ margin: 0 }}>
              Adjust the status filter or clear it to view all records.
            </p>
            <div>
              <Button variant="secondary" onClick={() => setStatus("all")}>
                Clear filter
              </Button>
            </div>
          </div>
        ) : (
          <Table
            rowKey={(row) => row.id}
            rows={filteredRows}
            columns={[
              { key: "id", label: "Transaction" },
              { key: "customer", label: "Customer" },
              { key: "plan", label: "Plan" },
              { key: "amount", label: "Amount" },
              { key: "status", label: "Status", render: (value) => statusToBadge(value as Transaction["status"]) },
              { key: "date", label: "Date" }
            ]}
          />
        )}
      </CardBody>
    </Card>
  );
}
