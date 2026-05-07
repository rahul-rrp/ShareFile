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
  columns = 4,
}: HotelCategorySectionProps) {
  const desktopColumns = columns === 3 ? "xl:grid-cols-3" : "xl:grid-cols-4";

  return (
    <section className="w-full pt-[40px] pb-[40px] md:pt-[56px]">
      <div className="container-site px-6 md:px-[48px] flex flex-col gap-6 md:gap-[28px]">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-brand text-[20px] font-bold uppercase leading-none text-[#1f241f] sm:text-[24px] md:text-[34px] whitespace-nowrap">
            <span className="font-normal italic text-[#a88830]">
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
          className={`
      -mx-6
      flex
      snap-x
      gap-5
      overflow-x-auto
      px-6
      pb-4

      md:mx-0
      md:grid
      md:grid-cols-2
      md:overflow-visible
      md:px-0
      md:pb-0

      ${desktopColumns}
    `}
        >
          {hotels.map((hotel) => (
            <div key={hotel.title} className="snap-start">
              <HotelCard {...hotel} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
