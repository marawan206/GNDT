import React from "react";

export default function WhoWeAre() {
  return (
    <section className="mx-auto px-[80px] py-[96px]">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-2xl">
          <video
            className="h-auto w-full"
            controls
            playsInline
            poster="/Heading and supporting text.png"
          >
            <source src="/about-intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="mt-[32px] grid grid-cols-1 items-start gap-6 md:grid-cols-2">
          <h2 className="text-[40px] font-bold tracking-tight text-[#1D2020]">
            Who we are
          </h2>
          <p className="text-base leading-7 text-[#535862] sm:text-[16px]">
            GNDT is a high-performance provider of non-destructive testing (NDT)
            technologies, supporting critical sectors across the Gulf
            Cooperation Council (GCC), including oil and gas, energy, aviation,
            pre-fabrication, manufacturing, mining and national research
            institutions.
          </p>
        </div>
      </div>
    </section>
  );
}
