import "./globals.css";

import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

import Navbar from "@/components/navbar/Navbar";
import RegisterModal from "@/components/modals/RegisterModal";

const noto = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
});

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
    <html lang="ja">
      <body className={noto.className}>
        <main className="flex flex-col min-h-screen w-full">
          <RegisterModal />
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
