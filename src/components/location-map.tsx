import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface LocationPoint {
  name: string;
  distance: string;
  type: "university" | "attraction" | "transport" | "shopping";
}

export default function LocationMap() {
  const locations: LocationPoint[] = [
    { name: "Universitas Brawijaya", distance: "0.5 km", type: "university" },
    { name: "Malang Town Square", distance: "1.2 km", type: "shopping" },
    { name: "Alun-Alun Malang", distance: "2.5 km", type: "attraction" },
    { name: "Stasiun Malang", distance: "3.0 km", type: "transport" },
    { name: "Jatim Park", distance: "8.5 km", type: "attraction" },
    {
      name: "Universitas Negeri Malang",
      distance: "1.5 km",
      type: "university",
    },
    { name: "Masjid Jami' Malang", distance: "2.0 km", type: "attraction" },
    { name: "Pasar Besar Malang", distance: "2.8 km", type: "shopping" },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "university":
        return "bg-blue-100 text-blue-800";
      case "attraction":
        return "bg-purple-100 text-purple-800";
      case "transport":
        return "bg-orange-100 text-orange-800";
      case "shopping":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="w-full border bg-card text-card-foreground shadow-sm">
      <CardHeader className="p-4 pb-0">
        <CardTitle className="text-xl flex items-center">
          <MapPin className="h-5 w-5 mr-2 text-blue-600" />
          Lokasi Strategis
        </CardTitle>
        <CardDescription>
          AORI Guest House berlokasi strategis dekat dengan destinasi populer
          berikut
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <div className="relative w-full h-64 mb-4 bg-gray-200 rounded-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3951.4194511118926!2d112.6082057!3d-7.9555318!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78835c36a0282d%3A0x73804ebf5b781529!2sAORI%20Guest%20House%20(Syariah)!5e0!3m2!1sid!2sid!4v1747481143278!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AORI Guest House Location"
            className="absolute inset-0"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {locations.map((location, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 rounded-md border"
            >
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm font-medium">{location.name}</span>
              </div>
              <div className="flex items-center">
                <span className="text-xs mr-2">{location.distance}</span>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${getTypeColor(location.type)}`}
                >
                  {location.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
