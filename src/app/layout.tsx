import type { Metadata } from "next";
import Header from "@/layouts/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andy English Course Learner",
  description: "An English learning tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`w-full min-h-screen py-5 bg-[#0d262c]`}>
        <Header />
        <main className="w-full px-10">{children}</main>
      </body>
    </html>
  );
}
