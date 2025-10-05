import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface FilterPanelProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function FilterPanel({ isOpen = true, onClose }: FilterPanelProps) {
  const [mission, setMission] = useState<string>("");
  const [experimentType, setExperimentType] = useState<string>("");
  const [dateRange, setDateRange] = useState<string>("");

  const activeFilters = [
    mission && `Mission: ${mission}`,
    experimentType && `Type: ${experimentType}`,
    dateRange && `Date: ${dateRange}`,
  ].filter(Boolean);

  const clearAll = () => {
    setMission("");
    setExperimentType("");
    setDateRange("");
    console.log("Filters cleared");
  };

  if (!isOpen) return null;

  return (
    <div className="bg-card border border-card-border rounded-lg p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">Filters</h3>
        {onClose && (
          <Button variant="ghost" size="icon" onClick={onClose} data-testid="button-close-filters">
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="mission">Mission</Label>
          <Select value={mission} onValueChange={setMission}>
            <SelectTrigger id="mission" data-testid="select-mission">
              <SelectValue placeholder="Select mission" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="iss">ISS</SelectItem>
              <SelectItem value="spacex">SpaceX</SelectItem>
              <SelectItem value="artemis">Artemis</SelectItem>
              <SelectItem value="mars">Mars Mission</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="experiment-type">Experiment Type</Label>
          <Select value={experimentType} onValueChange={setExperimentType}>
            <SelectTrigger id="experiment-type" data-testid="select-experiment-type">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="microbiology">Microbiology</SelectItem>
              <SelectItem value="plant-biology">Plant Biology</SelectItem>
              <SelectItem value="human-health">Human Health</SelectItem>
              <SelectItem value="astrobiology">Astrobiology</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="date-range">Date Range</Label>
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger id="date-range" data-testid="select-date-range">
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last-year">Last Year</SelectItem>
              <SelectItem value="last-3-years">Last 3 Years</SelectItem>
              <SelectItem value="last-5-years">Last 5 Years</SelectItem>
              <SelectItem value="all-time">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {activeFilters.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Active Filters</span>
            <Button variant="ghost" size="sm" onClick={clearAll} data-testid="button-clear-filters">
              Clear all
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {activeFilters.map((filter, idx) => (
              <Badge key={idx} variant="secondary" data-testid={`badge-filter-${idx}`}>
                {filter}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
