"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const instagramPosts = [
  { id: 1, color: "#a18a66" },
  { id: 2, color: "#5d7044" },
  { id: 3, color: "#8c7a63" },
  { id: 4, color: "#7a7a7a" },
  { id: 5, color: "#5a6345" },
  { id: 6, color: "#6a5a4a" },
  { id: 7, color: "#96836c" },
  { id: 8, color: "#535d3d" },
  { id: 9, color: "#967f41" },
];

export default function InstagramSection() {
  return (
    <section className="w-full bg-[#F5F3EC] pt-[56px] pb-[40px]">
      <div className="container-site px-[48px] flex flex-col gap-[28px]">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="font-brand text-[28px] font-bold uppercase leading-none text-[#1f241f] md:text-[34px]">
            FROM{" "}
            <span className="font-normal italic text-[#9f8428]">
              OUR TRAVELS
            </span>
          </h2>

          <Link
            href="https://instagram.com/saltstayz"
            target="_blank"
            className="flex items-center gap-1.5 text-[12px] font-bold text-[#1f241f] transition hover:opacity-70"
          >
            @saltstayz <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="aspect-square w-full overflow-hidden rounded-[8px] transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: post.color }}
            >
              {/* Once real images are available, use <Image /> here */}
              <div className="h-full w-full bg-gradient-to-br from-white/10 to-transparent" />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="https://instagram.com/saltstayz"
            target="_blank"
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#4f7134] transition hover:opacity-70"
          >
            @SALTSTAYZ · FOLLOW ON INSTAGRAM <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
