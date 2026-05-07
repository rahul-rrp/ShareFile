import HeroSearchBar from "./HeroSearchBar";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <section
      className="
        relative
        w-full
        min-h-[480px]
        px-[26px]
        pt-8
        pb-9
        overflow-visible
        opacity-100
        md:h-[420px]
        md:min-h-[420px]
        md:px-12
        md:pt-[89.95px]
        md:pb-[97.95px]
      "
    >
      <div className="absolute inset-0 z-0">
        <HeroCarousel />
      </div>

      <div
        className="
          relative
          z-20
          w-full
          h-full
          max-w-[1280px]
          mx-auto
          flex
          flex-col
          justify-start
          md:justify-center
          md:pt-[50px]
        "
      >
        <h1
          className="
            max-w-[497px]
            font-brand
            text-white
            font-bold
            uppercase
            text-[46px]
            leading-[48px]
            tracking-[1.12px]
            drop-shadow-sm
            md:text-[56px]
            md:leading-[58.8px]
            md:whitespace-nowrap
          "
        >
          STAYS THAT
          <span className="hidden md:inline"> </span>
          <br className="md:hidden" />

          <span
            className="
              inline
              font-normal
              italic
              text-accent
            "
          >
            STAY
          </span>

          <br />

          WITH YOU
        </h1>

        <div className="mt-7 md:mt-10">
          <HeroSearchBar />
        </div>
      </div>
    </section>
  );
}
