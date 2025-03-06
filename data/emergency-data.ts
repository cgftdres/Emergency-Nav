import type { EmergencyStatus } from "@/types/emergency"

export const emergencies: EmergencyStatus[] = [
  {
    id: "e1",
    title: "Building Fire",
    location: "123 Main St, Downtown",
    coordinates: {
      lat: 40.7128,
      lng: -74.006,
    },
    priority: "critical",
    eta: "4 min",
    distance: "1.2 miles",
    description: "Commercial building fire, multiple floors affected",
    contacts: [
      {
        name: "Fire Chief Johnson",
        phone: "555-1234",
        role: "Incident Commander",
      },
      {
        name: "Police Dispatch",
        phone: "555-9876",
        role: "Traffic Control",
      },
    ],
  },
  {
    id: "e2",
    title: "Traffic Accident",
    location: "Highway 101, Mile Marker 42",
    coordinates: {
      lat: 40.7328,
      lng: -74.026,
    },
    priority: "high",
    eta: "7 min",
    distance: "3.5 miles",
    description: "Multi-vehicle collision, possible injuries",
    contacts: [
      {
        name: "Officer Rodriguez",
        phone: "555-4321",
        role: "First Responder",
      },
      {
        name: "Medical Team Alpha",
        phone: "555-7890",
        role: "Medical Support",
      },
    ],
  },
  {
    id: "e3",
    title: "Medical Emergency",
    location: "45 Park Avenue, Apartment 3B",
    coordinates: {
      lat: 40.7228,
      lng: -73.996,
    },
    priority: "high",
    eta: "3 min",
    distance: "0.8 miles",
    description: "Elderly patient, possible cardiac event",
    contacts: [
      {
        name: "Dr. Williams",
        phone: "555-5678",
        role: "Medical Advisor",
      },
      {
        name: "Building Manager",
        phone: "555-2468",
        role: "Access Control",
      },
    ],
  },
  {
    id: "e4",
    title: "Gas Leak",
    location: "78 Elm Street",
    coordinates: {
      lat: 40.7028,
      lng: -74.016,
    },
    priority: "medium",
    eta: "9 min",
    distance: "2.7 miles",
    description: "Reported gas odor, residential area",
    contacts: [
      {
        name: "Utility Response Team",
        phone: "555-3698",
        role: "Technical Support",
      },
      {
        name: "Evacuation Coordinator",
        phone: "555-1357",
        role: "Public Safety",
      },
    ],
  },
  {
    id: "e5",
    title: "Flooding",
    location: "River District, West Side",
    coordinates: {
      lat: 40.7328,
      lng: -74.036,
    },
    priority: "medium",
    eta: "12 min",
    distance: "4.3 miles",
    description: "Street flooding after heavy rain, multiple locations affected",
    contacts: [
      {
        name: "Water Management",
        phone: "555-9753",
        role: "Assessment",
      },
      {
        name: "Rescue Team Bravo",
        phone: "555-8642",
        role: "Evacuation Support",
      },
    ],
  },
]

