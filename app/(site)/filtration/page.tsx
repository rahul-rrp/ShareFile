import { FilterSidebar } from "@/components/filtration/FilterCategoryButton";
import { HotelListContent } from "@/components/filtration/HotelListContent ";
import { Calendar, MapPin, Search } from "lucide-react";

type FilterSearchBarProps = {
  location: string;
  checkIn: string;
  checkOut: string;
  nights: string;
};

export function FilterSearchBar({
  location,
  checkIn,
  checkOut,
  nights,
}: FilterSearchBarProps) {
  return (
    <section className="h-[96.5px] w-full border-b border-[#1A1A1A14] bg-white px-[48px] py-[16px]">
      <div className="grid h-[63.5px] max-w-[900px] grid-cols-[280px_228.281px_228.281px_161.44px] overflow-visible rounded-[12px] border border-[#1A1A1A29] bg-[#F5F3EC]">
        {/* Destination */}
        <div className="flex h-[61.5px] items-center border-r border-[#1A1A1A29] px-[20px] py-[12px]">
          <div className="min-w-0">
            <p className="font-brand h-[14px] text-[12px] font-bold uppercase leading-[13.5px] tracking-[1.08px] text-[#6A6A66]">
              Destination
            </p>

            <div className="mt-[2.5px] flex h-[21px] items-center gap-[6px]">
              <MapPin className="h-[14px] w-[14px] shrink-0 text-[#4F7134]" />

              <p className="font-body truncate text-[14px] font-bold leading-[21px] text-[#1A1A1A]">
                {location}
              </p>
            </div>
          </div>
        </div>

        {/* Check-in */}
        <div className="flex h-[61.5px] items-center border-r border-[#1A1A1A29] px-[20px] py-[12px]">
          <div className="min-w-0">
            <p className="font-brand h-[14px] text-[12px] font-bold uppercase leading-[13.5px] tracking-[1.08px] text-[#6A6A66]">
              Check-in
            </p>

            <div className="mt-[2.5px] flex h-[21px] items-center gap-[6px]">
              <Calendar className="h-[14px] w-[14px] shrink-0 text-[#4F7134]" />

              <p className="font-body truncate text-[14px] font-bold leading-[21px] text-[#1A1A1A]">
                {checkIn}
              </p>
            </div>
          </div>
        </div>

        {/* Check-out */}
        <div className="relative flex h-[61.5px] items-center border-r border-[#1A1A1A29] px-[20px] py-[12px]">
          <span className="absolute -top-[9px] right-[20px] flex h-[18px] w-[50px] items-center justify-center rounded-full bg-[#3D5A26] px-[9px] py-[3px]">
            <span className="font-body text-center text-[10px] font-bold leading-none tracking-[0.4px] text-[#F2D98C]">
              {nights}
            </span>
          </span>

          <div className="min-w-0">
            <p className="font-brand h-[14px] text-[12px] font-bold uppercase leading-[13.5px] tracking-[1.08px] text-[#6A6A66]">
              Check-out
            </p>

            <div className="mt-[2.5px] flex h-[21px] items-center gap-[6px]">
              <Calendar className="h-[14px] w-[14px] shrink-0 text-[#4F7134]" />

              <p className="font-body truncate text-[14px] font-bold leading-[21px] text-[#1A1A1A]">
                {checkOut}
              </p>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <button className="flex h-[61.5px] w-[161.44px] items-center justify-center gap-[6px] rounded-tr-[12px] rounded-br-[12px] bg-[#4F7134] hover:bg-[#3D5A26]">
          {/* Search Icon */}
          <Search
            className="h-[16px] w-[16px] shrink-0 text-white"
            strokeWidth={1.33}
          />

          {/* Button Text */}
          <span className="font-body text-center text-[14px] font-bold leading-[21px] text-white">
            Find Stayz
          </span>
        </button>
      </div>
    </section>
  );
}

export default function FiltrationPage() {
  const filterData = {
    city: "Gurgaon",
    location: "Gurgaon, India",
    checkIn: "Sat, 18 Apr 2026",
    checkOut: "Sun, 19 Apr 2026",
    nights: "1 night",
  };

  return (
    <main className="min-h-screen bg-[#f5f3ec]">
      <div className="h-[39px] w-full bg-[#3D5A26] px-[48px] py-[9px]">
        <div className="flex h-full items-center gap-[6px]">
          {/* Home */}
          <span className="font-body h-[19px] text-[12.5px] leading-[18.75px] font-Calibri text-white/70">
            Home
          </span>

          {/* Separator */}
          <span className="font-body text-[14px] leading-[21px] font-Calibri text-white/35">
            ›
          </span>

          {/* Destinations */}
          <span className="font-body h-[19px] text-[12.5px] leading-[18.75px] font-Calibri text-white/70">
            Destinations
          </span>

          {/* Separator */}
          <span className="font-body text-[14px] leading-[21px] font-Calibri text-white/35">
            ›
          </span>

          {/* Dynamic City */}
          <span className="font-body h-[19px] text-[12.5px] leading-[18.75px] font-bold text-white">
            {filterData.city}
          </span>
        </div>
      </div>

      {/* Filter Search Bar */}
      <FilterSearchBar {...filterData} />

      <section className="grid h-[1767.3px] w-[1440px] grid-cols-[280px_1064px] gap-0 bg-[#F5F3EC] px-[48px] pt-[36px] opacity-100">
        <FilterSidebar />
        <HotelListContent />
      </section>
    </main>
  );
}