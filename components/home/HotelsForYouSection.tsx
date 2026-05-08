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

const featuredHotels = [
  {
    image: "/assets/hotels/hotel1.avif",
    images: hotelCardImages,
    badge: "Autograph",
    title: "Saltstayz Autograph, Golf Course Road",
    location: "Sector 58, Gurgaon",
    rating: 4.9,
    tags: ["Breakfast", "15% F&B", "Rs500 Cashback"],
    amenities: ["parking", "gym", "wifi", "desk", "pool"] as const,
    price: 5200,
    oldPrice: 6500,
    discount: "25% off",
    offerText: "Get Beyond, and get 25% off (up to Rs1,000) on your booking",
  },
  {
    image: "/assets/hotels/hotel2.avif",
    images: hotelCardImages,
    badge: "Autograph",
    title: "Saltstayz Autograph, MG Road",
    location: "MG Road, Gurgaon",
    rating: 4.8,
    tags: ["Breakfast", "15% F&B", "Rs500 Cashback"],
    amenities: ["parking", "gym", "wifi", "desk", "pool"] as const,
    price: 6480,
    oldPrice: 7200,
    discount: "10% off",
    offerText: "Get Beyond, and get 25% off (up to Rs1,000) on your booking",
  },
  {
    image: "/assets/hotels/hotel3.avif",
    images: hotelCardImages,
    badge: "Premier",
    title: "Saltstayz Premier, Sector 50",
    location: "Sector 50, Gurgaon",
    rating: 4.6,
    tags: ["Breakfast", "10% F&B", "Rs300 Cashback"],
    amenities: ["parking", "gym", "wifi", "desk", "cafe"] as const,
    price: 3900,
    oldPrice: 4200,
    discount: "7% off",
    offerText: "Get Beyond, and get 25% off (up to Rs1,000) on your booking",
  },
  {
    image: "/assets/hotels/hotel1.avif",
    images: hotelCardImages,
    badge: "Select",
    title: "Saltstayz Select, Cyber City",
    location: "Cyber City, Gurgaon",
    rating: 4.4,
    tags: ["Breakfast", "10% F&B", "Rs250 Cashback"],
    amenities: ["parking", "gym", "wifi", "desk", "cafe"] as const,
    price: 2975,
    oldPrice: 3250,
    discount: "7% off",
    offerText: "Get Beyond, and get 25% off (up to Rs1,000) on your booking",
  },
];

export default function HotelsForYouSection() {
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

        {/* HEADER */}
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-brand text-[20px] font-bold uppercase leading-none text-black-primary sm:text-[24px] md:text-[34px] whitespace-nowrap">
            Hotels{" "}
            <span className="font-normal italic text-gold-primary">
              For You
            </span>
          </h2>

          <Link
            href="/filtration"
            className="shrink-0 text-[11px] font-bold text-primary transition hover:text-primary-dark"
          >
            See all -&gt;
          </Link>
        </div>

        {/* CARDS */}
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
      gap-[28px]
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
          {featuredHotels.map((hotel) => (
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
