import type { Metadata } from "next";
import "../styles/globals.css";
import Layout from "@/components/layout";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Crypto Dashboard",
  description: "Generated by next, typescript and tailwind css",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
