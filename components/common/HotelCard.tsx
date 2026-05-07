import Image from "next/image";
import type { ComponentType } from "react";
import {
  BadgePercent,
  Bell,
  Car,
  Coffee,
  Dumbbell,
  MapPin,
  Star,
  Utensils,
  Waves,
  Wifi,
} from "lucide-react";

type AmenityKey = "parking" | "gym" | "wifi" | "desk" | "pool" | "cafe";

interface HotelCardProps {
  image: string;
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
  desk: Bell,
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
  return (
    <article className="group flex h-full min-w-[280px] flex-col overflow-hidden rounded-lg border border-[#e8e3d8] bg-white shadow-[0px_2px_8px_0px_#3D5A260A] transition duration-200 hover:-translate-y-1 hover:shadow-[0px_4px_16px_0px_#3D5A2614] sm:min-w-0">
      <div className="relative h-[178px] w-full overflow-hidden bg-[#918653]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1280px) 280px, (min-width: 768px) 33vw, 88vw"
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(54,66,36,0.30),rgba(151,120,33,0.20))]" />

        <span className="absolute left-3 top-3 rounded-[4px] bg-[#d7d27e] px-3 py-1 text-[8px] font-bold uppercase tracking-[0.7px] text-[#4c6734]">
          {badge}
        </span>

        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1">
          <span className="h-1 w-4 rounded-full bg-white" />
          <span className="h-1 w-1 rounded-full bg-white/60" />
          <span className="h-1 w-1 rounded-full bg-white/60" />
          <span className="h-1 w-1 rounded-full bg-white/60" />
        </div>

        {dealBadge ? (
          <span className="absolute bottom-3 left-3 rounded-[3px] bg-[#bd4b31] px-2 py-1 text-[8px] font-extrabold uppercase tracking-[0.5px] text-white shadow-sm">
            {dealBadge}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="line-clamp-2 text-[14px] font-bold leading-[20px] text-[#1f241f]">
              {title}
            </h3>

            <div className="mt-2 flex items-center gap-1 text-[#6f7567]">
              <MapPin className="h-3 w-3 shrink-0" />
              <p className="truncate text-[10px] font-bold uppercase tracking-[0.6px]">
                {location}
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-1 rounded-[4px] bg-primary px-2 py-1 text-white">
            <Star className="h-3 w-3 fill-white" />
            <span className="text-[11px] font-bold">{rating.toFixed(1)}</span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 border-t border-[#ece7dc] pt-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[3px] bg-[#edf4df] px-2 py-1 text-[9px] font-bold text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-5 gap-2 border-t border-[#ece7dc] pt-3">
          {amenities.map((amenity) => (
            <Facility key={amenity} type={amenity} />
          ))}
        </div>

        <div className="mt-3 flex items-start gap-2 rounded-[6px] border border-[#ead9b6] bg-[#fffaf0] px-3 py-2">
          <BadgePercent className="mt-0.5 h-4 w-4 shrink-0 text-[#a27b2a]" />
          <p className="text-[11px] leading-[17px] text-[#262a24]">
            {offerText}
          </p>
        </div>

        <div className="mt-auto flex items-end justify-between gap-4 pt-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-semibold text-[#9c9c96] line-through">
                {"\u20B9"}
                {formatAmount(oldPrice)}
              </span>
              <span className="rounded-full bg-[#f4dfbd] px-2 py-0.5 text-[8px] font-bold text-[#b06d21]">
                {discount}
              </span>
            </div>

            <div className="mt-1 flex items-end gap-1">
              <span className="text-[19px] font-extrabold leading-none text-[#1f241f]">
                {"\u20B9"}
                {formatAmount(price)}
              </span>
              <span className="text-[9px] font-medium text-[#777b72]">
                /night
              </span>
            </div>
          </div>

          <button className="rounded-[5px] bg-primary px-5 py-3 text-[11px] font-bold text-white transition hover:bg-primary-dark">
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
      <Icon className="h-4 w-4" />
      <span className="truncate text-[8px] font-bold uppercase tracking-[0.45px] text-[#4d5549]">
        {amenityLabels[type]}
      </span>
    </div>
  );
}
