import type { Metadata } from "next";
import { Inter } from "next/font/google"; // 👈 Added Google Font
import "../globals.css"; // 👈 CRITICAL: This loads your Tailwind styles

// Configure the font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Built with Next.js",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  
  const resolvedParams = await params;

  return (
    <html lang={resolvedParams.lang}>
      {/* Applied the font class to the body */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}