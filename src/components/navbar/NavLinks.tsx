"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Categories", href: "/categories" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-6 font-heading ml-6">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`relative py-1 text-sm font-semibold transition-colors duration-200 group ${
              isActive
                ? "text-slate-800"
                : "text-slate-500"
            }`}
          >
            {link.name}
            <span
              className={`absolute bottom-0 left-0 h-[1.05px] rounded-full bg-blue-600 dark:bg-blue-500 transition-all duration-300 ease-out ${
                isActive ? "w-full" : "w-0 group-hover:w-full opacity-50"
              }`}
            />
          </Link>
        )
      })}
    </nav>
  );
}