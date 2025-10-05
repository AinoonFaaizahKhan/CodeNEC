import { KnowledgeGraph } from "@/components/KnowledgeGraph";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function KnowledgeGraphPage() {
  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Knowledge Graph</h1>
        <p className="text-muted-foreground mt-2">
          Explore connections between experiments, methods, and results
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <KnowledgeGraph />
        </div>

        <div className="lg:col-span-1 space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Graph Statistics</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Nodes</span>
                <span className="font-medium">608</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Connections</span>
                <span className="font-medium">1,847</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Clusters</span>
                <span className="font-medium">42</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Top Connections</h3>
            <div className="space-y-3">
              <div className="space-y-2">
                <p className="text-sm font-medium">Microgravity Effects</p>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline" className="text-xs">Plant Biology</Badge>
                  <Badge variant="outline" className="text-xs">Cell Development</Badge>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Radiation Studies</p>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline" className="text-xs">DNA Repair</Badge>
                  <Badge variant="outline" className="text-xs">Human Health</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
