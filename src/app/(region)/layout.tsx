import Link from "next/link";
import { Menu, Package, MicVocal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SideNav } from "@/components/side-nav";
import { ReactNode } from "react";
import Image from "next/image";

export default function AdminLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex h-14 items-center gap-4 md:gap-8 border-b bg-muted/40 backdrop-blur px-4 lg:h-[60px] lg:px-6 sticky top-0 z-10">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium">
              <Link
                href="/district-dashboard"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={300}
                  height={300}
                  className="h-6 w-6"
                />
                <span className="sr-only">Dashboard</span>
              </Link>
              <Link
                href="/district-dashboard"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
              >
                <MicVocal className="h-5 w-5" />
                Participants
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </Link>
              <Link
                href="/"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Package className="h-5 w-5" />
                Go to Live Website
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex-1 md:flex-initial">
          <Link
            href="/district-dashboard"
            className="flex items-center gap-2 font-semibold"
          >
            <Image
              src="/logo.png"
              alt="logo"
              width={300}
              height={300}
              className="h-6 w-6"
            />
            <span>Dashboard</span>
          </Link>
        </div>

        <AdminNavbar />

        <SideNav />
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        {children}
      </main>
    </div>
  );
}

function AdminNavbar() {
  return (
    <nav className="flex-1 hidden md:flex items-center gap-4 text-sm lg:gap-6">
      <Link href="/district-dashboard">Regions</Link>
    </nav>
  );
}
