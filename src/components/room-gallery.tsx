"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface RoomGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function RoomGallery({
  images = [
    {
      src: "https://res.cloudinary.com/dzhrjgqj0/image/upload/v1746159777/IMG-20250424-WA0012_q1sims.jpg",
      alt: "Tampak Kamar",
    },
    {
      src: "https://res.cloudinary.com/dzhrjgqj0/image/upload/v1746159779/IMG-20250424-WA0019_koca6s.jpg",
      alt: "Kamar Mandi",
    },
    {
      src: "https://res.cloudinary.com/dzhrjgqj0/image/upload/v1746159793/IMG-20250424-WA0028_iaca51.jpg",
      alt: "Garden",
    },
    {
      src: "https://res.cloudinary.com/dzhrjgqj0/image/upload/v1746159779/IMG-20250424-WA0018_zs6suw.jpg",
      alt: "Communal Space",
    },
    {
      src: "https://res.cloudinary.com/dzhrjgqj0/image/upload/v1746159778/IMG-20250424-WA0016_nmlzbc.jpg",
      alt: "Lobby",
    },
  ],
}: RoomGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-full relative">
      <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className="object-cover transition-opacity duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Navigation arrows */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={goToPrevious}
            className="p-1 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
            aria-label="Foto sebelumnya"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="p-1 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
            aria-label="Foto berikutnya"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Image counter */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail navigation */}
      <div className="flex mt-2 gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative w-16 h-16 rounded-md overflow-hidden cursor-pointer transition-all ${index === currentIndex ? "ring-2 ring-blue-500" : "opacity-70"}`}
            onClick={() => goToSlide(index)}
          >
            <Image
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
