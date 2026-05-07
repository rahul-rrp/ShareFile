"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Search,
  ChevronDown,
  MapPin,
  Building,
  Menu,
  X,
} from "lucide-react";
import Logo from "./Logo";

const destinations = [
  { name: "Delhi", hotels: 8 },
  { name: "Gurgaon", hotels: 12 },
  { name: "Noida", hotels: 5 },
  { name: "Jaipur", hotels: 4 },
  { name: "Rishikesh", hotels: 3 },
  { name: "Varanasi", hotels: 2 },
  { name: "Bhopal", hotels: 3 },
  { name: "Ujjain", hotels: 2 },
  { name: "Bengaluru", hotels: 6 },
  { name: "Chandigarh", hotels: 4 },
];

const categories = [
  {
    name: "Saltstayz Autograph",
    description: "Luxury premium stays",
    count: 6,
  },
  {
    name: "Saltstayz Premier",
    description: "Business-class comfort",
    count: 10,
  },
  {
    name: "Saltstayz Select",
    description: "Smart value stays",
    count: 14,
  },
  {
    name: "Saltstayz Econotel",
    description: "Budget-friendly rooms",
    count: 8,
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="
    w-full
    h-[140px]
    md:h-[79px]
    border-b
    border-borderLight
    bg-background
    sticky
    top-0
    z-50
    opacity-100
  "
      >
        {/* CONTAINER */}
        <div
          className="
      h-full
      flex
      items-center
      justify-between
      px-6
      py-0
      md:px-12
      md:py-[18px]
    "
        >
          {/* LEFT SECTION */}
          <div className="flex items-center gap-12">
            {/* LOGO */}
            <Logo />

            {/* DESKTOP NAVIGATION */}
            <div className="hidden md:flex items-center gap-8 text-[14px] font-bold leading-[21px] tracking-[0.14px]">

              <Link
                href="/"
                className="text-primary transition-colors"
              >
                Home
              </Link>

              <Link
                href="/beyond"
                className="text-dark hover:text-primary transition-colors"
              >
                Beyond
              </Link>

              {/* DESTINATIONS */}
              <div className="relative group">

                <button className="flex items-center text-dark hover:text-primary transition-colors">
                  Destinations
                  <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                {/* DROPDOWN */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

                  <div className="w-[480px] bg-white rounded-3xl p-6 shadow-2xl border border-gray-100">

                    <p className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-4">
                      Popular Destinations
                    </p>

                    <div className="grid grid-cols-2 gap-2">

                      {destinations.map((d) => (
                        <Link
                          key={d.name}
                          href={`/destinations/${d.name.toLowerCase()}`}
                          className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors"
                        >

                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                            <span className="text-sm font-semibold text-dark">
                              {d.name}
                            </span>
                          </div>

                          <span className="text-[11px] bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                            {d.hotels}
                          </span>
                        </Link>
                      ))}

                    </div>
                  </div>
                </div>
              </div>

              {/* CATEGORIES */}
              <div className="relative group">

                <button className="flex items-center text-dark hover:text-primary transition-colors">
                  Categories
                  <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                {/* DROPDOWN */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

                  <div className="w-[400px] bg-white rounded-3xl p-6 shadow-2xl border border-gray-100">

                    <p className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-4">
                      Hotel Categories
                    </p>

                    <div className="flex flex-col gap-2">

                      {categories.map((c) => (
                        <Link
                          key={c.name}
                          href={`/categories/${c.name.toLowerCase().replace(/\s+/g, "-")}`}
                          className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors"
                        >

                          <div className="flex items-center">

                            <Building className="w-4 h-4 mr-3 text-gray-400" />

                            <div className="flex flex-col">
                              <span className="text-sm font-semibold text-dark">
                                {c.name}
                              </span>

                              <span className="text-xs text-gray-400">
                                {c.description}
                              </span>
                            </div>
                          </div>

                          <span className="text-[11px] bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                            {c.count}
                          </span>
                        </Link>
                      ))}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-8 md:gap-4">

            <button className="flex text-dark hover:text-primary transition-colors" aria-label="Search">
              <Search className="w-10 h-10 md:w-5 md:h-5" strokeWidth={2.2} />
            </button>

            <button className="hidden md:flex bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:opacity-90 transition">
              Sign In
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden text-dark"
              aria-label="Open menu"
            >
              <Menu className="w-10 h-10" strokeWidth={2.2} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">

          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* DRAWER */}
          <div className="absolute top-0 right-0 w-[85%] max-w-sm h-full bg-white shadow-2xl flex flex-col">

            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">

              <Link
                href="/"
                className="font-brand text-[24px] uppercase font-bold"
              >
                <span className="text-primary">SALT</span>
                <span className="text-primary italic">STAYZ</span>
              </Link>

              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6 text-dark" />
              </button>
            </div>

            {/* BODY */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-3">

              <Link href="/" className="block font-bold text-primary">
                Home
              </Link>

              <Link href="/beyond" className="block font-bold text-dark">
                Beyond
              </Link>

              <div className="border-t border-gray-100 pt-3">
                <button
                  onClick={() => setDestOpen((open) => !open)}
                  className="flex w-full items-center justify-between py-2 font-bold text-dark"
                >
                  Destinations
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${destOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {destOpen && (
                  <div className="grid grid-cols-2 gap-2 pb-2">
                    {destinations.map((destination) => (
                      <Link
                        key={destination.name}
                        href={`/destinations/${destination.name.toLowerCase()}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2 rounded-xl bg-gray-50 px-3 py-3 text-sm font-semibold text-gray-800"
                      >
                        <MapPin className="w-4 h-4 text-gray-400" />
                        {destination.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t border-gray-100 pt-3">
                <button
                  onClick={() => setCatOpen((open) => !open)}
                  className="flex w-full items-center justify-between py-2 font-bold text-dark"
                >
                  Categories
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${catOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {catOpen && (
                  <div className="space-y-2 pb-2">
                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        href={`/categories/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 rounded-xl bg-gray-50 px-3 py-3"
                      >
                        <Building className="w-4 h-4 text-gray-400" />
                        <span className="flex flex-col">
                          <span className="text-sm font-semibold text-gray-800">
                            {category.name}
                          </span>
                          <span className="text-xs text-gray-400">
                            {category.description}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white">
                <Search className="w-4 h-4" />
                Search
              </button>

              <button className="flex w-full items-center justify-center rounded-xl border border-primary px-5 py-3 text-sm font-bold text-primary">
                Sign In
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
