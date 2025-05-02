import { Card, CardContent } from "@/components/ui/card";
import {
  Wifi,
  Coffee,
  Utensils,
  Shield,
  ParkingCircle,
  Fan,
  Bath,
  BookOpen,
} from "lucide-react";

interface Facility {
  name: string;
  description: string;
  icon: React.ReactNode;
}

export default function Facilities() {
  const facilities: Facility[] = [
    {
      name: "WiFi Gratis",
      description: "Internet kecepatan tinggi di seluruh properti",
      icon: <Wifi className="h-6 w-6" />,
    },
    {
      name: "Musholla",
      description: "Ruang sholat khusus dengan sajadah",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      name: "Sesuai Syariah",
      description: "Semua fasilitas mengikuti prinsip Islam",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      name: "Parkir",
      description: "Area parkir untuk tamu",
      icon: <ParkingCircle className="h-6 w-6" />,
    },
    {
      name: "AC",
      description: "kamar dilengkapi dengan AC",
      icon: <Fan className="h-6 w-6" />,
    },
    {
      name: "Kamar Mandi Dalam",
      description: "Kamar mandi dalam di semua kamar",
      icon: <Bath className="h-6 w-6" />,
    },
  ];

  return (
    <div className="w-full py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {facilities.map((facility, index) => (
          <Card
            key={index}
            className="border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow"
          >
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className="text-blue-600 mb-3">{facility.icon}</div>
              <h3 className="font-medium mb-1">{facility.name}</h3>
              <p className="text-xs text-gray-500">{facility.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
