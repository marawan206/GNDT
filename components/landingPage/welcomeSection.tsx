import React from "react";
import Video from "@/components/video";

export default function WelcomeSection() {
  return (
    <section className="mx-auto px-[80px] py-[96px]">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
          <h2 className="text-3xl font-bold tracking-tight text-[#181D27] sm:text-4xl">
            Welcome to GNDT
          </h2>
          <p className="text-base leading-7 text-[#5A6577] sm:text-lg">
            Global Non‑Destructive Testing (GNDT) is the Middle East’s trusted
            partner for advanced inspection solutions. For over two decades we
            have supplied authorised NDT equipment, calibration services and
            training to oil & gas, petrochemical, manufacturing and
            infrastructure clients across Saudi Arabia, the UAE and the wider
            GCC. We pride ourselves on pairing world‑class technology with local
            expertise to safeguard your operations.
          </p>
        </div>

        <div className="mt-[48px] overflow-hidden rounded-2xl">
          <Video src="/intro.mp4" poster="/Heading and supporting text.png" />
        </div>
      </div>
    </section>
  );
}
