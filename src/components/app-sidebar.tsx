import { Calendar, Home, Inbox, Search, ChevronDown, ChevronRight, User, FolderOpen, Code, Mail, Phone, Palette, type LucideIcon } from "lucide-react";
import { ModeToggle } from "./shadcn/mode-toggle";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Types
interface SubMenuItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

interface MenuItem {
  title: string;
  url: string;
  icon: LucideIcon;
  subItems?: SubMenuItem[];
}

// Menu items with sub-menus
const items: MenuItem[] = [
  {
    title: "Home",
    url: "/",
    icon: Home
  },
  {
    title: "About",
    url: "/about",
    icon: Inbox,
    subItems: [
      { title: "Biography", url: "/about/#biography", icon: User },
      { title: "Skills", url: "/about/#skills", icon: Code },
      { title: "Experience", url: "/about/#experience", icon: FolderOpen },
    ]
  },
  {
    title: "Projects",
    url: "/projects",
    icon: Calendar,
    subItems: [
      { title: "Web Development", url: "/projects/#web", icon: Code },
      { title: "Mobile Apps", url: "/projects/#mobile", icon: Calendar },
      { title: "Design", url: "/projects/#design", icon: Palette },
    ]
  },
  {
    title: "Contact",
    url: "/contact",
    icon: Search
  }
] as const;

function AppSidebar() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleExpanded = (itemTitle: string): void => {
    setExpandedItems(prev => ({
      ...prev,
      [itemTitle]: !prev[itemTitle]
    }));
  };

  return (
    <Sidebar className="min-h-screen border-r dark:border-gray-700">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-semibold mb-2">Portfolio</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item: MenuItem) => (
                <div key={item.title}>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <div className="flex items-center justify-between w-full">
                        <NavLink
                          to={item.url}
                          className={({ isActive, isPending }: { isActive: boolean; isPending: boolean }) =>
                            `flex items-center gap-2 flex-1 ${
                              isPending
                                ? 'opacity-50'
                                : isActive
                                ? 'text-sky-500 font-semibold'
                                : 'text-gray-700 dark:text-gray-300'
                            }`
                          }>
                          <item.icon className="w-5 h-5" />
                          <span>{item.title}</span>
                        </NavLink>
                        {item.subItems && (
                          <button
                            onClick={() => toggleExpanded(item.title)}
                            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                            type="button">
                            {expandedItems[item.title] ? (
                              <ChevronDown className="w-4 h-4" />
                            ) : (
                              <ChevronRight className="w-4 h-4" />
                            )}
                          </button>
                        )}
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  
                  {/* Sub-menu items */}
                  {expandedItems[item.title] && item.subItems && (
                    <div className="ml-4 border-l border-gray-200 dark:border-gray-700">
                      {item.subItems.map((subItem: SubMenuItem) => (
                        <SidebarMenuItem key={subItem.title}>
                          <SidebarMenuButton asChild>
                            <NavLink
                              to={subItem.url}
                              className={({ isActive, isPending }: { isActive: boolean; isPending: boolean }) =>
                                `flex items-center gap-2 pl-4 py-2 ${
                                  isPending
                                    ? 'opacity-50'
                                    : isActive
                                    ? 'text-sky-500 font-semibold'
                                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                                }`
                              }
                            >
                              <subItem.icon className="w-4 h-4" />
                              <span className="text-sm">{subItem.title}</span>
                            </NavLink>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mode Toggle */}
              <SidebarMenuItem>
                <ModeToggle />
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;