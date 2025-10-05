import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, BookmarkPlus } from "lucide-react";

interface PublicationCardProps {
  id: string;
  title: string;
  mission: string;
  experimentType: string;
  date: string;
  summary: string;
  tags?: string[];
  onViewDetails?: (id: string) => void;
}

export function PublicationCard({
  id,
  title,
  mission,
  experimentType,
  date,
  summary,
  tags = [],
  onViewDetails,
}: PublicationCardProps) {
  return (
    <Card className="p-6 hover-elevate transition-all duration-200" data-testid={`card-publication-${id}`}>
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-2">
            <h3 className="font-semibold text-lg leading-tight">{title}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-mono">{id}</span>
              <span>•</span>
              <span>{date}</span>
            </div>
          </div>
          <FileText className="h-5 w-5 text-muted-foreground flex-shrink-0" />
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" data-testid={`badge-mission-${id}`}>{mission}</Badge>
          <Badge variant="secondary" data-testid={`badge-experiment-${id}`}>{experimentType}</Badge>
        </div>

        <p className="text-sm text-foreground line-clamp-3">{summary}</p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <Badge key={idx} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <div className="flex gap-2 pt-2">
          <Button
            variant="default"
            size="sm"
            className="flex-1"
            onClick={() => {
              onViewDetails?.(id);
              console.log(`Viewing details for: ${id}`);
            }}
            data-testid={`button-view-${id}`}
          >
            View Details
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => console.log(`Saved publication: ${id}`)}
            data-testid={`button-save-${id}`}
          >
            <BookmarkPlus className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => console.log(`Opening external link for: ${id}`)}
            data-testid={`button-external-${id}`}
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
