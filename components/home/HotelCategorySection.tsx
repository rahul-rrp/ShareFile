"use client";

import { useRef } from "react";
import type { PointerEvent } from "react";
import Link from "next/link";

import HotelCard from "@/components/common/HotelCard";

type Hotel = Parameters<typeof HotelCard>[0];

interface HotelCategorySectionProps {
  accent: string;
  title: string;
  seeAllCount: number;
  hotels: Hotel[];
  columns?: 3 | 4;
}

export default function HotelCategorySection({
  accent,
  title,
  seeAllCount,
  hotels,
}: HotelCategorySectionProps) {
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
    <section className="w-full pt-[56px] pb-[40px]">
      <div className="container-site px-6 md:px-[48px] flex flex-col gap-[28px]">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-brand text-[28px] font-bold uppercase leading-none text-[#1f241f] md:text-[34px]">
            <span className="font-normal italic text-gold-primary">
              {accent}
            </span>{" "}
            {title}
          </h2>

          <Link
            href="/filtration"
            className="shrink-0 text-[11px] font-bold text-primary transition hover:text-primary-dark"
          >
            See all {seeAllCount} -&gt;
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
          {hotels.map((hotel) => (
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
