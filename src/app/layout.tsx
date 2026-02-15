import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import {Navigation} from "@/components/layout/Navigation";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "RobotDorm Newsroom | Recent news and updates about RobotDorm",
  description: "Stay up-to-date with the latest news and updates about RobotDorm, the AI-powered content creation platform. Explore our newsroom for insights, announcements, and industry trends related to AI and content creation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased bg-primary-foreground`}>
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
