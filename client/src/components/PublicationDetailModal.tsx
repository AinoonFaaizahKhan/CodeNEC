import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ExternalLink, Download, BookmarkPlus } from "lucide-react";

interface Publication {
  id: string;
  title: string;
  mission: string;
  experimentType: string;
  date: string;
  summary: string;
  tags?: string[];
  fullText?: string;
  methods?: string;
  results?: string;
  conclusions?: string;
}

interface PublicationDetailModalProps {
  publication: Publication | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PublicationDetailModal({ publication, isOpen, onClose }: PublicationDetailModalProps) {
  if (!publication) return null;

  //todo: remove mock functionality
  const aiSummary = {
    abstract: publication.summary,
    methods: publication.methods || "AI-generated summary: The study utilized controlled microgravity chambers aboard the ISS to simulate space conditions. Samples were analyzed using spectroscopy and microscopy techniques to measure cellular changes over a 90-day period.",
    results: publication.results || "AI-generated summary: Significant alterations in cell wall structure were observed, with a 23% decrease in cellulose density and modified lignin patterns. Growth rates showed 15% variation compared to ground controls.",
    conclusions: publication.conclusions || "AI-generated summary: Microgravity conditions substantially affect plant cell development, suggesting need for specialized agricultural techniques for space-based food production systems.",
  };

  const fullText = publication.fullText || `
# ${publication.title}

## Abstract
${publication.summary}

## Introduction
This research investigates the fundamental biological processes that occur in space environments, with particular focus on ${publication.experimentType.toLowerCase()} during the ${publication.mission} mission.

## Materials and Methods
The experimental design incorporated state-of-the-art equipment and protocols specifically adapted for space conditions. All procedures followed international space research standards and ethical guidelines.

${aiSummary.methods}

## Results
${aiSummary.results}

## Discussion
The findings have significant implications for future space missions and our understanding of biological systems in microgravity.

## Conclusions
${aiSummary.conclusions}

## References
1. Previous ISS Biology Studies (2020-2023)
2. Ground-based Microgravity Research
3. NASA Space Biology Guidelines
  `.trim();

  const relatedPublications = [
    { id: "NASA-BIO-2023-042", title: "Cell Wall Proteins in Space" },
    { id: "NASA-BIO-2023-035", title: "Microgravity Effects on Plant Growth" },
    { id: "NASA-BIO-2024-005", title: "Agricultural Systems for Mars" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh]" data-testid="modal-publication-detail">
        <DialogHeader>
          <div className="space-y-3">
            <DialogTitle className="text-2xl pr-8">{publication.title}</DialogTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-mono">{publication.id}</span>
              <span>•</span>
              <span>{publication.date}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{publication.mission}</Badge>
              <Badge variant="secondary">{publication.experimentType}</Badge>
              {publication.tags?.map((tag, idx) => (
                <Badge key={idx} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </DialogHeader>

        <Tabs defaultValue="summary" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="summary" data-testid="tab-summary">AI Summary</TabsTrigger>
            <TabsTrigger value="fulltext" data-testid="tab-fulltext">Full Text</TabsTrigger>
            <TabsTrigger value="connections" data-testid="tab-connections">Connections</TabsTrigger>
            <TabsTrigger value="citations" data-testid="tab-citations">Citations</TabsTrigger>
          </TabsList>

          <ScrollArea className="h-[400px] mt-4">
            <TabsContent value="summary" className="space-y-4 p-1">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Abstract</h4>
                  <p className="text-sm leading-relaxed">{aiSummary.abstract}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Methods</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">{aiSummary.methods}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Results</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">{aiSummary.results}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Conclusions</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">{aiSummary.conclusions}</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="fulltext" className="p-1">
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <div className="whitespace-pre-wrap text-sm leading-relaxed">{fullText}</div>
              </div>
            </TabsContent>

            <TabsContent value="connections" className="space-y-4 p-1">
              <div>
                <h4 className="font-semibold mb-3">Related Publications</h4>
                <div className="space-y-2">
                  {relatedPublications.map((pub) => (
                    <div
                      key={pub.id}
                      className="p-3 border rounded-lg hover-elevate transition-all"
                      data-testid={`related-${pub.id}`}
                    >
                      <p className="font-medium text-sm">{pub.title}</p>
                      <p className="text-xs text-muted-foreground font-mono mt-1">{pub.id}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="citations" className="p-1">
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  This publication has been cited 12 times in related research.
                </p>
                <div className="space-y-2">
                  <div className="p-3 border rounded-lg">
                    <p className="text-sm font-medium">Advanced Microgravity Studies (2024)</p>
                    <p className="text-xs text-muted-foreground mt-1">Journal of Space Biology</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <p className="text-sm font-medium">Plant Growth Systems Review (2024)</p>
                    <p className="text-xs text-muted-foreground mt-1">Space Agriculture Quarterly</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </ScrollArea>
        </Tabs>

        <div className="flex gap-2 pt-4 border-t">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => console.log("Saved:", publication.id)}
            data-testid="button-save-publication"
          >
            <BookmarkPlus className="h-4 w-4 mr-2" />
            Save
          </Button>
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => console.log("Download:", publication.id)}
            data-testid="button-download-publication"
          >
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
          <Button
            variant="default"
            className="flex-1"
            onClick={() => console.log("External link:", publication.id)}
            data-testid="button-external-publication"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            View Source
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
