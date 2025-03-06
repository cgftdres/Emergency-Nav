import { Clock, MapPin, AlertTriangle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { EmergencyStatus } from "@/types/emergency"

interface RouteInfoProps {
  emergency: EmergencyStatus
}

export function RouteInfo({ emergency }: RouteInfoProps) {
  return (
    <div className="absolute left-1/2 top-4 -translate-x-1/2">
      <Card className="w-80">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">ETA: {emergency.eta}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{emergency.distance}</span>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2 rounded-md bg-amber-50 p-2 text-amber-700">
            <AlertTriangle className="h-4 w-4" />
            <span className="text-xs">Traffic incident reported ahead</span>
          </div>

          <div className="mt-3">
            <div className="flex items-center justify-between text-sm">
              <span>Current Location</span>
              <span className="text-muted-foreground">0.5 mi</span>
            </div>
            <div className="my-2 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <div className="h-px flex-1 bg-muted"></div>
              <div className="h-2 w-2 rounded-full bg-red-500"></div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>{emergency.location}</span>
              <span className="text-muted-foreground">{emergency.distance}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

