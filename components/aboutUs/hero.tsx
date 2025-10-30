import React from "react";
import Button from "@/components/button";

export default function AboutHero() {
  return (
    <section className="mx-auto px-[80px] py-[96px] text-center">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-[60px] font-black tracking-tight text-[#FFFFFF] sm:text-5xl md:text-6xl">
          About Us
        </h1>
        <p className="mx-auto mt-[16px] max-w-3xl text-base leading-7 text-[#F7F7F7] sm:text-[24px]">
          Stay informed about cutting-edge NDT equipment, software updates, and
          industry insights.
        </p>
        <div className="mt-[48px] flex justify-center">
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
