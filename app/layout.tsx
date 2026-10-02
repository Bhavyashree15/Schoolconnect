import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SchoolConnect",
  description:
    "Your child's school journey, performance and memories in one secure place."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
