"use client";

import { useState, useEffect } from "react";

const hotelImages = [
  "/assets/hotels/hotel1.avif",
  "/assets/hotels/hotel2.avif",
  "/assets/hotels/hotel3.avif",
];

export default function HeroCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % hotelImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {hotelImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out z-0
            ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}
          `}
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
      ))}
    </>
  );
}
