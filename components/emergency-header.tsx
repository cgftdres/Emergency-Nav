"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { EmergencyStatus } from "@/types/emergency"

interface EmergencyHeaderProps {
  selectedEmergency: EmergencyStatus | null
  toggleSidebar: () => void
}

export function EmergencyHeader({ selectedEmergency, toggleSidebar }: EmergencyHeaderProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-4">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
        <h1 className="text-xl font-bold">Emergency Response Navigator</h1>
      </div>

      <div className="flex items-center gap-4">
        {selectedEmergency && (
          <div className="flex items-center gap-2">
            <div className={`h-3 w-3 rounded-full ${getStatusColor(selectedEmergency.priority)}`} />
            <span className="font-medium">{selectedEmergency.title}</span>
            <span className="text-sm text-muted-foreground">ETA: {selectedEmergency.eta}</span>
          </div>
        )}
        <Button variant="destructive" size="sm">
          Emergency Override
        </Button>
      </div>
    </header>
  )
}

function getStatusColor(priority: string) {
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

