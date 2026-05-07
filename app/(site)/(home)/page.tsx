import { ArrowRight } from "lucide-react";
import Link from "next/link";

import BestDealsSection from "@/components/home/BestDealsSection";
import BeyondRewards from "@/components/home/BeyondRewards";
import DestinationsForYou from "@/components/home/DestinationsForYou";
import ExperiencesSection from "@/components/home/ExperiencesSection";
import Hero from "@/components/home/Hero";
import HotelCategorySection from "@/components/home/HotelCategorySection";
import HotelsForYouSection from "@/components/home/HotelsForYouSection";
import InstagramSection from "@/components/home/InstagramSection";
import PressSection from "@/components/home/PressSection";

const autographHotels = [
  {
    image: "/assets/hotels/hotel1.avif",
    badge: "Autograph",
    title: "Saltstayz Autograph, Connaught Place",
    location: "Connaught Place, New Delhi",
    rating: 4.9,
    tags: ["Breakfast", "15% F&B", "Rs500 Cashback"],
    amenities: ["parking", "gym", "wifi", "desk", "pool"] as const,
    price: 7380,
    oldPrice: 8200,
    discount: "10% off",
    offerText: "Get Beyond, and get 25% off (up to Rs1,000) on your booking",
  },
  {
    image: "/assets/hotels/hotel2.avif",
    badge: "Autograph",
    title: "Saltstayz Autograph, Rishikesh",
    location: "Tapovan, Rishikesh",
    rating: 4.8,
    tags: ["Breakfast", "15% F&B", "Rs500 Cashback"],
    amenities: ["parking", "gym", "wifi", "desk", "cafe"] as const,
    price: 5980,
    oldPrice: 6800,
    discount: "12% off",
    offerText: "Get Beyond, and get 25% off (up to Rs1,000) on your booking",
  },
  {
    image: "/assets/hotels/hotel3.avif",
    badge: "Autograph",
    title: "Saltstayz Autograph, Jaipur",
    location: "Civil Lines, Jaipur",
    rating: 4.7,
    tags: ["Breakfast", "15% F&B", "Rs500 Cashback"],
    amenities: ["parking", "gym", "wifi", "desk", "pool"] as const,
    price: 4950,
    oldPrice: 5500,
    discount: "10% off",
    offerText: "Get Beyond, and get 25% off (up to Rs1,000) on your booking",
  },
  {
    image: "/assets/hotels/hotel1.avif",
    badge: "Autograph",
    title: "Saltstayz Autograph, Varanasi",
    location: "Assi Ghat, Varanasi",
    rating: 4.8,
    tags: ["Breakfast", "15% F&B", "Rs500 Cashback"],
    amenities: ["parking", "gym", "wifi", "desk", "cafe"] as const,
    price: 5580,
    oldPrice: 6200,
    discount: "10% off",
    offerText: "Get Beyond, and get 25% off (up to Rs1,000) on your booking",
  },
];

const premierHotels = [
  {
    image: "/assets/hotels/hotel2.avif",
    badge: "Premier",
    title: "Saltstayz Premier, Bhopal",
    location: "Shahpura, Bhopal",
    rating: 4.6,
    tags: ["Breakfast", "10% F&B", "Rs300 Cashback"],
    amenities: ["parking", "gym", "wifi", "desk", "pool"] as const,
    price: 4180,
    oldPrice: 4650,
    discount: "10% off",
    offerText: "Get Beyond, and get 25% off (up to Rs1,000) on your booking",
  },
  {
    image: "/assets/hotels/hotel3.avif",
    badge: "Premier",
    title: "Saltstayz Premier, Chandigarh",
    location: "Sector 17, Chandigarh",
    rating: 4.5,
    tags: ["Breakfast", "10% F&B", "Rs300 Cashback"],
    amenities: ["parking", "gym", "wifi", "desk", "pool"] as const,
    price: 3900,
    oldPrice: 4300,
    discount: "7% off",
    offerText: "Get Beyond, and get 25% off (up to Rs1,000) on your booking",
  },
  {
    image: "/assets/hotels/hotel1.avif",
    badge: "Premier",
    title: "Saltstayz Premier, Bengaluru",
    location: "Indiranagar, Bengaluru",
    rating: 4.6,
    tags: ["Breakfast", "10% F&B", "Rs300 Cashback"],
    amenities: ["parking", "gym", "wifi", "desk", "pool"] as const,
    price: 4320,
    oldPrice: 4800,
    discount: "10% off",
    offerText: "Get Beyond, and get 25% off (up to Rs1,000) on your booking",
  },
];

