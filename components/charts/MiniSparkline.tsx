type MiniSparklineProps = {
  points: number[];
  color?: string;
};

export function MiniSparkline({ points, color = "var(--primary)" }: MiniSparklineProps) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = Math.max(max - min, 1);

  const path = points
    .map((point, index) => {
      const x = (index / (points.length - 1)) * 100;
      const y = 100 - ((point - min) / range) * 100;
      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" style={{ width: "100%", height: 58 }}>
      <path
        d={`${path} L 100 100 L 0 100 Z`}
        fill={`color-mix(in oklab, ${color} 14%, transparent)`}
        stroke="none"
      />
      <path d={path} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
