"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { ComponentType } from "react";
import {
  Car,
  Coffee,
  Dumbbell,
  MapPin,
  Star,
  Clock,
  Utensils,
  Waves,
  Wifi,
} from "lucide-react";

type AmenityKey = "parking" | "gym" | "wifi" | "desk" | "pool" | "cafe";

interface HotelCardProps {
  image: string;
  images?: string[];
  badge?: string;
  title: string;
  location: string;
  rating: number;
  tags: string[];
  amenities?: readonly AmenityKey[];
  dealBadge?: string;
  price: number;
  oldPrice: number;
  discount: string;
  offerText: string;
  buttonText?: string;
}

const amenityIcons: Record<AmenityKey, ComponentType<{ className?: string }>> = {
  parking: Car,
  gym: Dumbbell,
  wifi: Wifi,
  desk: Clock,
  pool: Waves,
  cafe: Coffee,
};

const amenityLabels: Record<AmenityKey, string> = {
  parking: "Parking",
  gym: "Gym",
  wifi: "WiFi",
  desk: "24/7",
  pool: "Pool",
  cafe: "Cafe",
};

const formatAmount = (amount: number) =>
  new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(amount);

export default function HotelCard({
  image,
  images = [],
  badge = "Autograph",
  title,
  location,
  rating,
  tags,
  amenities = ["parking", "gym", "wifi", "desk", "pool"],
  dealBadge,
  price,
  oldPrice,
  discount,
  offerText,
  buttonText = "Book Room",
}: HotelCardProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const carouselImages = useMemo(() => {
    return Array.from(new Set([image, ...images])).filter(Boolean);
  }, [image, images]);

  const activeImage = carouselImages[activeImageIndex % carouselImages.length];
  const activeDotIndex = activeImageIndex % carouselImages.length;

  useEffect(() => {
    if (carouselImages.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveImageIndex((currentIndex) =>
        (currentIndex + 1) % carouselImages.length
      );
    }, 3000);

    return () => window.clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <article className="group flex h-full min-w-[280px] flex-col overflow-hidden rounded-lg border border-[#e8e3d8] bg-white shadow-[0px_2px_8px_0px_#3D5A260A] transition duration-200 hover:-translate-y-1 hover:shadow-[0px_4px_16px_0px_#3D5A2614] sm:min-w-0">
      <div className="relative h-[178px] w-full overflow-hidden bg-[#918653]">
        <Image
          key={activeImage}
          src={activeImage}
          alt={title}
          fill
          sizes="(min-width: 1280px) 280px, (min-width: 768px) 33vw, 88vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(54,66,36,0.30),rgba(151,120,33,0.20))]" />

        <span className="absolute left-3 top-3 rounded-[4px] bg-[#d7d27e] px-3 py-1 text-[8px] font-bold uppercase tracking-[0.7px] text-[#4c6734]">
          {badge}
        </span>

        {carouselImages.length > 1 ? (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1">
            {carouselImages.map((carouselImage, index) => (
              <button
                key={carouselImage}
                type="button"
                aria-label={`Show image ${index + 1} for ${title}`}
                onClick={() => setActiveImageIndex(index)}
                className={`h-1 rounded-full transition-all ${index === activeDotIndex ? "w-4 bg-white" : "w-1 bg-white/60"
                  }`}
              />
            ))}
          </div>
        ) : null}

        {dealBadge ? (
          <span className="absolute bottom-3 left-3 rounded-[3px] bg-[#bd4b31] px-2 py-1 text-[8px] font-extrabold uppercase tracking-[0.5px] text-white shadow-sm">
            {dealBadge}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 w-full">
            <h3 className="line-clamp-2 min-h-[40px] text-[14px] font-Calibri font-bold leading-[20px] text-[#1f241f]">
              {title}
            </h3>

            <div className="mt-2 flex items-center justify-between gap-3">
              {/* LEFT - LOCATION */}
              <div className="flex flex-1 items-center gap-1 text-[#6A6A66] min-w-0">
                <MapPin className="h-3 w-3 shrink-0" />

                <p className="truncate text-[10px] font-calibri font-bold uppercase tracking-[0.6px]">
                  {location}
                </p>
              </div>

              {/* RIGHT - RATING */}
              <div className="flex shrink-0 items-center gap-1 rounded-[4px] bg-primary px-2 py-1">
                <Star className="h-3 w-3 fill-[#F2D98C] stroke-[#F2D98C]" />

                <span className="text-[11px] font-bold text-[#F2D98C]">
                  {rating.toFixed(1)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 border-t border-[#ece7dc] pt-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[4px] bg-[#EEF3E6] font-Calibri px-2 py-1 text-[12px] font-bold text-[#4F7134]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-5 font-Calibri gap-2 border-t border-[#ece7dc] pt-3">
          {amenities.map((amenity) => (
            <Facility key={amenity} type={amenity} />
          ))}
        </div>

        <div className="mt-3 flex items-center gap-2 rounded-[6px] border border-[#ead9b6] bg-[#fffaf0] px-3 py-2">
          <Star className="mt-0.5 h-4 w-4 shrink-0 text-[#a88830]" />
          <p className="text-[14px] leading-[17px] font-Calibri text-[#1A1A1A] font-bold">
            {offerText.startsWith("Get Beyond,") ? (
              <>
                <span className="font-bold font-Calibri text-[#9A7820]">
                  Get Beyond,
                </span>{" "}
                {offerText.replace("Get Beyond,", "").trim()}
              </>
            ) : (
              offerText
            )}
          </p>
        </div>

        <div className="mt-auto flex items-end justify-between gap-4 pt-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-semibold font-Calibri text-[#9A9A96] line-through">
                {"\u20B9"}
                {formatAmount(oldPrice)}
              </span>
              <span className="rounded-full bg-[#FFD9BF] px-2 py-0.5 text-[8px] font-bold font-Calibri text-[#9A7820]">
                {discount}
              </span>
            </div>

            <div className="mt-1 flex items-end gap-1">
              <span className="text-[19px] font-Calibri font-extrabold leading-none text-[#1f241f]">
                {"\u20B9"}
                {formatAmount(price)}
              </span>
              <span className="text-[9px] font-Calibri font-medium text-[#9A9A96]">
                /night
              </span>
            </div>
          </div>

          <button className="rounded-[5px] font-Calibri bg-primary px-5 py-3 text-[11px] font-bold text-white transition hover:bg-primary-dark">
            {buttonText}
          </button>
        </div>
      </div>
    </article>
  );
}

function Facility({ type }: { type: AmenityKey }) {
  const Icon = amenityIcons[type] ?? Utensils;

  return (
    <div className="flex min-w-0 flex-col items-center gap-1 text-[#5d6e4b]">
      <Icon className="h-4 w-4 text-icon" />
      <span className="truncate text-[8px] font-bold uppercase tracking-[0.45px] text-[#6A6A66]">
        {amenityLabels[type]}
      </span>
    </div>
  );
}
