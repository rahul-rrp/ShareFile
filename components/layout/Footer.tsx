import Link from "next/link";
import { Globe, MessageCircle, Share2, Video } from "lucide-react";

export default function Footer() {
  const cities = [
    "Delhi", "Gurgaon", "Noida",
    "Jaipur", "Rishikesh", "Varanasi",
    "Bhopal", "Ujjain", "Bengaluru",
    "Chandigarh"
  ];

  const brands = ["Saltstayz Autograph", "Saltstayz Premier", "Saltstayz Select"];
  const beyondLinks = ["How it works", "Tier benefits", "Member sign-in"];
  const helpLinks = ["Manage booking", "Cancellation policy", "Contact us", "Press & media", "Careers"];

  return (
    <footer className="w-full bg-primary text-white pt-16 pb-8">
      <div className="container-site px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

        {/* Brand Column */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center mb-4 uppercase" style={{ fontFamily: 'var(--font-brand)', fontWeight: 700, fontSize: '24px', lineHeight: '36px', letterSpacing: '0.48px' }}>
            <span className="text-white">SALT</span>
            <span className="italic text-accent">STAYZ</span>
          </Link>
          <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
            Premium boutique hotels across India's finest destinations. Curated for modern travellers.
          </p>
        </div>

        {/* Cities Column */}
        <div className="lg:col-span-1">
          <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-6">Cities We're In</h4>
          <div className="flex flex-wrap gap-3">
            {cities.map((city) => (
              <button
                key={city}
                className="px-4 py-2 rounded-full border border-white/20 text-xs text-gray-200 hover:bg-white/10 transition-colors"
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Brands Column */}
        <div className="lg:col-span-1">
          <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-6">Brands</h4>
          <ul className="space-y-4">
            {brands.map((brand) => (
              <li key={brand}>
                <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  {brand}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Beyond Column */}
        <div className="lg:col-span-1">
          <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-6">Beyond</h4>
          <ul className="space-y-4">
            {beyondLinks.map((link) => (
              <li key={link}>
                <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help Column */}
        <div className="lg:col-span-1">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#E5CD75] mb-6">Help</h4>
          <ul className="space-y-4">
            {helpLinks.map((link) => (
              <li key={link}>
                <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        <div className="flex flex-col space-y-4 items-center md:items-start">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E5CD75]">Follow</span>
          <div className="flex items-center space-x-4">
            <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Globe className="w-4 h-4 text-gray-300" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <MessageCircle className="w-4 h-4 text-gray-300" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Share2 className="w-4 h-4 text-gray-300" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Video className="w-4 h-4 text-gray-300" />
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="container-site px-6 md:px-12 mt-5 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-6">

        {/* Legal */}
        <div className="flex flex-col items-center gap-4 text-xs text-gray-400">

          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy
            </Link>

            <span>·</span>

            <Link href="#" className="hover:text-white transition-colors">
              Terms
            </Link>

            <span>·</span>

            <Link href="#" className="hover:text-white transition-colors">
              Cookies
            </Link>

            <span>·</span>

            <Link href="#" className="hover:text-white transition-colors">
              Refund Policy
            </Link>
          </div>

          <p>© 2026 Saltstayz Hospitality Pvt. Ltd.</p>
        </div>
      </div>
    </footer>
  );
}
