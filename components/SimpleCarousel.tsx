"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselImage {
  src: string;
  alt: string;
}

interface SimpleCarouselProps {
  images: CarouselImage[];
  width?: number;
  height?: number;
}

export default function SimpleCarousel({ images, width = 600, height = 400 }: SimpleCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full flex justify-center items-center" style={{ width, height }}>
      {images.map((img, idx) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          width={width}
          height={height}
          className={`rounded-2xl shadow-2xl absolute transition-opacity duration-700 object-contain bg-white ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          priority={idx === 0}
        />
      ))}
      {/* Setas de navegação */}
      <button
        onClick={goToPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-yellow-700 rounded-full p-2 shadow-lg z-20 transition"
        aria-label="Imagem anterior"
        type="button"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-yellow-700 rounded-full p-2 shadow-lg z-20 transition"
        aria-label="Próxima imagem"
        type="button"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
} 