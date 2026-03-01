"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Switch } from "@/components/ui/Switch";
import { Tooltip } from "@/components/ui/Tooltip";
import { useToast } from "@/components/ui/Toast";

export function SettingsClient() {
  const [workspaceName, setWorkspaceName] = useState("InsightBoard Labs");
  const [timezone, setTimezone] = useState("UTC+08:00");
  const [weeklyEmail, setWeeklyEmail] = useState(true);
  const [incidentAlerts, setIncidentAlerts] = useState(false);
  const [consent, setConsent] = useState(true);
  const { pushToast } = useToast();

  return (
    <div className="stack-lg">
      <Card>
        <CardHeader className="stack-sm">
          <h1 className="title-lg" style={{ fontSize: "1.6rem" }}>
            Settings
          </h1>
          <p className="text-muted" style={{ margin: 0 }}>
            Configure workspace preferences, notifications, and defaults.
          </p>
        </CardHeader>
        <CardBody className="stack-md">
          <Input
            id="workspace-name"
            label="Workspace name"
            value={workspaceName}
            onChange={(event) => setWorkspaceName(event.target.value)}
          />
          <Select
            id="timezone"
            label="Timezone"
            value={timezone}
            onChange={(event) => setTimezone(event.target.value)}
            options={[
              { label: "UTC+08:00", value: "UTC+08:00" },
              { label: "UTC+00:00", value: "UTC+00:00" },
              { label: "UTC-05:00", value: "UTC-05:00" }
            ]}
          />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
            <div className="stack-sm">
              <strong>Weekly summary email</strong>
              <span className="text-muted" style={{ fontSize: "var(--text-sm)" }}>
                Receive performance snapshots every Monday.
              </span>
            </div>
            <Switch checked={weeklyEmail} onCheckedChange={setWeeklyEmail} ariaLabel="Toggle weekly summary email" />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
            <div className="stack-sm">
              <strong>Incident alerts</strong>
              <span className="text-muted" style={{ fontSize: "var(--text-sm)" }}>
                Get critical anomaly alerts in real time.
              </span>
            </div>
            <Switch checked={incidentAlerts} onCheckedChange={setIncidentAlerts} ariaLabel="Toggle incident alerts" />
          </div>
          <Checkbox
            id="consent"
            label="Allow product updates and release notes via email"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
          />
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Button
              onClick={() =>
                pushToast({
                  title: "Settings saved",
                  description: "Your workspace preferences have been updated."
                })
              }
            >
              Save changes
            </Button>
            <Tooltip label="Updates workspace-level preferences only">
              <span className="text-muted" style={{ fontSize: "var(--text-sm)" }}>
                What does this affect?
              </span>
            </Tooltip>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
