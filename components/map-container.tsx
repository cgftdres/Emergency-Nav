"use client"

import { useEffect, useRef, useState } from "react"
import { Compass, Locate, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { EmergencyStatus } from "@/types/emergency"
import { RouteInfo } from "@/components/route-info"
import { AlertCircle } from "lucide-react" // Import AlertCircle

interface MapContainerProps {
  selectedEmergency: EmergencyStatus | null
}

export function MapContainer({ selectedEmergency }: MapContainerProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [zoom, setZoom] = useState(15)
  const [isNavigating, setIsNavigating] = useState(false)

  useEffect(() => {
    if (selectedEmergency) {
      // In a real app, this would center the map on the emergency location
      console.log(`Centering map on: ${selectedEmergency.location}`)
    }
  }, [selectedEmergency])

  const handleStartNavigation = () => {
    setIsNavigating(true)
  }

  const handleStopNavigation = () => {
    setIsNavigating(false)
  }

  return (
    <div className="relative flex-1 bg-slate-100">
      {/* Map placeholder - in a real app, this would be replaced with a map component */}
      <div
        ref={mapRef}
        className="h-full w-full bg-slate-200"
        style={{
          backgroundImage: "url('/placeholder.svg?height=800&width=1200')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Map overlay elements would go here */}
        {selectedEmergency && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
              <AlertCircle className="h-5 w-5" />
            </div>
          </div>
        )}
      </div>

      {/* Map controls */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        <Button variant="secondary" size="icon" onClick={() => setZoom(Math.min(zoom + 1, 20))}>
          <ZoomIn className="h-4 w-4" />
          <span className="sr-only">Zoom in</span>
        </Button>
        <Button variant="secondary" size="icon" onClick={() => setZoom(Math.max(zoom - 1, 5))}>
          <ZoomOut className="h-4 w-4" />
          <span className="sr-only">Zoom out</span>
        </Button>
        <Button variant="secondary" size="icon">
          <Locate className="h-4 w-4" />
          <span className="sr-only">Current location</span>
        </Button>
        <Button variant="secondary" size="icon">
          <Compass className="h-4 w-4" />
          <span className="sr-only">Reset orientation</span>
        </Button>
      </div>

      {/* Navigation controls */}
      {selectedEmergency && (
        <div className="absolute bottom-4 left-4">
          {isNavigating ? (
            <Button variant="destructive" onClick={handleStopNavigation}>
              Stop Navigation
            </Button>
          ) : (
            <Button onClick={handleStartNavigation}>
              {/* <Navigation className="mr-2 h-4 w-4" /> */} {/* Removed Navigation as it's not imported */}
              Start Navigation
            </Button>
          )}
        </div>
      )}

      {/* Route information */}
      {selectedEmergency && isNavigating && <RouteInfo emergency={selectedEmergency} />}
    </div>
  )
}

