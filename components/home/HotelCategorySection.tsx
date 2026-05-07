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
    <section className="w-full pt-[56px] pb-[40px]">
      <div className="container-site px-[48px] flex flex-col gap-[28px]">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-brand text-[28px] font-bold uppercase leading-none text-[#1f241f] md:text-[34px]">
            <span className="font-normal italic text-[#b08a28]">
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
          className="
    grid
    grid-cols-1
    md:grid-cols-2
    xl:grid-cols-4

    gap-x-[20px]
    gap-y-[20px]

    w-full
  "
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
