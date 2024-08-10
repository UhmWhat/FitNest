import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import Link from "next/link";
import {Dumbbell} from "lucide-react";

export const metadata: Metadata = {
  title: "FitNest",
  description: "FitNest is an app that helps you track your fitness progress and achieve your fitness goals.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${GeistSans.variable}`}>
      <body>
      <TRPCReactProvider>
          <header className="px-4 lg:px-6 h-14 flex items-center container">
              <Link href="#" className="flex items-center justify-center" prefetch={false}>
                  <Dumbbell className="h-6 w-6"/>
                  {/*<span className="sr-only">FitNest</span>*/}
                  <span className={"text-xl ml-2 font-medium"}>FitNest</span>
              </Link>
              <nav className="ml-auto flex gap-4 sm:gap-6">
                  <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                      Features
                  </Link>
                  {/*<Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>*/}
                  {/*  Pricing*/}
                  {/*</Link>*/}
                  <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                      About Us
                  </Link>
                  <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                      Talk Us
                  </Link>
              </nav>
          </header>
          {children}
          <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
              <p className="text-xs text-muted-foreground">&copy; 2024 Fitness Tracker. All rights reserved.</p>
              <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                  <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                      Terms of Service
                  </Link>
                  <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                      Privacy
                  </Link>
              </nav>
          </footer>
      </TRPCReactProvider>
      </body>
    </html>
  );
}
