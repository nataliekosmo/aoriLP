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
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/477685268.jpg?k=60b3eedb0be0eb1fc70b66e7aed3dc4c7be94cd39d5e05e2e81a886d72ab3475&o=&hp=1",
      alt: `${title} - Tampak Lain`,
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/481628652.jpg?k=98a87911d652dcdb3a93a4fb0c053a359c3521ee82902658d403549a993dafc7&o=&hp=1",
      alt: `${title} - Kamar Mandi`,
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/481628078.jpg?k=27c3096c8b98a6c9eebbdff22126a9cac932ba6981cc83f9c4bd546b09b2c2b8&o=&hp=1",
      alt: `${title} - Garden`,
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/481628081.jpg?k=5538bc730fe378ab1b5350cda84a91fbff50617f790f42f6c1432ed85244576b&o=&hp=1",
      alt: `${title} - Ruang Bersama`,
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/481628075.jpg?k=3153304848460613dce0b052a90c92cd7a98d97e83a552557902e1f2d0427f17&o=&hp=1",
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
