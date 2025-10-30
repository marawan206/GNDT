import React from "react";
import Image from "next/image";

type PartnersProps = {
  logos?: string[]; // public paths to partner logo images
};

export default function Partners({ logos = [] }: PartnersProps) {
  // Duplicate the list to create a seamless marquee effect when animated later
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="mx-auto px-[80px] py-[96px]">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#1D2020] sm:text-4xl">
          Our Partners
        </h2>

        <div className="relative mt-[32px] overflow-hidden">
          {/* Fade edges for nicer marquee appearance */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-white to-transparent" />

          <div
            className="flex items-center gap-16 whitespace-nowrap will-change-transform animate-none"
            aria-label="Partner logos marquee"
          >
            {marqueeLogos.length > 0 ? (
              marqueeLogos.map((src, idx) => (
                <Image
                  key={`${src}-${idx}`}
                  src={src}
                  alt="Partner logo"
                  width={140}
                  height={48}
                />
              ))
            ) : (
              <div className="mx-auto w-full text-center text-sm text-[#535862]">
                {/* Logos will appear here once provided */}
              </div>
            )}
          </div>

          {/* Keyframes reserved for future scrolling animation */}
        </div>
      </div>
    </section>
  );
}
