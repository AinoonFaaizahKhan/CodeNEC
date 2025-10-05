import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  onFilterClick?: () => void;
  placeholder?: string;
}

export function SearchBar({ onSearch, onFilterClick, placeholder = "Search 608 publications..." }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
    console.log(`Searching for: ${query}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex w-full gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="pl-10 h-12"
          data-testid="input-search"
        />
      </div>
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="h-12 w-12"
        onClick={onFilterClick}
        data-testid="button-filters"
      >
        <SlidersHorizontal className="h-5 w-5" />
      </Button>
    </form>
  );
}
