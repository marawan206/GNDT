import React from "react";
import { navLinks } from "./navbar";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    href: "https://www.instagram.com/gndt.id/",
    icon: "/instagram.svg",
  },
  {
    href: "https://www.linkedin.com/company/gndt-id/",
    icon: "/linkdln.svg",
  },
  {
    href: "https://x.com/gndt_id",
    icon: "/xIcon.svg",
  },
];

function footer() {
  return (
    <footer>
      <div className="mx-auto px-[80px] py-[64px] bg-[#1D2020]">
        <div className="flex items-center gap-3 px-3">
          <div className="flex items-center gap-3 ">
            <Image
              src="/icons/whiteGNDT.svg"
              alt="GNDT logo"
              width={125}
              height={100}
              priority
            />
           
           
          </div>

          <nav className="hidden items-center gap-[24px] md:flex justify-self-center pl-[32px]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:opacity-80 text-[#FFFFFF]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex justify-end gap-[24px] ml-auto">
            {socialLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Image src={link.icon} alt={link.href} width={24} height={24} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
