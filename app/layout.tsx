import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionContext from "@/context/SessionContext";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionContext>
      <html lang="en">
        <body className={inter.className}>
          <NextTopLoader />
          <Navbar />
          <div className="min-h-[89vh] overflow-auto bg-gray-100">
            <div className="mx-auto h-full w-full max-w-screen-xl px-5 py-10 xl:px-0">
              {children}
            </div>
          </div>
          <Toaster />
        </body>
      </html>
    </SessionContext>
  );
}
