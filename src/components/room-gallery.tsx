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
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/477685268.jpg?k=60b3eedb0be0eb1fc70b66e7aed3dc4c7be94cd39d5e05e2e81a886d72ab3475&o=&hp=1",
      alt: "Tampak Kamar",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/481628652.jpg?k=98a87911d652dcdb3a93a4fb0c053a359c3521ee82902658d403549a993dafc7&o=&hp=1",
      alt: "Kamar Mandi",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/481628078.jpg?k=27c3096c8b98a6c9eebbdff22126a9cac932ba6981cc83f9c4bd546b09b2c2b8&o=&hp=1",
      alt: "Garden",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/481628081.jpg?k=5538bc730fe378ab1b5350cda84a91fbff50617f790f42f6c1432ed85244576b&o=&hp=1",
      alt: "Communal Space",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/481628075.jpg?k=3153304848460613dce0b052a90c92cd7a98d97e83a552557902e1f2d0427f17&o=&hp=1",
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
