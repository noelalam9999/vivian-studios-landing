import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarTop from "./components/NavbarTop";
import Footer from "./components/Footer";
import { useRef } from "react";
import CollapsibleMenu from "./components/CollapsibleMenu";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vivian Studios",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <style>{`
          

            
       ::-webkit-scrollbar-track {
  background: orange;
}
          }
          `}</style>
      </Head>
      <body className={`${inter.className} overflow-x-hidden relative `}>
        <NavbarTop />
        <CollapsibleMenu />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
