import Link from "next/link";
import Image from "next/image";

export const navLinks = [
  {
    href: "/about-us",
    label: "About Us",
  },
  {
    href: "/partners",
    label: "Partners",
  },
  {
    href: "/products",
    label: "Products",
  },
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/blogs",
    label: "Blogs",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export default function Navbar() {
  
  return (
    <header>
      <div className="mx-auto px-[80px] py-[16px]">
        <div className="flex items-center justify-between rounded-full border border-gray-200 px-6 py-3 shadow-sm bg-[#FFFFFF]">
          <Link
            href="/"
            className="flex items-center gap-3 px-3"
            aria-label="Go to home"
          >
            <Image
              src="/icons/logoIcon.svg"
              alt="GNDT logo"
              width={40}
              height={40}
              priority
            />
            <div className="leading-tight">
              <Image
                src="/icons/titleIcon.svg"
                alt="GNDT title"
                width={100}
                height={100}
                priority
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex justify-self-center mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:opacity-80 text-[#181D27]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center justify-end">
            <button
              className="flex items-center gap-2 text-[#181D27] hover:opacity-80"
              aria-label="Change language"
            >
              <span>English</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M5 7l5 5 5-5"
                  stroke="#181D27"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
