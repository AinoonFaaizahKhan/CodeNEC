import { useState } from "react";
import { PublicationCard } from "@/components/PublicationCard";
import { PublicationDetailModal } from "@/components/PublicationDetailModal";
import { FilterPanel } from "@/components/FilterPanel";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

//todo: remove mock functionality
const mockPublications = [
  {
    id: "NASA-BIO-2024-001",
    title: "Effects of Microgravity on Plant Cell Wall Development",
    mission: "ISS",
    experimentType: "Plant Biology",
    date: "2024-03-15",
    summary: "This study examines how microgravity conditions affect the development and structural integrity of plant cell walls. Results indicate significant changes in cellulose deposition patterns.",
    tags: ["Microgravity", "Cell Biology", "Agriculture"],
  },
  {
    id: "NASA-BIO-2024-002",
    title: "Bacterial Biofilm Formation in Microgravity Environments",
    mission: "SpaceX",
    experimentType: "Microbiology",
    date: "2024-02-28",
    summary: "Investigation of bacterial biofilm formation patterns under microgravity conditions and implications for spacecraft health and crew safety.",
    tags: ["Biofilm", "Spacecraft Safety", "Microbiology"],
  },
  {
    id: "NASA-BIO-2024-003",
    title: "Human Immune Response During Extended Spaceflight",
    mission: "Artemis",
    experimentType: "Human Health",
    date: "2024-01-20",
    summary: "Comprehensive analysis of immune system changes in astronauts during long-duration missions beyond low Earth orbit.",
    tags: ["Immunology", "Long-duration", "Crew Health"],
  },
  {
    id: "NASA-BIO-2023-045",
    title: "Astrobiology Potential of Europa's Subsurface Ocean",
    mission: "Mars Mission",
    experimentType: "Astrobiology",
    date: "2023-11-10",
    summary: "Research into the habitability potential of Jupiter's moon Europa based on terrestrial extremophile studies.",
    tags: ["Extremophiles", "Europa", "Habitability"],
  },
  {
    id: "NASA-BIO-2023-038",
    title: "Radiation Effects on DNA Repair Mechanisms",
    mission: "ISS",
    experimentType: "Human Health",
    date: "2023-10-05",
    summary: "Study of how cosmic radiation impacts cellular DNA repair processes and long-term implications for deep space missions.",
    tags: ["Radiation", "DNA", "Space Medicine"],
  },
  {
    id: "NASA-BIO-2023-029",
    title: "Algae-Based Life Support Systems for Mars Habitats",
    mission: "Mars Mission",
    experimentType: "Plant Biology",
    date: "2023-09-18",
    summary: "Development and testing of photosynthetic organisms for oxygen production and carbon dioxide removal in closed-loop habitats.",
    tags: ["Life Support", "Mars", "Photosynthesis"],
  },
];

export default function Publications() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedPublication, setSelectedPublication] = useState<typeof mockPublications[0] | null>(null);

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Publications</h1>
          <p className="text-muted-foreground mt-2">Browse all 608 NASA bioscience research publications</p>
        </div>
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          data-testid="button-toggle-filters"
        >
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          {showFilters ? "Hide" : "Show"} Filters
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {showFilters && (
          <div className="lg:col-span-1">
            <FilterPanel isOpen={showFilters} onClose={() => setShowFilters(false)} />
          </div>
        )}
        
        <div className={`${showFilters ? "lg:col-span-3" : "lg:col-span-4"}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {mockPublications.map((pub) => (
              <PublicationCard 
                key={pub.id} 
                {...pub} 
                onViewDetails={() => setSelectedPublication(pub)}
              />
            ))}
          </div>
        </div>
      </div>

      <PublicationDetailModal
        publication={selectedPublication}
        isOpen={!!selectedPublication}
        onClose={() => setSelectedPublication(null)}
      />
    </div>
  );
}
