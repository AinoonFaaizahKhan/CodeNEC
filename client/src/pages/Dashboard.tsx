import { useState } from "react";
import { FileText, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";
import { StatsCard } from "@/components/StatsCard";
import { PublicationCard } from "@/components/PublicationCard";
import { TrendChart } from "@/components/TrendChart";
import { KnowledgeGraph } from "@/components/KnowledgeGraph";
import { PublicationDetailModal } from "@/components/PublicationDetailModal";
import { UserRole } from "@/components/RoleSwitcher";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface DashboardProps {
  role: UserRole;
}

//todo: remove mock functionality
const mockPublications = [
  {
    id: "NASA-BIO-2024-001",
    title: "Effects of Microgravity on Plant Cell Wall Development",
    mission: "ISS",
    experimentType: "Plant Biology",
    date: "2024-03-15",
    summary: "This study examines how microgravity conditions affect the development and structural integrity of plant cell walls.",
    tags: ["Microgravity", "Cell Biology"],
  },
  {
    id: "NASA-BIO-2024-002",
    title: "Bacterial Biofilm Formation in Microgravity Environments",
    mission: "SpaceX",
    experimentType: "Microbiology",
    date: "2024-02-28",
    summary: "Investigation of bacterial biofilm formation patterns under microgravity conditions and implications for spacecraft health.",
    tags: ["Biofilm", "Spacecraft Safety"],
  },
  {
    id: "NASA-BIO-2024-003",
    title: "Human Immune Response During Extended Spaceflight",
    mission: "Artemis",
    experimentType: "Human Health",
    date: "2024-01-20",
    summary: "Comprehensive analysis of immune system changes in astronauts during long-duration missions.",
    tags: ["Immunology", "Long-duration"],
  },
];

export default function Dashboard({ role }: DashboardProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedPublication, setSelectedPublication] = useState<typeof mockPublications[0] | null>(null);

  const renderScientistView = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Total Publications" value={608} trend={{ value: 12, isPositive: true }} icon={FileText} />
        <StatsCard title="Recent Experiments" value={47} trend={{ value: 8, isPositive: true }} icon={TrendingUp} />
        <StatsCard title="Active Missions" value={12} icon={CheckCircle2} />
        <StatsCard title="My Saved" value={23} icon={FileText} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {mockPublications.map((pub) => (
          <PublicationCard 
            key={pub.id} 
            {...pub} 
            onViewDetails={() => setSelectedPublication(pub)}
          />
        ))}
      </div>

      <KnowledgeGraph />
    </div>
  );

  const renderManagerView = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Total Publications" value={608} trend={{ value: 12, isPositive: true }} icon={FileText} />
        <StatsCard title="Knowledge Gaps" value={34} trend={{ value: 5, isPositive: false }} icon={AlertCircle} />
        <StatsCard title="Active Missions" value={12} icon={CheckCircle2} />
        <StatsCard title="Consensus Rate" value="78%" trend={{ value: 3, isPositive: true }} icon={TrendingUp} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TrendChart title="Publications by Mission" />
        <TrendChart title="Experiment Type Distribution" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TrendChart title="Knowledge Gap Analysis" />
        <TrendChart title="Research Consensus Trends" />
      </div>

      <div className="flex justify-end">
        <Button onClick={() => console.log("Exporting report")} data-testid="button-export-report">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>
    </div>
  );

  const renderArchitectView = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Mission-Ready Insights" value={156} trend={{ value: 15, isPositive: true }} icon={CheckCircle2} />
        <StatsCard title="Critical Findings" value={28} icon={AlertCircle} />
        <StatsCard title="Active Missions" value={12} icon={CheckCircle2} />
        <StatsCard title="Actionable Results" value={89} trend={{ value: 22, isPositive: true }} icon={TrendingUp} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {mockPublications.map((pub) => (
          <PublicationCard 
            key={pub.id} 
            {...pub} 
            onViewDetails={() => setSelectedPublication(pub)}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TrendChart title="Mission Impact Analysis" />
        <KnowledgeGraph />
      </div>

      <div className="flex justify-end gap-3">
        <Button variant="outline" onClick={() => console.log("Viewing mission brief")} data-testid="button-mission-brief">
          View Mission Brief
        </Button>
        <Button onClick={() => console.log("Exporting insights")} data-testid="button-export-insights">
          <Download className="h-4 w-4 mr-2" />
          Export Insights
        </Button>
      </div>
    </div>
  );

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          {role === "scientist" && "Research Dashboard"}
          {role === "manager" && "Management Overview"}
          {role === "architect" && "Mission Planning"}
        </h1>
        <p className="text-muted-foreground mt-2">
          {role === "scientist" && "Explore publications, experiments, and research connections"}
          {role === "manager" && "Monitor trends, gaps, and consensus across research areas"}
          {role === "architect" && "Discover actionable insights for mission planning"}
        </p>
      </div>

      {role === "scientist" && renderScientistView()}
      {role === "manager" && renderManagerView()}
      {role === "architect" && renderArchitectView()}

      <PublicationDetailModal
        publication={selectedPublication}
        isOpen={!!selectedPublication}
        onClose={() => setSelectedPublication(null)}
      />
    </div>
  );
}
