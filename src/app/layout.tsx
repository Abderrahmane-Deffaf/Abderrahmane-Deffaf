import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./index.css";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deffaf Abderrahmane",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/dab24688da.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={`${inter.className} antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
