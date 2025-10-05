import { Header } from "../Header";
import { ThemeProvider } from "../ThemeProvider";

export default function HeaderExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Header />
        <div className="p-8">
          <p className="text-muted-foreground">Header example with search and role switcher</p>
        </div>
      </div>
    </ThemeProvider>
  );
}
