"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import RoomGallery from "./room-gallery";
import { Check } from "lucide-react";

interface RoomDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  price: string;
  description: string;
  features: string[];
  images: { src: string; alt: string }[];
}

export default function RoomDetailModal({
  isOpen,
  onClose,
  title,
  price,
  description,
  features,
  images,
}: RoomDetailModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">{title}</DialogTitle>
        </DialogHeader>

        <div className="mt-4">
          <RoomGallery images={images} />
        </div>

        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Deskripsi</h3>
            <div className="text-lg font-bold text-blue-600">
              {price}
              <span className="text-sm font-normal text-gray-500">/malam</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4">{description}</p>

          <h3 className="font-medium mb-2">Fasilitas</h3>
          <ul className="grid grid-cols-2 gap-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm">
                <Check className="h-4 w-4 mr-2 text-green-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