const selectHotels = [
  {
    image: "/assets/hotels/hotel1.avif",
    badge: "Select",
    title: "Saltstayz Select, Noida 62",
    location: "Sector 62, Noida",
    rating: 4.4,
    tags: ["Breakfast", "10% F&B", "Rs250 Cashback"],
    amenities: ["parking", "gym", "wifi", "desk", "pool"] as const,
    price: 2975,
    oldPrice: 3500,
    discount: "15% off",
    offerText: "Get Beyond, and get 25% off (up to Rs1,000) on your booking",
  },
  {
    image: "/assets/hotels/hotel1.avif",
    badge: "Select",
    title: "Saltstayz Select, Ujjain",
    location: "Mahakal Lok, Ujjain",
    rating: 4.3,
    tags: ["Breakfast", "10% F&B", "Rs250 Cashback"],
    amenities: ["parking", "gym", "wifi", "desk", "pool"] as const,
    price: 2600,
    oldPrice: 3000,
    discount: "13% off",
    offerText: "Get Beyond, and get 25% off (up to Rs1,000) on your booking",
  },
  {
    image: "/assets/hotels/hotel2.avif",
    badge: "Select",
    title: "Saltstayz Select, Mohali",
    location: "Phase 7, Mohali",
    rating: 4.2,
    tags: ["Breakfast", "10% F&B", "Rs250 Cashback"],
    amenities: ["parking", "gym", "wifi", "desk", "pool"] as const,
    price: 2790,
    oldPrice: 3100,
    discount: "10% off",
    offerText: "Get Beyond, and get 25% off (up to Rs1,000) on your booking",
  },
  {
    image: "/assets/hotels/hotel2.avif",
    badge: "Select",
    title: "Saltstayz Select, Mohali",
    location: "Phase 7, Mohali",
    rating: 4.2,
    tags: ["Breakfast", "10% F&B", "Rs250 Cashback"],
    amenities: ["parking", "gym", "wifi", "desk", "pool"] as const,
    price: 2790,
    oldPrice: 3100,
    discount: "10% off",
    offerText: "Get Beyond, and get 25% off (up to Rs1,000) on your booking",
  },
  {
    image: "/assets/hotels/hotel2.avif",
    badge: "Select",
    title: "Saltstayz Select, Mohali",
    location: "Phase 7, Mohali",
    rating: 4.2,
    tags: ["Breakfast", "10% F&B", "Rs250 Cashback"],
    amenities: ["parking", "gym", "wifi", "desk", "pool"] as const,
    price: 2790,
    oldPrice: 3100,
    discount: "10% off",
    offerText: "Get Beyond, and get 25% off (up to Rs1,000) on your booking",
  },
  {
    image: "/assets/hotels/hotel2.avif",
    badge: "Select",
    title: "Saltstayz Select, Mohali",
    location: "Phase 7, Mohali",
    rating: 4.2,
    tags: ["Breakfast", "10% F&B", "Rs250 Cashback"],
    amenities: ["parking", "gym", "wifi", "desk", "pool"] as const,
    price: 2790,
    oldPrice: 3100,
    discount: "10% off",
    offerText: "Get Beyond, and get 25% off (up to Rs1,000) on your booking",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <div className="bg-primary-gradient">
        <HotelsForYouSection />

        <BestDealsSection />
      </div>

      <div className="bg-primary-gradient">
        <DestinationsForYou />

        <HotelCategorySection
          accent="Autograph"
          title="Hotels"
          seeAllCount={12}
          hotels={autographHotels}
        />
      </div>

      <div className="bg-primary-gradient">
        <HotelCategorySection
          accent="Premier"
          title="Hotels"
          seeAllCount={11}
          hotels={premierHotels}
          columns={3}
        />

        <HotelCategorySection
          accent="Select"
          title="Hotels"
          seeAllCount={8}
          hotels={selectHotels}
          columns={3}
        />
      </div>

      <BeyondRewards />

      <div className="bg-primary-gradient">
        <ExperiencesSection />

        <PressSection />
      </div>

      <InstagramSection />
    </>
  );
}
