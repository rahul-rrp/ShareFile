"use client";

import { useRef } from "react";
import type { PointerEvent } from "react";
import Link from "next/link";
import HotelCard from "@/components/common/HotelCard";

const hotelCardImages = [
  "/assets/hotels/hotel1.avif",
  "/assets/hotels/hotel2.avif",
  "/assets/hotels/hotel3.avif",
];

const bestDeals = [
  {
    image: "/assets/hotels/hotel1.avif",
    images: hotelCardImages,
    badge: "Autograph",
    dealBadge: "25% off",
    title: "Saltstayz Autograph, Jaipur",
    location: "Civil Lines, Jaipur",
    rating: 4.7,
    tags: ["Long-weekend special", "Free breakfast"],
    amenities: ["parking", "gym", "wifi", "desk", "cafe"] as const,
    price: 4125,
    oldPrice: 5500,
    discount: "25% off",
    offerText: "Get Beyond, and get 25% off (up to Rs1,000) on your booking",
  },
  {
    image: "/assets/hotels/hotel2.avif",
    images: hotelCardImages,
    badge: "Autograph",
    dealBadge: "22% off",
    title: "Saltstayz Autograph, Rishikesh",
    location: "Tapovan, Rishikesh",
    rating: 4.8,
    tags: ["Stay 3 pay 2", "Free yoga"],
    amenities: ["parking", "gym", "wifi", "desk", "cafe"] as const,
    price: 5300,
    oldPrice: 6800,
    discount: "22% off",
    offerText: "Get Beyond, and get 25% off (up to Rs1,000) on your booking",
  },
  {
    image: "/assets/hotels/hotel3.avif",
    images: hotelCardImages,
    badge: "Premier",
    dealBadge: "18% off",
    title: "Saltstayz Premier, Bhopal",
    location: "New Market, Bhopal",
    rating: 4.5,
    tags: ["Midweek deal", "Breakfast included"],
    amenities: ["parking", "gym", "wifi", "desk", "cafe"] as const,
    price: 3690,
    oldPrice: 4500,
    discount: "18% off",
    offerText: "Get Beyond, and get 25% off (up to Rs1,000) on your booking",
  },
  {
    image: "/assets/hotels/hotel1.avif",
    images: hotelCardImages,
    badge: "Select",
    dealBadge: "15% off",
    title: "Saltstayz Select, Ujjain",
    location: "Mahakal Lok, Ujjain",
    rating: 4.3,
    tags: ["Pilgrim package", "Breakfast"],
    amenities: ["parking", "gym", "wifi", "desk", "cafe"] as const,
    price: 2380,
    oldPrice: 2800,
    discount: "15% off",
    offerText: "Get Beyond, and get 25% off (up to Rs1,000) on your booking",
  },
];

export default function BestDealsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const hasDraggedRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = false;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = event.clientX;
    scrollLeftRef.current = event.currentTarget.scrollLeft;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !scrollRef.current) {
      return;
    }

    const distance = event.clientX - startXRef.current;

    if (Math.abs(distance) > 4) {
      hasDraggedRef.current = true;
    }

    scrollRef.current.scrollLeft = scrollLeftRef.current - distance;
    event.preventDefault();
  };

  return (
    <section className="w-full pt-[40px] pb-[40px] md:pt-[56px]">
      <div className="container-site px-6 md:px-[48px] flex flex-col gap-6 md:gap-[28px]">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-brand text-[20px] font-bold uppercase leading-none text-black-primary sm:text-[24px] md:text-[34px] whitespace-nowrap">
            Best Deals{" "}
            <span className="font-normal italic text-gold-primary">For You</span>
          </h2>

          <Link
            href="/filtration"
            className="shrink-0 text-[11px] font-bold text-primary transition hover:text-primary-dark"
          >
            See all -&gt;
          </Link>
        </div>

        <div
          ref={scrollRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={stopDragging}
          onPointerCancel={stopDragging}
          onDragStart={(event) => event.preventDefault()}
          onClickCapture={(event) => {
            if (hasDraggedRef.current) {
              event.preventDefault();
              event.stopPropagation();
              hasDraggedRef.current = false;
            }
          }}
          className="
    -mx-6
    flex
    hide-scrollbar
    snap-x
    snap-mandatory
    cursor-grab
    gap-5
    overflow-x-auto
    scroll-smooth
    px-6
    pb-4
    active:cursor-grabbing
    select-none

    md:mx-0
    md:px-0
  "
        >
          {bestDeals.map((hotel) => (
            <div
              key={hotel.title}
              className="w-[280px] shrink-0 snap-start sm:w-[320px] lg:w-[340px]"
            >
              <HotelCard {...hotel} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
