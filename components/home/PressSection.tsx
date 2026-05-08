"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

const pressArticles = [
  {
    source: "CONDE NAST",
    date: "FEB 2024",
    title: '"SALTSTAYZ IS QUIETLY REDEFINING THE MID-PREMIUM INDIAN STAY"',
    link: "#",
    color: "#7e6245",
  },
  {
    source: "MINT LOUNGE",
    date: "JAN 2024",
    title:
      "WHY HOTELIERS ARE BETTING ON TIER-2 CITIES — AND SALTSTAYZ LEADS THE CHARGE",
    link: "#",
    color: "#5c7042",
  },
  {
    source: "TRAVEL + LEISURE",
    date: "DEC 2023",
    title: "A BOUTIQUE CHAIN THAT GETS THE MODERN INDIAN TRAVELLER RIGHT",
    link: "#",
    color: "#463a2d",
  },
  {
    source: "FORBES INDIA",
    date: "NOV 2023",
    title: "31 PROPERTIES, ONE PROMISE — INSIDE SALTSTAYZ'S GROWTH PLAYBOOK",
    link: "#",
    color: "#5e4d3c",
  },
];

export default function PressSection() {
  return (
    <section className="w-full pt-[40px] pb-[40px] md:pt-[56px]">
      <div className="container-site px-6 md:px-[48px] flex flex-col gap-6 md:gap-[28px]">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-brand text-[20px] font-bold uppercase leading-none text-black-primary sm:text-[24px] md:text-[34px] whitespace-nowrap">
            WHAT PEOPLE ARE{" "}
            <span className="font-normal italic text-gold-primary">WRITING</span>
          </h2>

          <Link
            href="/press"
            className="shrink-0 text-[11px] font-bold text-[#4f7134] transition hover:text-[#3d5a28]"
          >
            All press -&gt;
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
      md:grid-cols-2
      md:overflow-visible
      md:px-0
      md:pb-0

      lg:grid-cols-4
    "
        >
          {pressArticles.map((article) => (
            <div
              key={article.title}
              className="group flex min-w-[280px] snap-start flex-col overflow-hidden rounded-[12px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] md:min-w-0"
            >
              <div
                className="aspect-[16/10] w-full p-6"
                style={{ backgroundColor: article.color }}
              >
                <span className="inline-block h-[22px] rounded-[4px] bg-white px-[9px] py-[4px] text-[9px] font-brand font-bold tracking-wider text-primary opacity-100 backdrop-blur-md">
                  {article.source}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[10px] font-bold font-Calibri text-[#6A6A66]">
                  {article.date}
                </p>
                <h3 className="mt-3 line-clamp-3 text-[14.4px] font-brand font-bold leading-tight text-black-primary">
                  {article.title}
                </h3>
                <Link
                  href={article.link}
                  className="mt-auto pt-6 flex items-center gap-1 text-[11px] font-Calibri font-bold text-primary transition hover:gap-1.5"
                >
                  Read article <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
