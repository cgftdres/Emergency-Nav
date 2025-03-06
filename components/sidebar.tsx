"use client"

import { useState } from "react"
import { Search, Clock, Phone, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { EmergencyStatus } from "@/types/emergency"
import { emergencies } from "@/data/emergency-data"

interface SidebarProps {
  isOpen: boolean
  onSelectEmergency: (emergency: EmergencyStatus) => void
  selectedEmergency: EmergencyStatus | null
}

export function Sidebar({ isOpen, onSelectEmergency, selectedEmergency }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredEmergencies = emergencies.filter(
    (emergency) =>
      emergency.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emergency.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  if (!isOpen) return null

  return (
    <div className="flex h-full w-80 flex-col border-r bg-background">
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search locations..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="active" className="flex-1">
        <div className="border-b px-4">
          <TabsList className="w-full justify-start rounded-none border-b-0 p-0">
            <TabsTrigger
              value="active"
              className="relative rounded-none border-b-2 border-b-transparent px-4 pb-3 pt-2 font-medium text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground"
            >
              Active
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              className="relative rounded-none border-b-2 border-b-transparent px-4 pb-3 pt-2 font-medium text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground"
            >
              Completed
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="active" className="flex-1 overflow-auto p-0">
          <div className="divide-y">
            {filteredEmergencies.map((emergency) => (
              <button
                key={emergency.id}
                className={`flex w-full items-start gap-3 p-4 text-left hover:bg-muted/50 ${
                  selectedEmergency?.id === emergency.id ? "bg-muted" : ""
                }`}
                onClick={() => onSelectEmergency(emergency)}
              >
                <div className={`mt-0.5 h-2 w-2 rounded-full ${getPriorityColor(emergency.priority)}`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{emergency.title}</h3>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">{emergency.location}</p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>ETA: {emergency.eta}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="flex-1 overflow-auto p-0">
          <div className="flex h-full items-center justify-center text-muted-foreground">No completed emergencies</div>
        </TabsContent>
      </Tabs>

      {selectedEmergency && (
        <div className="border-t p-4">
          <h3 className="font-medium">Emergency Contacts</h3>
          <div className="mt-2 space-y-2">
            {selectedEmergency.contacts.map((contact, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm">{contact.name}</span>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Phone className="h-4 w-4" />
                  <span className="sr-only">Call {contact.name}</span>
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function getPriorityColor(priority: string) {
  switch (priority) {
    case "critical":
      return "bg-red-500"
    case "high":
      return "bg-orange-500"
    case "medium":
      return "bg-yellow-500"
    default:
      return "bg-green-500"
  }
}

