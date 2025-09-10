import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_components/Navbar";
import { Inter, Poppins } from "next/font/google";
import Footer from "@/app/_components/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"], // normal to bold
    variable: "--font-poppins",
});


export const metadata: Metadata = {
  title: "The Consulting Mind",
  description: "The Consulting Mind by Abhishek Sharma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={`${inter.variable} ${poppins.variable} antialiased`}
      >
      <Navbar />
        {children}
      <Footer/>
      </body>
    </html>
  );
}
