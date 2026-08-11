import { ShoppingCart } from "lucide-react";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group ${className}`}>
      <div className="h-9 w-9 rounded-xl btn-gradient dark:bg-white text-white dark:text-black flex items-center justify-center font-extrabold text-xl shadow-sm group-hover:scale-105 transition-transform duration-200">
        <ShoppingCart size={20} />
      </div>
      <span className="font-heading text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-gradient">
        Nexus<span className="text-gradient-accent">Mart</span>
      </span>
    </Link>
  );
}