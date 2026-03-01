type BarDatum = {
  label: string;
  value: number;
};

type BarChartProps = {
  data: BarDatum[];
};

export function BarChart({ data }: BarChartProps) {
  const max = Math.max(...data.map((item) => item.value), 1);

  return (
    <div style={{ display: "grid", gap: "var(--space-3)" }}>
      {data.map((item) => (
        <div key={item.label} style={{ display: "grid", gap: "6px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--text-sm)" }}>
            <span className="text-muted">{item.label}</span>
            <strong>{item.value}%</strong>
          </div>
          <div
            aria-hidden="true"
            style={{
              width: "100%",
              height: 12,
              borderRadius: 999,
              background: "var(--surface-hover)",
              overflow: "hidden",
              border: "1px solid var(--border)"
            }}
          >
            <div
              style={{
                width: `${(item.value / max) * 100}%`,
                height: "100%",
                borderRadius: "inherit",
                background: "linear-gradient(90deg, var(--primary), var(--success))"
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
