import Link from "next/link";

const destinations = [
  {
    name: "Jaipur",
    href: "/filtration?destination=jaipur",
    gradient: "from-[#d9a46c] via-[#b99439] to-[#81752c]",
  },
  {
    name: "Rishikesh",
    href: "/filtration?destination=rishikesh",
    gradient: "from-[#7ca36b] via-[#4c7c4d] to-[#2d5b34]",
  },
  {
    name: "Varanasi",
    href: "/filtration?destination=varanasi",
    gradient: "from-[#c9783f] via-[#975626] to-[#5f491b]",
  },
  {
    name: "Gurgaon",
    href: "/filtration?destination=gurgaon",
    gradient: "from-[#6e8799] via-[#3f6475] to-[#24464c]",
  },
  {
    name: "New Delhi",
    href: "/filtration?destination=new-delhi",
    gradient: "from-[#c39255] via-[#996331] to-[#5d461f]",
  },
  {
    name: "Bhopal",
    href: "/filtration?destination=bhopal",
    gradient: "from-[#8e9d77] via-[#667650] to-[#344d2d]",
  },
  {
    name: "Ujjain",
    href: "/filtration?destination=ujjain",
    gradient: "from-[#c2935d] via-[#9a6534] to-[#62521e]",
  },
  {
    name: "Bengaluru",
    href: "/filtration?destination=bengaluru",
    gradient: "from-[#79a074] via-[#477149] to-[#2d5a32]",
  },
  {
    name: "Chandigarh",
    href: "/filtration?destination=chandigarh",
    gradient: "from-[#a9967e] via-[#817458] to-[#4e552b]",
  },
  {
    name: "Noida",
    href: "/filtration?destination=noida",
    gradient: "from-[#8699a3] via-[#607682] to-[#2f4f4d]",
  },
];

export default function DestinationsForYou() {
  return (
    <section className="w-full pt-[40px] pb-[40px] md:pt-[56px]">
      <div className="container-site px-6 md:px-[48px] flex flex-col gap-6 md:gap-[28px]">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-brand text-[20px] font-bold uppercase leading-none text-[#1f241f] sm:text-[24px] md:text-[34px] whitespace-nowrap">
            Destinations{" "}
            <span className="font-normal italic text-[#a88830]">
              For You
            </span>
          </h2>

          <Link
            href="/filtration"
            className="shrink-0 text-[11px] font-bold text-primary transition hover:text-primary-dark"
          >
            See all 10 -&gt;
          </Link>
        </div>

        <div
          className="
    -mx-6
    flex
    snap-x
    gap-5
    overflow-x-auto
    px-6
    pb-4

    md:mx-0
    md:grid
    md:grid-cols-3
    md:overflow-visible
    md:px-0
    md:pb-0

    lg:grid-cols-5
    xl:grid-cols-6
  "
        >
          {destinations.map((destination) => (
            <Link
              key={destination.name}
              href={destination.href}
              className="group block min-w-[120px] snap-start"
              aria-label={`View hotels in ${destination.name}`}
            >
              <div
                className={`aspect-square rounded-[10px] bg-gradient-to-br ${destination.gradient} shadow-[0_12px_26px_rgba(48,51,38,0.16)] transition duration-200 group-hover:-translate-y-1 group-hover:shadow-[0_18px_34px_rgba(48,51,38,0.2)]`}
              />

              <p className="mt-3 text-center text-[11px] font-extrabold uppercase tracking-[0.2px] text-[#1f241f]">
                {destination.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
