import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

"use client"
 

import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"

import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 
 
function Navbar() {
  
  return (
    <>
    <div className="flex items-center justify-between p-2">
      <Link className="ml-6 mt-3 text-2xl">Meet App</Link>
      <div className="flex gap-3 items-center mr-3">
         <Link className="text-base">Previous meetings</Link>
         <Link className="text-base">New Meetings</Link>
      </div>
    </div>
    </>
  )
}

export default Navbar
