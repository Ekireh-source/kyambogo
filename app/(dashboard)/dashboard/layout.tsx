import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

export const metadata: Metadata = {
  title: "Kyambogo college",
  description: "Center of Learning",
};


export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 
  return (

    <TooltipProvider>
          {children}
    </TooltipProvider>
          
  );
}