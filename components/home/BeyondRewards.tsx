"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Crown,
  Gift,
  Home,
  ShieldCheck,
  Sparkles,
  Timer,
} from "lucide-react";

const tiers = [
  {
    id: "check",
    eyebrow: "Welcome Offer",
    name: "Beyond Check",
    chip: "Entry",
    unlocked: "Free to join",
    percent: "25%",
    headline: "25% off your first stay",
    description:
      "Up to Rs1,000 off the moment you sign in. Joining takes a minute, benefits start immediately, and never expire.",
    panel: "#2f542b",
    panelEnd: "#466f31",
    accent: "#f5de8e",
    card: "#d9f4dd",
    cardBorder: "#b6e4bd",
    text: "#133319",
    perks: [
      "Up to 6% cashback",
      "Free breakfast",
      "Room upgrades",
      "Lifelong status",
    ],
    cardPerks: [
      "3% cashback every stay",
      "7% off your next 2 bookings",
      "Birthday week perks",
    ],
  },
  {
    id: "hype",
    eyebrow: "Rising Tier",
    name: "Beyond Hype",
    chip: "Rising",
    unlocked: "Unlocked at 4 stays",
    percent: "10%",
    headline: "10% off every booking",
    description:
      "Designed for regular city stays with richer cashback, better food offers, and a yearly upgrade benefit.",
    panel: "#9b4f2f",
    panelEnd: "#d9824f",
    accent: "#ffe2bd",
    card: "#ffdac4",
    cardBorder: "#f0b18b",
    text: "#642d18",
    perks: [
      "4% cashback every stay",
      "Free breakfast for every guest",
      "1 free upgrade a year",
      "Priority hotel support",
    ],
    cardPerks: [
      "4% cashback every stay",
      "Free breakfast, every guest",
      "1 free upgrade a year",
    ],
  },
  {
    id: "cult",
    eyebrow: "Loved Tier",
    name: "Beyond Cult",
    chip: "Loved",
    unlocked: "Unlocked at 7 stays",
    percent: "12%",
    headline: "12% off every booking",
    description:
      "Built for frequent travellers who want flexible stays, food savings, and upgrade requests with every trip.",
    panel: "#c09728",
    panelEnd: "#ead06b",
    accent: "#fff5bd",
    card: "#fff4c9",
    cardBorder: "#e3c95a",
    text: "#5e4916",
    perks: [
      "5% cashback every stay",
      "Free breakfast plus 2 upgrades yearly",
      "Late checkout on request",
      "Room preference saved",
    ],
    cardPerks: [
      "5% cashback every stay",
      "Free breakfast + 2 upgrades / yr",
      "Late checkout, on request",
    ],
  },
  {
    id: "goat",
    eyebrow: "Apex Loyalty",
    name: "Beyond Goat",
    chip: "Apex",
    unlocked: "Unlocked at 14 stays",
    percent: "15%",
    headline: "15% off every booking",
    description:
      "Our highest loyalty tier, with dedicated concierge help, the strongest cashback, and priority upgrades.",
    panel: "#244b22",
    panelEnd: "#698832",
    accent: "#e7cb62",
    card: "#335d28",
    cardBorder: "#c9a943",
    text: "#ffffff",
    perks: [
      "6% cashback every stay",
      "4 upgrades a year, lifelong",
      "Dedicated concierge line",
      "Early access to new hotels",
    ],
    cardPerks: [
      "6% cashback every stay",
      "4 upgrades a year, lifelong",
      "Dedicated concierge line",
    ],
  },
] as const;

