export type TeamMember = {
  id: string;
  name: string;
  role: string;
  email: string;
  status: "Active" | "Invited";
};

export const mockTeam: TeamMember[] = [
  { id: "U-01", name: "Alex Moreno", role: "Founder", email: "alex@insightboard.dev", status: "Active" },
  { id: "U-02", name: "Noa Carter", role: "Product", email: "noa@insightboard.dev", status: "Active" },
  { id: "U-03", name: "Mina Park", role: "Growth", email: "mina@insightboard.dev", status: "Active" },
  { id: "U-04", name: "Riley Shah", role: "Finance", email: "riley@insightboard.dev", status: "Invited" }
];
