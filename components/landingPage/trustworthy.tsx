import React from "react";

export default function Trustworthy() {
  return (
    <section className="mx-auto px-[80px] py-[96px]">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1D2020] sm:text-4xl">
            Trustworthy & Reliable
          </h2>
          <p className="mx-auto mt-[24px] max-w-6xl text-sm leading-6 text-[#535862] sm:text-base">
            At GNDT Experience peace of mind with GNDT&apos;s proven track
            record of reliability and unwavering trustworthiness. We are your
            steadfast partner in NDT solutions.
          </p>
        </div>

        <div className="mt-[48px] flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-0">
          <Stat number="130+" label="Completed Projects" />
          <Divider />
          <Stat number="100%" label="Client Satisfaction" />
          <Divider />
          <Stat number="24+" label="Ongoing Projects" />
          <Divider />
          <Stat number="90+" label="Government Projects" />
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-extrabold tracking-tight text-[#6b30ff] sm:text-5xl">
        {number}
      </div>
      <div className="mt-2 text-sm font-medium text-[#1D2020] sm:text-base">
        {label}
      </div>
    </div>
  );
}

function Divider() {
  return <div className="hidden h-12 w-px bg-[#E5E7EB] md:block" />;
}
