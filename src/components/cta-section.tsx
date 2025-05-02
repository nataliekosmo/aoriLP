"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

export default function CtaSection() {
  const handleBookNow = () => {
    const message =
      "Assalamualaikum, saya ingin memesan kamar di AORI Guest House Malang.";
    window.open(
      `https://wa.me/+6282257673337?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <div className="w-full py-12 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Siap Memesan Kamar?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
          Nikmati kenyamanan, kemudahan, dan nilai-nilai Islami di AORI Guest
          House Malang
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            onClick={handleBookNow}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Pesan via WhatsApp
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-blue-600"
            onClick={() => window.open("tel:+6281234567890", "_blank")}
          >
            <Phone className="mr-2 h-5 w-5" />
            Hubungi Kami
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-blue-100">
          <span>Tanpa biaya pemesanan</span>
          <span className="w-1 h-1 rounded-full bg-blue-300"></span>
          <span>Jaminan harga terbaik</span>
          <span className="w-1 h-1 rounded-full bg-blue-300"></span>
          <span>Konfirmasi instan</span>
        </div>
      </div>
    </div>
  );
}
