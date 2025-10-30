import React from "react";
import Button from "@/components/button";

export default function PartnersHero() {
  return (
    <section className="mx-auto px-[80px] py-[96px] text-center">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-black tracking-tight text-[#1D2020] sm:text-5xl md:text-6xl">
          Our Partners in NDT
        </h1>
        <p className="mx-auto mt-[16px] max-w-3xl text-base leading-7 text-[#535862] sm:text-lg">
          GNDT partners with industry leaders to ensure that any job, project or
          scope is achievable by our clients.
        </p>
        <div className="mt-[40px] flex justify-center">
          <Button
            title="Request a Quote"
            size="md"
            backgroundColor="#FFFFFF"
            textColor="#181D27"
            borderRadius="9999px"
            className="border border-gray-300 shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
