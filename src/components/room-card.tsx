"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Check } from "lucide-react";
import RoomDetailModal from "./room-detail-modal";

interface RoomCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  imageUrl: string;
  onBookNow?: () => void;
}

export default function RoomCard({
  title = "Kamar Standard",
  price = "Rp 250.000",
  description = "Kamar nyaman dengan semua fasilitas dasar",
  features = ["WiFi Gratis", "AC", "Kamar Mandi Dalam"],
  imageUrl = "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
  onBookNow,
}: RoomCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const roomImages = [
    { src: imageUrl, alt: `${title} - Tampak Utama` },
  
    {
      src: "https://res.cloudinary.com/dzhrjgqj0/image/upload/v1746159779/IMG-20250424-WA0019_koca6s.jpg",
      alt: `${title} - Kamar Mandi`,
    },
    {
      src: "https://res.cloudinary.com/dzhrjgqj0/image/upload/v1746159793/IMG-20250424-WA0028_iaca51.jpg",
      alt: `${title} - Garden`,
    },
    {
      src: "https://res.cloudinary.com/dzhrjgqj0/image/upload/v1746159779/IMG-20250424-WA0018_zs6suw.jpg",
      alt: `${title} - Ruang Bersama`,
    },
    {
      src: "https://res.cloudinary.com/dzhrjgqj0/image/upload/v1746159778/IMG-20250424-WA0016_nmlzbc.jpg",
      alt: `${title} - Lobby`,
    },
  ];
  const handleBookNow = () => {
    // Default WhatsApp message
    const message = `Assalamualaikum, saya ingin memesan ${title} di AORI Guest House Malang.`;
    const whatsappUrl = `https://wa.me/+6282257673337?text=${encodeURIComponent(message)}`;

    if (onBookNow) {
      onBookNow();
    } else {
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <Card className="w-full overflow-hidden border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
      <div
        className="relative h-48 w-full cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
          <span className="bg-white/90 text-black text-xs px-2 py-1 rounded-full">
            Lihat Foto Detail
          </span>
        </div>
      </div>

      {/* Room Detail Modal */}
      <RoomDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        price={price}
        description={description}
        features={features}
        images={roomImages}
      />
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{title}</CardTitle>
          <div className="text-lg font-bold text-blue-600">
            {price}
            <span className="text-sm font-normal text-gray-500">/malam</span>
          </div>
        </div>
        <CardDescription className="text-sm text-gray-500">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <Check className="h-4 w-4 mr-2 text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleBookNow}
          className="w-full bg-green-600 hover:bg-green-700 text-white"
        >
          Pesan via WhatsApp
        </Button>
      </CardFooter>
    </Card>
  );
}
