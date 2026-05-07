"use client";

import Link from "next/link";
import HotelCard from "@/components/common/HotelCard";

const featuredHotels = [
  {
    image: "/assets/hotels/hotel1.avif",
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
  return (
    <section className="w-full pt-[40px] pb-[40px] md:pt-[56px]">
      <div className="container-site px-6 md:px-[48px] flex flex-col gap-6 md:gap-[28px]">

        {/* HEADER */}
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-brand text-[20px] font-bold uppercase leading-none text-[#1f241f] sm:text-[24px] md:text-[34px] whitespace-nowrap">
            Hotels{" "}
            <span className="font-normal italic text-[#a88830]">
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
        <div className="
      -mx-6
      flex
      snap-x
      gap-[28px]
      overflow-x-auto
      px-6
      pb-4

      md:mx-0
      md:grid
      md:grid-cols-2
      md:overflow-visible
      md:px-0
      md:pb-0

      xl:grid-cols-4
    ">
          {featuredHotels.map((hotel) => (
            <div key={hotel.title} className="snap-start">
              <HotelCard {...hotel} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
