import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inquira",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-yellow-300">{children}</body>
    </html>
  );
}
