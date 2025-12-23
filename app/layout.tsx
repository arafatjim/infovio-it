import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "./footer";

import { ClerkProvider } from '@clerk/nextjs';




export const metadata: Metadata = {
  title: "PixelBuy ",
  description: "Your Ultimate Online Tech Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className="font-orbitron font-medium antialiased px-2"
        
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  );
}
