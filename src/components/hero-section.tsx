"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Star } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const handleBookNow = () => {
    const message = "Halo,Saya mau reservasi AORI, bbisa dibantu?";
    window.open(
      `https://wa.me/+6282257673337?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="relative container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center mb-2">
            <div className="flex items-center bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium">
              <Star className="h-3 w-3 mr-1 fill-yellow-500 text-yellow-500" />
              <span>4.8/5 Rating</span>
            </div>
            <div className="mx-2 text-gray-300">|</div>
            <div className="flex items-center text-xs text-gray-600">
              <MapPin className="h-3 w-3 mr-1" />
              <span>Dekat Universitas Brawijaya</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            AORI Guest House Malang
          </h1>

          <p className="text-xl text-gray-600 mb-6 max-w-2xl">
            Penginapan Syariah terbaik dengan lokasi strategis dekat Universitas
            Brawijaya Malang
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              onClick={handleBookNow}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8"
            >
              Pesan via WhatsApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700"
              onClick={() =>
                document
                  .getElementById("rooms")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Lihat Kamar
            </Button>
          </div>

          {/* Image gallery */}
          <div className="w-full grid grid-cols-3 gap-2 md:gap-4">
            <div className="col-span-2 relative rounded-lg overflow-hidden h-64 md:h-80">
              <Image
                alt="Tampak Depan AORI Guest House Malang"
                fill
                className="object-cover"
                priority
                sizes="(max-width:968px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src="https://res.cloudinary.com/dzhrjgqj0/image/upload/v1746159778/IMG-20250424-WA0013_j4d82t.jpg"
              />
            </div>
            <div className="col-span-1 grid grid-rows-2 gap-2 md:gap-4">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dzhrjgqj0/image/upload/v1746159792/IMG-20250424-WA0027_uycktd.jpg"
                  alt="Kamar AORI Guest House Malang"
                  fill
                  className="object-cover"
                  sizes="(max-width:968px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dzhrjgqj0/image/upload/v1746159779/IMG-20250424-WA0018_zs6suw.jpg"
                  alt="Lobby AORI Guest House Malang"
                  fill
                  className="object-cover"
                  sizes="(max-width:968px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              Penginapan Syariah
            </span>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              Dekat Kampus UB
            </span>
            <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              WiFi Gratis
            </span>
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              Tengah Kota Malang
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