export default function BeyondRewards() {
  const [activeId, setActiveId] = useState<(typeof tiers)[number]["id"]>("check");
  const active = tiers.find((tier) => tier.id === activeId) ?? tiers[0];

  return (
    <section className="w-full bg-primary-gradient pt-[56px] pb-[40px]">
      <div className="container-site px-[48px] flex flex-col gap-[28px]">
        <div className="mb-8">
          <h2 className="font-brand text-[34px] font-bold uppercase leading-[38px] text-[#1f241f] md:text-[42px] md:leading-[46px]">
            Every stay takes you
            <br />
            <span className="font-normal italic text-[#b08a28]">
              Beyond
            </span>{" "}
            the ordinary.
          </h2>
          <p className="mt-3 max-w-[520px] text-[13px] leading-5 text-[#6d7168]">
            A quieter kind of loyalty: cashback on every direct stay, free
            breakfast and room upgrades as you climb, and a hotelier who knows
            your name.
          </p>
        </div>

        <div
          className="overflow-hidden rounded-[14px] px-7 py-8 text-white shadow-[0_18px_44px_rgba(31,45,27,0.18)] md:px-12 md:py-12"
          style={{
            background: `linear-gradient(120deg, ${active.panel}, ${active.panelEnd})`,
          }}
        >
          <div className="grid gap-8 md:grid-cols-[1.25fr_0.9fr] md:items-center">
            <div>
              <p
                className="text-[9px] font-extrabold uppercase tracking-[3px]"
                style={{ color: active.accent }}
              >
                {active.eyebrow}
              </p>
              <h3 className="mt-10 font-brand text-[34px] font-bold uppercase leading-[36px] md:text-[48px] md:leading-[48px]">
                <span style={{ color: active.accent }}>{active.percent}</span>{" "}
                {active.headline.replace(`${active.percent} `, "")}
              </h3>
              <p className="mt-8 max-w-[430px] text-[12px] leading-5 text-white/82">
                {active.description}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/guest"
                  className="inline-flex items-center gap-2 rounded-[6px] px-5 py-3 text-[11px] font-bold text-[#234120] transition hover:opacity-90"
                  style={{ backgroundColor: active.accent }}
                >
                  Join Beyond - Free
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/guest"
                  className="inline-flex items-center rounded-[6px] border border-white/24 px-5 py-3 text-[11px] font-bold text-white/90 transition hover:bg-white/10"
                >
                  Already a Member? Sign In
                </Link>
              </div>
            </div>

            <div className="rounded-[10px] border border-white/16 bg-white/10 p-6 backdrop-blur">
              {active.perks.map((perk, index) => (
                <div
                  key={perk}
                  className="flex gap-4 border-b border-white/10 py-4 first:pt-0 last:border-b-0 last:pb-0"
                >
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: `${active.accent}33` }}
                  >
                    {index === 0 ? (
                      <Timer className="h-4 w-4" style={{ color: active.accent }} />
                    ) : index === 1 ? (
                      <Check className="h-4 w-4" style={{ color: active.accent }} />
                    ) : index === 2 ? (
                      <Home className="h-4 w-4" style={{ color: active.accent }} />
                    ) : (
                      <ShieldCheck className="h-4 w-4" style={{ color: active.accent }} />
                    )}
                  </span>
                  <div>
                    <p className="text-[13px] font-extrabold uppercase leading-none">
                      {perk}
                    </p>
                    <p className="mt-1 text-[10px] text-white/65">
                      {index === 0
                        ? "On every direct stay, redeemable at hotel"
                        : index === 1
                          ? "From Silver onwards, all guests"
                          : index === 2
                            ? "1 to 4 free upgrades a year, by tier"
                            : "Reach Platinum and stay there forever"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="font-brand text-[20px] font-bold uppercase text-[#1f241f] md:text-[24px]">
            The more you stay, the more you{" "}
            <span className="font-normal italic text-[#b08a28]">save</span>
          </h3>

          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {tiers.map((tier) => {
              const selected = active.id === tier.id;

              return (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setActiveId(tier.id)}
                  className="min-h-[190px] rounded-[8px] border p-5 text-left shadow-[0_10px_24px_rgba(47,58,40,0.08)] transition hover:-translate-y-1"
                  style={{
                    backgroundColor: tier.card,
                    borderColor: selected ? tier.panel : tier.cardBorder,
                    color: tier.text,
                    boxShadow: selected
                      ? `0 16px 34px ${tier.panel}33`
                      : "0 10px 24px rgba(47,58,40,0.08)",
                  }}
                  aria-pressed={selected}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="font-brand text-[22px] font-bold uppercase leading-[22px]">
                      {tier.name}
                    </h4>
                    <span className="rounded-full bg-white/45 px-2 py-1 text-[8px] font-bold uppercase text-[#39552b]">
                      {tier.chip}
                    </span>
                  </div>
                  <p className="mt-1 text-[9px] font-semibold opacity-70">
                    {tier.unlocked}
                  </p>
                  <p className="mt-4 font-brand text-[34px] font-bold leading-none">
                    {tier.percent}
                  </p>
                  <p className="text-[10px] font-semibold opacity-75">
                    off every booking
                  </p>
                  <div className="mt-4 space-y-2 border-t border-current/12 pt-4">
                    {tier.cardPerks.map((perk) => (
                      <p key={perk} className="flex items-center gap-2 text-[10px] font-semibold">
                        {tier.id === "goat" ? (
                          <Crown className="h-3 w-3 shrink-0" />
                        ) : tier.id === "cult" ? (
                          <Sparkles className="h-3 w-3 shrink-0" />
                        ) : tier.id === "hype" ? (
                          <Gift className="h-3 w-3 shrink-0" />
                        ) : (
                          <Check className="h-3 w-3 shrink-0" />
                        )}
                        {perk}
                      </p>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          <p className="mt-5 text-center text-[10px] font-bold uppercase italic text-[#5a604f]">
            Already on the journey?{" "}
            <Link href="/guest" className="text-primary hover:text-primary-dark">
              Sign in -&gt;
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
