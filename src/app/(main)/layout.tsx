import { SiteHeader } from "@/components/site-headers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader />
      {children}
      <footer className="bg-primary text-white py-8 px-4">
        <div className="mx-auto container flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">Leo Clubs</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              className="text-gray-400 hover:text-white transition-colors"
              href="/about"
            >
              About
            </a>
            <a
              className="text-gray-400 hover:text-white transition-colors"
              href="/login"
            >
              Login
            </a>
            <a
              className="text-gray-400 hover:text-white transition-colors"
              href="/contact"
            >
              Contact
            </a>
          </div>
          <div className="text-gray-400 text-sm">
            © 2024 Leo Clubs. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
