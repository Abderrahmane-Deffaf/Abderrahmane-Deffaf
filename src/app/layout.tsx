import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeContext from "@/contexts/theme-context";
import NavBar from "@/components/common/nav-bar/nav-bar";
import Footer from "@/components/common/footer/footer";
import MouseTrackerBg from "@/components/common/mouse-tracker/mouse-tracker-bg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deffaf Abderrahmane",
  description: "Deffaf Abderrahmane's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative w-full overflow-x-hidden  h-full`}
      >
        <ThemeContext>
          <MouseTrackerBg />
          <NavBar />
          <main className=" relative z-10">{children}</main>
          <Footer />
        </ThemeContext>
      </body>
    </html>
  );
}
