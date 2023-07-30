import type { Metadata } from "next";
import "../globals.css"

export const metadata: Metadata = {
  title: "My Next Portfolio site!",
  description: "Generated by Next and Sanity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}