import { Card } from "@/components/ui/card";
import { ArrowUp, ArrowDown, LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  icon: LucideIcon;
}

export function StatsCard({ title, value, trend, icon: Icon }: StatsCardProps) {
  return (
    <Card className="p-6">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{title}</p>
          <Icon className="h-5 w-5 text-muted-foreground" />
        </div>
        <div className="space-y-1">
          <p className="text-4xl font-bold" data-testid={`stat-value-${title}`}>{value}</p>
          {trend && (
            <div className="flex items-center gap-1">
              {trend.isPositive ? (
                <ArrowUp className="h-4 w-4 text-chart-2" />
              ) : (
                <ArrowDown className="h-4 w-4 text-destructive" />
              )}
              <span className={`text-sm font-medium ${trend.isPositive ? 'text-chart-2' : 'text-destructive'}`}>
                {Math.abs(trend.value)}%
              </span>
              <span className="text-sm text-muted-foreground">vs last month</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
