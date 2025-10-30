import React from "react";

export default function Services() {
  return (
    <section className="mx-auto px-[80px] py-[96px]">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
          <h2 className="text-3xl font-bold tracking-tight text-[#1D2020] sm:text-4xl">
            Our Services
          </h2>
          <p className="text-base leading-7 text-[#535862] sm:text-lg">
            At GNDT, quality and safety are more than certifications—they&#39;re
            a commitment. We adhere to ISO 9001:2015 standards, and our
            engineers are certified to EN 4179 and NAS 410, ensuring compliance
            with ISO 9712 and AWS D1.5.
          </p>
        </div>

        <div className="mt-[48px]">
          {/* Image cards/animations will be added here later */}
        </div>
      </div>
    </section>
  );
}
