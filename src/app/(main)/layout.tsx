'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
  SidebarFooter,
} from '@/components/ui/sidebar';
import {
  BookOpen,
  LayoutDashboard,
  Sparkles,
  Bookmark,
  UserCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const menuItems = [
    {
      href: '/',
      label: 'Dashboard',
      icon: LayoutDashboard,
    },
    {
      href: '/ai-injector',
      label: 'AI Content Injector',
      icon: Sparkles,
    },
    {
      href: '/saved',
      label: 'Saved Items',
      icon: Bookmark,
    },
  ];

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/20 text-primary">
              <BookOpen className="w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <h2 className="font-headline text-2xl font-bold text-sidebar-foreground">
                Web Dev Pro
              </h2>
              <p className="text-xs text-sidebar-foreground/70">
                Master Course
              </p>
            </div>
          </div>
        </SidebarHeader>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href}>
                <SidebarMenuButton
                  isActive={pathname === item.href}
                  tooltip={item.label}
                >
                  <item.icon />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <SidebarFooter className="p-4 mt-auto">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-sidebar-accent/50">
             <Avatar>
                <AvatarImage src="https://placehold.co/40x40" />
                <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-semibold text-sidebar-foreground">User</span>
              <span className="text-xs text-sidebar-foreground/70">
                user@email.com
              </span>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex items-center justify-between p-4 border-b">
          <SidebarTrigger />
          <Button>Upgrade Plan</Button>
        </header>
        <main className="p-4 lg:p-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
