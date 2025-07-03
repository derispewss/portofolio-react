import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="p-4">
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
