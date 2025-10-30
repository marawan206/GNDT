import React from "react";
import Image from "next/image";
import Button from "@/components/button";

const items = [
  {
    logo: "/sonatest.svg",
    title: "Sonatest",
    description:
      "Specializes in non-destructive testing solutions, including ultrasonic flaw detectors, phased array systems, and thickness gauges. Serves industries such as aerospace, oil and gas, and manufacturing.",
  },
  {
    logo: "/TICM.svg",
    title: "Teledyne ICM",
    description:
      "Develops and manufactures portable X-ray generators and digital X-ray scanners for non-destructive testing (NDT) and security applications.",
  },
  {
    logo: "/sciAps.svg",
    title: "Sci Aps",
    description:
      "Specializes in portable analytical instruments, including handheld LIBS and XRF analyzers, used in industries like scrap metal recycling, geochemistry, and environmental analysis.",
  },
  {
    logo: "/logo-gammatec.svg",
    title: "GammaTec",
    description:
      "Specializes in non-destructive testing solutions, including ultrasonic flaw detectors, phased array systems, and thickness gauges. Serves industries such as aerospace, oil and gas, and manufacturing.",
  },
];

export default function PartnersGrid() {
  return (
    <section className="w-full py-[96px]">
      <div className="mx-auto max-w-6xl px-[80px] grid grid-cols-1 gap-16 md:grid-cols-2">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col gap-3">
            <div className="relative flex items-center justify-center">
              <Image
                src={item.logo}
                alt={item.title}
                height={141}
                width={198}
                className="object-contain"
              />
            </div>
            <h3 className="mt-1 text-2xl font-semibold text-[#1D2020]">
              {item.title}
            </h3>
            <p className="text-[#535862] leading-7">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-[150px] max-w-7xl px-[80px] text-center">
        <p className="text-[36px] leading-10 text-[#1D2020]">
          By partnering with these OEMs, we ensure our clients receive genuine
          products backed by manufacturer warranties, training and after-sales
          support.
        </p>
        <div className="mt-[32px] flex justify-center">
          <Button
            title="Get a Quote"
            size="md"
            backgroundColor="#6b30ff"
            textColor="#FFFFFF"
            borderRadius="9999px"
          />
        </div>
      </div>
    </section>
  );
}
