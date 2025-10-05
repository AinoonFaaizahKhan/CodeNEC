import { useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import Dashboard from "@/pages/Dashboard";
import Publications from "@/pages/Publications";
import KnowledgeGraphPage from "@/pages/KnowledgeGraphPage";
import NotFound from "@/pages/not-found";
import { UserRole } from "@/components/RoleSwitcher";

function App() {
  const [currentRole, setCurrentRole] = useState<UserRole>("scientist");

  const sidebarStyle = {
    "--sidebar-width": "16rem",
  } as React.CSSProperties;

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <SidebarProvider style={sidebarStyle}>
            <div className="flex h-screen w-full">
              <AppSidebar />
              <div className="flex flex-col flex-1 overflow-hidden">
                <Header
                  onRoleChange={setCurrentRole}
                  onSearch={(query) => console.log("Search:", query)}
                  onFilterClick={() => console.log("Open filters")}
                />
                <main className="flex-1 overflow-auto">
                  <Switch>
                    <Route path="/">
                      <Dashboard role={currentRole} />
                    </Route>
                    <Route path="/publications">
                      <Publications />
                    </Route>
                    <Route path="/knowledge-graph">
                      <KnowledgeGraphPage />
                    </Route>
                    <Route path="/analytics">
                      <Dashboard role={currentRole} />
                    </Route>
                    <Route path="/saved">
                      <div className="p-6 lg:p-8">
                        <h1 className="text-4xl font-bold tracking-tight">Saved Publications</h1>
                        <p className="text-muted-foreground mt-2">Your bookmarked research papers</p>
                      </div>
                    </Route>
                    <Route path="/settings">
                      <div className="p-6 lg:p-8">
                        <h1 className="text-4xl font-bold tracking-tight">Settings</h1>
                        <p className="text-muted-foreground mt-2">Configure your preferences</p>
                      </div>
                    </Route>
                    <Route component={NotFound} />
                  </Switch>
                </main>
              </div>
            </div>
          </SidebarProvider>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
