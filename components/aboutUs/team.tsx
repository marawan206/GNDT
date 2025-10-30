import React from "react";

export default function Team() {
  return (
    <section className="mx-auto px-[80px] py-[96px]">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl bg-[#F6F8FA] px-6 py-10 text-center sm:px-10">
          <h2 className="text-4xl font-bold tracking-tight text-[#1D2020]">
            Team
          </h2>
          <p className="mx-auto mt-4 max-w-5xl text-base leading-7 text-[#535862] sm:text-lg">
            Our team comprises experienced NDT engineers, certified inspectors
            and dedicated service technicians. Many have over 15 years’
            experience in ultrasonic testing (UT), radiographic testing (RT),
            positive material identification (PMI), phased array (PAUT) and
            advanced techniques like time‑of‑flight diffraction (TOFD). With
            multilingual staff and local experts in Saudi Arabia, we provide
            training, demonstration and support in Arabic and English.
          </p>
        </div>

        {/* Placeholder for future team cards */}
        <div className="mt-[48px] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" />
      </div>
    </section>
  );
}
