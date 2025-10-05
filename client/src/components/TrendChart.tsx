import { Card } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

interface TrendChartProps {
  title: string;
  type?: "bar" | "line" | "area";
}

export function TrendChart({ title, type = "bar" }: TrendChartProps) {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <BarChart3 className="h-5 w-5 text-muted-foreground" />
        </div>
        
        <div className="h-64 relative">
          {/* Mock chart visualization */}
          <div className="absolute inset-0 flex items-end justify-around gap-2 p-4">
            {[40, 65, 45, 80, 55, 70, 60].map((height, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full rounded-t-md transition-all hover-elevate"
                  style={{
                    height: `${height}%`,
                    backgroundColor: `hsl(var(--chart-${(idx % 5) + 1}))`,
                  }}
                />
                <span className="text-xs text-muted-foreground">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'][idx]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Publications over time</span>
          <span>Total: 608</span>
        </div>
      </div>
    </Card>
  );
}
