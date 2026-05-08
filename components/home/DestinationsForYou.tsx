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
    <section className="w-full pt-[56px] pb-[40px]">
      <div className="container-site px-[48px] flex flex-col gap-[28px]">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-brand text-[28px] font-bold uppercase leading-none text-black-primary md:text-[34px]">
            Destinations{" "}
            <span className="font-normal italic text-gold-primary">
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

        <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
          {destinations.map((destination) => (
            <Link
              key={destination.name}
              href={destination.href}
              className="group block"
              aria-label={`View hotels in ${destination.name}`}
            >
              <div
                className={`aspect-square rounded-[10px] bg-gradient-to-br ${destination.gradient} shadow-[0_12px_26px_rgba(48,51,38,0.16)] transition duration-200 group-hover:-translate-y-1 group-hover:shadow-[0_18px_34px_rgba(48,51,38,0.2)]`}
              />

              <p className="mt-3 text-center text-[15px] font-Calibri font-bold uppercase tracking-[0.2px] text-black-primary">
                {destination.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
