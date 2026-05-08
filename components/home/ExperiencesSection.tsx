"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

const experienceCards = [
  {
    category: "EAT & DRINK",
    title: "RESTAURANTS",
    description:
      "Signature dining at our Autograph properties — Indian classics, world plates, and a curated bar list.",
    stats: "9 venues - 6 cities",
    link: "/restaurants",
    linkText: "Discover",
    gradient: "linear-gradient(to bottom, #a17942, #4f7134)",
  },
  {
    category: "MEET & CONVENE",
    title: "BANQUETS",
    description:
      "Conferences, weddings & events — flexible halls from 50 to 500 guests, with a dedicated planner.",
    stats: "16 halls - capacity 500+",
    link: "/banquets",
    linkText: "Plan an event",
    gradient: "linear-gradient(to bottom, #4f7134, #2a3c1c)",
  },
  {
    category: "MAKE THE MOMENT",
    title: "CELEBRATIONS",
    description:
      "Anniversaries, birthdays, intimate gatherings — bespoke packages with stay, food & styling.",
    stats: "From ₹15,000 / event",
    link: "/celebrations",
    linkText: "Curate",
    gradient: "linear-gradient(to bottom, #a19342, #4f7134)",
  },
];

export default function ExperiencesSection() {
  return (
    <section className="w-full pt-[40px] pb-[40px] md:pt-[56px]">
      <div className="container-site px-6 md:px-[48px] flex flex-col gap-6 md:gap-[28px]">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-brand text-[20px] font-bold uppercase leading-none text-black-primary sm:text-[24px] md:text-[34px] whitespace-nowrap">
            DINE, GATHER &{" "}
            <span className="font-normal italic text-gold-primary">CELEBRATE</span>
          </h2>

          <Link
            href="/experiences"
            className="shrink-0 text-[11px] font-bold text-[#4f7134] transition hover:text-[#3d5a28]"
          >
            Explore -&gt;
          </Link>
        </div>

        <div
          className="
      -mx-6
      flex
      snap-x
      gap-6
      overflow-x-auto
      px-6
      pb-4

      md:mx-0
      md:grid
      md:grid-cols-3
      md:overflow-visible
      md:px-0
      md:pb-0
    "
        >
          {experienceCards.map((card) => (
            <div
              key={card.title}
              className="group flex min-w-[280px] snap-start flex-col overflow-hidden rounded-[12px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] md:min-w-0"
            >
              <div
                className="relative aspect-[4/3] w-full"
                style={{ background: card.gradient }}
              >
                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                  <p className="text-[10px] font-bold tracking-widest opacity-80">
                    {card.category}
                  </p>
                  <h3 className="font-brand text-[32px] font-bold leading-none">
                    {card.title}
                  </h3>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[14px] font-Calibri leading-relaxed text-[#6A6A66]">
                  {card.description}
                </p>
                <div className="mt-auto pt-6">
                  <p className="text-[12px] font-Calibri font-bold text-primary">
                    {card.stats}
                  </p>
                  <Link
                    href={card.link}
                    className="mt-3 flex items-center font-Calibri gap-1.5 text-[12px] font-bold text-primary transition hover:gap-2"
                  >
                    {card.linkText} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
