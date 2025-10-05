import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "./ThemeToggle";
import { RoleSwitcher, UserRole } from "./RoleSwitcher";
import { SearchBar } from "./SearchBar";

interface HeaderProps {
  onRoleChange?: (role: UserRole) => void;
  onSearch?: (query: string) => void;
  onFilterClick?: () => void;
}

export function Header({ onRoleChange, onSearch, onFilterClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center gap-4 px-4 lg:px-6">
        <SidebarTrigger data-testid="button-sidebar-toggle" />
        
        <div className="flex-1 max-w-2xl">
          <SearchBar onSearch={onSearch} onFilterClick={onFilterClick} />
        </div>

        <div className="flex items-center gap-3">
          <RoleSwitcher onChange={onRoleChange} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
