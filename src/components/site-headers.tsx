import Link from "next/link";
import Image from "next/image";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { SideNav } from "./side-nav";

export async function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex content-between h-14 items-center justify-between">
        <Link href="/" className="mr-6  items-center space-x-2 hidden md:flex">
          <Image
            className="h-9 w-auto"
            src="/logo.png"
            alt="Logo"
            width={300}
            height={300}
          />
          <span className="hidden font-bold sm:inline-block">Leo Club</span>
        </Link>

        <MainNav />
        <MobileNav />

        <SideNav />
      </div>
    </header>
  );
}
