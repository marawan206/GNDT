import React from "react";
import Button from "@/components/button";

export default function Hero() {
  return (
    <section className="relative mx-auto px-[80px] py-[96px]">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-4xl font-black tracking-tight text-[#1D2020] sm:text-5xl md:text-6xl">
          Precision You Can Trust.
          <br />
          Innovation You Can Deploy.
        </h1>
        <p className="mx-auto mt-[16px] max-w-4xl text-base leading-7 text-[#535862] sm:text-lg">
          Discover cutting-edge non-destructive testing equipment, superior
          service, and an unwavering commitment to customer success.
        </p>
      </div>

      {/* Decorative animated glow behind the button */}
      <div className="pointer-events-none absolute left-1/2 top-[60%] -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-[#40E0CF] via-[#5C6AFB] to-[#3BBE83] opacity-30 blur-2xl animate-[float_6s_ease-in-out_infinite]" />

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
    </section>
  );
}
