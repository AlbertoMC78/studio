'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
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
  LogOut,
  Search,
  User,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AuthProvider, useAuth } from '@/context/auth-context';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';

function InnerLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useAuth();

  React.useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  const menuItems = [
    {
      href: '/',
      label: 'Dashboard',
      icon: LayoutDashboard,
    },
    {
      href: '/profile',
      label: 'Perfil',
      icon: User,
    },
    {
      href: '/search',
      label: 'Buscador',
      icon: Search,
    },
    {
      href: '/saved',
      label: 'Saved Items',
      icon: Bookmark,
    },
    {
      href: '/ai-injector',
      label: 'AI Content Injector',
      icon: Sparkles,
    },
  ];

  if (!user) {
    // AuthProvider now handles the loading state, so we can return null here
    // while the redirect is in progress.
    return null;
  }

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
              <AvatarImage src="https://placehold.co/40x40" data-ai-hint="user avatar" />
              <AvatarFallback>{user.email?.[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col overflow-hidden">
              <span className="font-semibold text-sidebar-foreground truncate">
                {user.email}
              </span>
              <button onClick={handleLogout} className="text-xs text-sidebar-foreground/70 hover:underline text-left flex items-center gap-1">
                <LogOut className="w-3 h-3"/>
                Logout
              </button>
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

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <InnerLayout>{children}</InnerLayout>
    </AuthProvider>
  );
}
