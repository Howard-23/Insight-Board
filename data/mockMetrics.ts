export type Metric = {
  id: string;
  label: string;
  value: string;
  trend: string;
  sparkline: number[];
};

export const mockMetrics: Metric[] = [
  {
    id: "mrr",
    label: "MRR",
    value: "$482,340",
    trend: "+8.9% vs last month",
    sparkline: [32, 38, 35, 44, 49, 55, 61, 67]
  },
  {
    id: "users",
    label: "Active Users",
    value: "18,240",
    trend: "+4.2% vs last month",
    sparkline: [52, 50, 54, 57, 59, 63, 67, 72]
  },
  {
    id: "conversion",
    label: "Conversion",
    value: "5.62%",
    trend: "+0.7pp this quarter",
    sparkline: [2.6, 2.9, 3.1, 3.4, 4.2, 4.9, 5.2, 5.62]
  },
  {
    id: "churn",
    label: "Churn",
    value: "1.84%",
    trend: "-0.3pp this quarter",
    sparkline: [2.9, 2.7, 2.6, 2.4, 2.3, 2.1, 1.9, 1.84]
  }
];

export const reportBreakdown = [
  { label: "Enterprise", value: 83 },
  { label: "Growth", value: 58 },
  { label: "Starter", value: 34 },
  { label: "Trial", value: 17 }
];

export const activityFeed = [
  "New annual plan closed with Orbital Labs.",
  "Billing retry succeeded for BrightOps account.",
  "Team permission updated for Design Squad.",
  "Risk score alert resolved in fraud monitor.",
  "Weekly KPI digest sent to leadership."
];
