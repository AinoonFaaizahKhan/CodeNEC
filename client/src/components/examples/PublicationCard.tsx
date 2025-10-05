import { PublicationCard } from "../PublicationCard";

export default function PublicationCardExample() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <PublicationCard
        id="NASA-BIO-2024-001"
        title="Effects of Microgravity on Plant Cell Wall Development"
        mission="ISS"
        experimentType="Plant Biology"
        date="2024-03-15"
        summary="This study examines how microgravity conditions affect the development and structural integrity of plant cell walls. Results indicate significant changes in cellulose deposition patterns and cell wall thickness in space-grown specimens compared to ground controls."
        tags={["Microgravity", "Cell Biology", "Agriculture"]}
      />
    </div>
  );
}
