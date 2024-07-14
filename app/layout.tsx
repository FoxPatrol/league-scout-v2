import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientWrapperComponents from "./ClientWrapperComponents";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "League Scout",
  description: "Conquer the Rift, Together!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen flex-col items-center justify-between`}
      >
        <ClientWrapperComponents>{children}</ClientWrapperComponents>
      </body>
    </html>
  );
}
