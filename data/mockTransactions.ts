export type Transaction = {
  id: string;
  customer: string;
  plan: string;
  amount: string;
  status: "Paid" | "Pending" | "Failed";
  date: string;
};

export const mockTransactions: Transaction[] = [
  { id: "TX-1001", customer: "Orbital Labs", plan: "Enterprise", amount: "$12,400", status: "Paid", date: "2026-02-27" },
  { id: "TX-1002", customer: "Nordline", plan: "Growth", amount: "$4,250", status: "Paid", date: "2026-02-27" },
  { id: "TX-1003", customer: "Pilotly", plan: "Starter", amount: "$1,120", status: "Pending", date: "2026-02-26" },
  { id: "TX-1004", customer: "Paperlane", plan: "Growth", amount: "$3,930", status: "Paid", date: "2026-02-25" },
  { id: "TX-1005", customer: "Fluxive", plan: "Starter", amount: "$980", status: "Failed", date: "2026-02-25" },
  { id: "TX-1006", customer: "AlignIQ", plan: "Enterprise", amount: "$18,600", status: "Paid", date: "2026-02-24" }
];
