"use client"

import { useState } from "react"
import { MapContainer } from "@/components/map-container"
import { Sidebar } from "@/components/sidebar"
import { EmergencyHeader } from "@/components/emergency-header"
import type { EmergencyStatus } from "@/types/emergency"

export default function EmergencyNavigation() {
  const [selectedEmergency, setSelectedEmergency] = useState<EmergencyStatus | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen w-full flex-col">
      <EmergencyHeader selectedEmergency={selectedEmergency} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} onSelectEmergency={setSelectedEmergency} selectedEmergency={selectedEmergency} />
        <MapContainer selectedEmergency={selectedEmergency} />
      </div>
    </div>
  )
}

