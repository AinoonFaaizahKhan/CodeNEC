import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut, Maximize2 } from "lucide-react";

export function KnowledgeGraph() {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Knowledge Graph</h3>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => console.log("Zoom in")}
              data-testid="button-zoom-in"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => console.log("Zoom out")}
              data-testid="button-zoom-out"
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => console.log("Fullscreen")}
              data-testid="button-fullscreen"
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="relative h-96 bg-background border border-border rounded-md overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="space-y-4 text-center">
              <div className="relative w-64 h-64 mx-auto">
                {/* Mock graph visualization */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary border-4 border-background" />
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-chart-2 border-4 border-background" />
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-chart-3 border-4 border-background" />
                <div className="absolute top-1/2 left-8 -translate-y-1/2 w-12 h-12 rounded-full bg-chart-4 border-4 border-background" />
                <div className="absolute top-1/2 right-8 -translate-y-1/2 w-12 h-12 rounded-full bg-chart-5 border-4 border-background" />
                
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <line x1="50%" y1="50%" x2="50%" y2="20%" stroke="currentColor" strokeWidth="2" className="text-border" />
                  <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="currentColor" strokeWidth="2" className="text-border" />
                  <line x1="50%" y1="50%" x2="20%" y2="50%" stroke="currentColor" strokeWidth="2" className="text-border" />
                  <line x1="50%" y1="50%" x2="80%" y2="50%" stroke="currentColor" strokeWidth="2" className="text-border" />
                </svg>
              </div>
              <p className="text-sm text-muted-foreground">
                Interactive knowledge graph showing connections between experiments
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-muted-foreground">Core Experiment</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-chart-2" />
            <span className="text-muted-foreground">Related Studies</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-chart-3" />
            <span className="text-muted-foreground">Methods</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
