import {
    Activity,
    ArrowUpRight,
    CreditCard,
    DollarSign,
    Users
} from "lucide-react"
import Link from "next/link"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Header from "@/components/dashboard/header"
import Stats from "@/components/dashboard/stats"


export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
        <Header />
      
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">

        <Stats />
        
        
      </main>
    </div>
  )
}