import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ContainerWrapper from "@/components/ContainerWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rizaldy Iman Putra",
  description: "Welcome to my personal portfolio website! Deep dive into my journey as Software Engineer and get to know me deeper. Let's get along and let's develop together!",
  keywords: ["Software Engineer", "Full-stack Developer", "Aerospace Engineer", "Front-end Developer", "Back-end Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContainerWrapper>
          {children}
        </ContainerWrapper>
      </body>
    </html>
  );
}
