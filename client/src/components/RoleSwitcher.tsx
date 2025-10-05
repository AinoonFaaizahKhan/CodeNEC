import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FlaskConical, BarChart3, Rocket } from "lucide-react";

export type UserRole = "scientist" | "manager" | "architect";

interface RoleSwitcherProps {
  value?: UserRole;
  onChange?: (role: UserRole) => void;
}

export function RoleSwitcher({ value, onChange }: RoleSwitcherProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole>(value || "scientist");

  const handleRoleChange = (role: UserRole) => {
    setSelectedRole(role);
    onChange?.(role);
    console.log(`Role switched to: ${role}`);
  };

  const roles = [
    { value: "scientist" as const, label: "Scientist", icon: FlaskConical },
    { value: "manager" as const, label: "Manager", icon: BarChart3 },
    { value: "architect" as const, label: "Mission Architect", icon: Rocket },
  ];

  return (
    <div className="inline-flex items-center gap-1 p-1 bg-muted rounded-lg" data-testid="role-switcher">
      {roles.map(({ value, label, icon: Icon }) => (
        <Button
          key={value}
          variant={selectedRole === value ? "default" : "ghost"}
          size="sm"
          onClick={() => handleRoleChange(value)}
          className="gap-2"
          data-testid={`button-role-${value}`}
        >
          <Icon className="h-4 w-4" />
          <span className="hidden sm:inline">{label}</span>
        </Button>
      ))}
    </div>
  );
}
