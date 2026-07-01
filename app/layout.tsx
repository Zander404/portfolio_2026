import type { Metadata } from "next";
import { Handlee, Jersey_25 } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
//
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
//
const jersey_25 = Jersey_25({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-head",
  display: "swap",
});

const handlee = Handlee({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Xandyy",
  description: "Dev Jr | Python + Java",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jersey_25.variable} ${handlee.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        {children}
        <Footer />
      </body>

    </html>
  );
}
