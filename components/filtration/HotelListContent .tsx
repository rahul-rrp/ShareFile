import { MapPin, Star, Wifi, Car, Utensils, Dumbbell } from "lucide-react";

type HotelCardData = {
  id: string;
  badge: string;
  name: string;
  location: string;
  rating: string;
  tags: string[];
  originalPrice: string;
  price: string;
  imageClass: string;
};

const hotels: HotelCardData[] = [
  {
    id: "1",
    badge: "Autograph",
    name: "Saltstayz Autograph, Golf Course Road",
    location: "Golf Course Ext Road, Sector 58, Gurgaon",
    rating: "4.9",
    tags: ["Breakfast Included", "15% F&B Discount", "500 Cashback"],
    originalPrice: "₹5,000",
    price: "₹3,200",
    imageClass: "bg-[linear-gradient(135deg,#9A8B66,#716647)]",
  },
  {
    id: "2",
    badge: "Autograph",
    name: "Saltstayz Autograph, MG Road",
    location: "MG Road, Sector 29, Gurgaon",
    rating: "4.8",
    tags: ["Breakfast Included", "15% F&B Discount", "500 Cashback"],
    originalPrice: "₹7,000",
    price: "₹6,480",
    imageClass: "bg-[linear-gradient(135deg,#8A7653,#67533A)]",
  },
  {
    id: "3",
    badge: "Autograph",
    name: "Saltstayz Autograph, Sohna Road",
    location: "Sohna Road, Sector 49, Gurgaon",
    rating: "4.7",
    tags: ["Breakfast Included", "15% F&B Discount", "500 Cashback"],
    originalPrice: "₹6,000",
    price: "₹5,400",
    imageClass: "bg-[linear-gradient(135deg,#B89545,#8C753F)]",
  },
  {
    id: "4",
    badge: "Autograph",
    name: "Saltstayz Autograph, Golf Course Ext.",
    location: "Golf Course Ext. Road, Sector 62, Gurgaon",
    rating: "4.7",
    tags: ["Breakfast Included", "15% F&B Discount", "500 Cashback"],
    originalPrice: "₹6,200",
    price: "₹5,950",
    imageClass: "bg-[linear-gradient(135deg,#9B8B67,#6E5D43)]",
  },
  {
    id: "5",
    badge: "Premier",
    name: "Saltstayz Premier, Sector 50",
    location: "Sector 50, Gurgaon",
    rating: "4.9",
    tags: ["Breakfast Included", "15% F&B Discount", "500 Cashback"],
    originalPrice: "₹5,200",
    price: "₹3,900",
    imageClass: "bg-[linear-gradient(135deg,#B89443,#A58035)]",
  },
  {
    id: "6",
    badge: "Premier",
    name: "Saltstayz Premier, DLF Phase 1",
    location: "DLF Phase 1, Gurgaon",
    rating: "4.5",
    tags: ["Breakfast Included", "15% F&B Discount", "500 Cashback"],
    originalPrice: "₹4,500",
    price: "₹3,950",
    imageClass: "bg-[linear-gradient(135deg,#8E835E,#71684C)]",
  },
  {
    id: "7",
    badge: "Select",
    name: "Saltstayz Select, Cyber City",
    location: "Cyber City, Gurgaon",
    rating: "4.4",
    tags: ["Breakfast Included", "10% F&B Discount", "500 Cashback"],
    originalPrice: "₹3,500",
    price: "₹2,975",
    imageClass: "bg-[linear-gradient(135deg,#8E7F61,#695D45)]",
  },
];

