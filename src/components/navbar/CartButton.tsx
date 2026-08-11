"use client";

import Link from "next/link";
import { Van } from "lucide-react";

export default function CartButton() {
  const cartItemCount = 3;

  return (
    <Link
      href="/cart"
      className="relative p-2.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-100 transition-colors duration-200 cursor-pointer"
      aria-label="View Cart"
    >
      <Van className="h-5 w-5" />
      {cartItemCount > 0 && (
        <span className="absolute -top-0.5 -right-0.5 h-5 w-5 rounded-full bg-primary text-white text-[11px] font-bold flex items-center justify-center shadow-sm">
          {cartItemCount}
        </span>
      )}
    </Link>
  );
}