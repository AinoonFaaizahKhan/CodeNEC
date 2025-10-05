import { StatsCard } from "../StatsCard";
import { FileText } from "lucide-react";

export default function StatsCardExample() {
  return (
    <div className="p-8 max-w-sm mx-auto">
      <StatsCard
        title="Total Publications"
        value={608}
        trend={{ value: 12, isPositive: true }}
        icon={FileText}
      />
    </div>
  );
}