function HotelCard({ hotel }: { hotel: HotelCardData }) {
  return (
    <article className="w-[328px] overflow-hidden rounded-[10px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
      {/* Image */}
      <div className={`relative h-[190px] w-full ${hotel.imageClass}`}>
        <span className="absolute left-[12px] top-[12px] rounded-[3px] bg-[#EEF3E6] px-[8px] py-[4px] text-[9px] font-bold uppercase tracking-[0.8px] text-[#4F7134]">
          {hotel.badge}
        </span>
      </div>

      {/* Body */}
      <div className="p-[12px]">
        <div className="flex items-start justify-between gap-[8px]">
          <h3 className="line-clamp-2 text-[13px] font-bold uppercase leading-[16px] text-[#1A1A1A]">
            {hotel.name}
          </h3>

          <span className="flex h-[20px] min-w-[38px] items-center justify-center rounded-[4px] bg-[#4F7134] text-[10px] font-bold text-[#F2D98C]">
            ★ {hotel.rating}
          </span>
        </div>

        <div className="mt-[5px] flex items-center gap-[4px] text-[11px] leading-[14px] text-[#6A6A66]">
          <MapPin className="h-[11px] w-[11px] shrink-0 text-[#4F7134]" />
          <span className="truncate">{hotel.location}</span>
        </div>

        {/* Tags */}
        <div className="mt-[10px] grid grid-cols-3 gap-[4px]">
          {hotel.tags.map((tag) => (
            <span
              key={tag}
              className="truncate rounded-[3px] bg-[#EEF3E6] px-[5px] py-[4px] text-center text-[8px] font-bold text-[#4F7134]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Amenities */}
        <div className="mt-[10px] grid grid-cols-4 border-y border-[#1A1A1A14] py-[8px] text-center">
          {[
            { icon: Wifi, label: "WiFi" },
            { icon: Car, label: "Parking" },
            { icon: Utensils, label: "Dining" },
            { icon: Dumbbell, label: "Gym" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-[3px]">
              <item.icon className="h-[13px] w-[13px] text-[#4F7134]" />
              <span className="text-[8.5px] text-[#6A6A66]">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Offer */}
        <div className="mt-[9px] rounded-[6px] bg-[#FFF7E1] px-[8px] py-[7px] text-[10px] leading-[14px] text-[#1A1A1A]">
          <span className="font-bold text-[#A88830]">Salt Stayz Beyond:</span>{" "}
          Get 25% off up to ₹1,000 on this stay
        </div>

        {/* Price + CTA */}
        <div className="mt-[10px] flex items-end justify-between">
          <div>
            <div className="flex items-center gap-[5px]">
              <span className="text-[10px] text-[#9A9A96] line-through">
                {hotel.originalPrice}
              </span>
              <span className="rounded-full bg-[#F9E8C2] px-[5px] py-[1px] text-[8px] font-bold text-[#9A7820]">
                10% off
              </span>
            </div>

            <p className="text-[16px] font-bold leading-[20px] text-[#1A1A1A]">
              {hotel.price}
              <span className="ml-[2px] text-[10px] font-normal text-[#6A6A66]">
                /night
              </span>
            </p>
          </div>

          <button className="h-[32px] rounded-[5px] bg-[#4F7134] px-[14px] text-[11px] font-bold text-white hover:bg-[#3D5A26]">
            Book Room
          </button>
        </div>
      </div>
    </article>
  );
}

export function HotelListContent() {
  return (
    <main className="flex min-h-[1675.41px] w-[1064px] flex-col gap-[20px]">
      {/* Top Header */}
<div className="flex h-[85px] w-[1064px] items-start justify-between gap-[448.94px] opacity-100">
  {/* Left Content */}
  <div className="flex h-[85px] min-w-[384.75px] flex-col gap-[5px] opacity-100">
   <p className="flex h-[15px] w-[384.75px] items-center font-brand text-[10px] font-bold uppercase leading-[15px] tracking-[1.2px] text-[#9A7820] opacity-100">
  Gurgaon · All Stayz
</p>

    <h1 className="flex h-[39px] w-[384.75px] items-start pt-[1px] font-brand text-[34px] font-bold uppercase leading-[37.4px] tracking-[0.68px] text-[#1A1A1A] whitespace-nowrap opacity-100">
  <span>Hotels in&nbsp;</span>
  <span className="font-normal italic text-[#A88830]">Gurgaon</span>
</h1>

    <p className="h-[21px] w-[384.75px] text-[13px] leading-[21px] text-[#6A6A66]">
      7 handpicked stayz across 11 localities
    </p>
  </div>

  {/* Right Sort Button */}
  <button
    type="button"
    className="mt-[43px] flex h-[42px] w-[230.31px] items-center justify-between gap-[8px] rounded-[12px] border border-[#1A1A1A29] bg-white px-[14px] opacity-100"
  >
    <span className="text-[11px] font-bold uppercase leading-[16.5px] text-[#6A6A66]">
      Sort by
    </span>

    <span className="text-[13px] leading-[19.5px] text-[#1A1A1A]">
      Recommended
    </span>

    <span className="text-[13px] leading-[19.5px] text-[#1A1A1A]">⌄</span>
  </button>
</div>

      <p className="mt-[18px] text-[13px] font-bold text-[#1A1A1A]">
            7 properties available
          </p>

      {/* Cards Grid */}
      <div className="grid w-full grid-cols-3 gap-[20px]">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </main>
  );
}