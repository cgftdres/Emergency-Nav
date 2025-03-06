export interface EmergencyContact {
  name: string
  phone: string
  role: string
}

export interface EmergencyStatus {
  id: string
  title: string
  location: string
  coordinates: {
    lat: number
    lng: number
  }
  priority: "critical" | "high" | "medium" | "low"
  eta: string
  distance: string
  description: string
  contacts: EmergencyContact[]
}

