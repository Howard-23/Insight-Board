"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Modal } from "@/components/ui/Modal";
import { Select } from "@/components/ui/Select";
import { Table } from "@/components/ui/Table";
import { useToast } from "@/components/ui/Toast";
import { TeamMember, mockTeam } from "@/data/mockTeam";

function memberStatus(status: TeamMember["status"]) {
  return status === "Active" ? <Badge variant="success">Active</Badge> : <Badge variant="warning">Invited</Badge>;
}

export function TeamClient() {
  const [members] = useState(mockTeam);
  const [inviteOpen, setInviteOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Viewer");
  const { pushToast } = useToast();

  return (
    <>
      <Card>
        <CardHeader
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap"
          }}
        >
          <div className="stack-sm">
            <h1 className="title-lg" style={{ fontSize: "1.6rem" }}>
              Team
            </h1>
            <p className="text-muted" style={{ margin: 0 }}>
              Manage workspace collaborators and role access.
            </p>
          </div>
          <Button onClick={() => setInviteOpen(true)}>Invite teammate</Button>
        </CardHeader>
        <CardBody>
          <Table
            rowKey={(row) => row.id}
            rows={members}
            columns={[
              { key: "name", label: "Name" },
              { key: "role", label: "Role" },
              { key: "email", label: "Email" },
              { key: "status", label: "Status", render: (value) => memberStatus(value as TeamMember["status"]) }
            ]}
          />
        </CardBody>
      </Card>

      <Modal
        open={inviteOpen}
        onClose={() => setInviteOpen(false)}
        title="Invite teammate"
        description="Add a collaborator and assign their initial role."
        footer={
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
            <Button variant="secondary" onClick={() => setInviteOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                setInviteOpen(false);
                pushToast({ title: "Invite sent", description: `Invitation sent to ${email || "new teammate"}.` });
              }}
            >
              Send invite
            </Button>
          </div>
        }
      >
        <div className="stack-md">
          <Input
            id="invite-email"
            type="email"
            label="Email"
            placeholder="colleague@company.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Select
            id="invite-role"
            label="Role"
            value={role}
            onChange={(event) => setRole(event.target.value)}
            options={[
              { label: "Viewer", value: "Viewer" },
              { label: "Editor", value: "Editor" },
              { label: "Admin", value: "Admin" }
            ]}
          />
        </div>
      </Modal>
    </>
  );
}
