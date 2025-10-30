import React from "react";
import Image from "next/image";

export default function Certificates() {
  return (
    <section className="mx-auto px-[80px] py-[96px]">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
          <h2 className="text-3xl font-bold tracking-tight text-[#1D2020] sm:text-4xl">
            Certifications & Accreditations
          </h2>
          <p className="text-base leading-7 text-[#535862] sm:text-lg">
            Quality and safety underpin everything we do. GNDT holds ISO
            9001:2015 certification for our management system. Our engineers are
            certified to ASNT and PCN standards, ensuring compliance with
            international codes such as ISO 9712 and AWS D1.1. We are also
            authorised service centres for Sonatest flaw detectors, SciAps XRF
            and OES analyzers, and Teledyne portable x‑ray systems. This
            accreditation allows us to deliver genuine calibration, repairs and
            traceability to standards such as EN 17025.
          </p>
        </div>

        <div className="mt-[48px] grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded-2xl bg-[#FAFAFA] p-8 md:p-10 flex h-48 items-center justify-center">
            <Image
              src="/certificates/ISO.svg"
              alt="ISO 9001:2015"
              width={136}
              height={124}
            />
          </div>
          <div className="rounded-2xl bg-[#FAFAFA] p-8 md:p-10 flex h-48 items-center justify-center">
            <Image
              src="/certificates/ASNT.svg"
              alt="ASNT"
              width={136}
              height={124}
            />
          </div>
          <div className="rounded-2xl bg-[#FAFAFA] p-8 md:p-10 flex h-48 items-center justify-center">
            <Image
              src="/certificates/PCN.svg"
              alt="PCN"
              width={136}
              height={124}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
