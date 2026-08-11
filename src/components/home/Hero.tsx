import Link from "next/link";
import { ArrowRight, ShoppingBag, ShieldCheck, Zap, Truck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-24">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-semibold font-heading">
              <Zap className="h-3.5 w-3.5 fill-current" />
              <span>Next-Gen Shopping Experience</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
              Discover Premium Tech & Gadgets for Your{" "}
              <span className="text-gradient-accent">Digital Life</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-sans max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Explore the latest high-performance electronics, gaming accessories, and daily essentials backed by instant delivery and top-tier support.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 font-heading">
              <Link
                href="/products"
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl btn-gradient flex items-center justify-center gap-2 font-bold text-sm shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group"
              >
                <span>Shop Catalog</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/categories"
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold text-sm border border-zinc-200/80 dark:border-zinc-700/80 transition-colors duration-200 text-center"
              >
                Browse Categories
              </Link>
            </div>

            {/* Features Bar */}
            <div className="pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 grid grid-cols-3 gap-4 font-heading text-left">
              <div className="flex items-center gap-2.5">
                <Truck className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100">Fast Shipping</h4>
                  <p className="text-[11px] text-zinc-500 hidden sm:block">Across nationwide</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100">Secure Payment</h4>
                  <p className="text-[11px] text-zinc-500 hidden sm:block">100% protected</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <ShoppingBag className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100">Authentic Goods</h4>
                  <p className="text-[11px] text-zinc-500 hidden sm:block">Verified suppliers</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Banner / Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-6 sm:p-8 glass-card border border-zinc-200 dark:border-zinc-800 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-heading">
                  Featured Product
                </span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                  In Stock
                </span>
              </div>

              {/* Product Visual Container */}
              <div className="h-60 sm:h-72 w-full bg-linear-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors duration-300" />
                <ShoppingBag className="h-20 w-20 text-zinc-400 dark:text-zinc-600 group-hover:scale-110 transition-transform duration-300 stroke-[1.5]" />
              </div>

              {/* Info Details */}
              <div className="space-y-2 font-heading">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  Wireless Noise-Canceling Headphones
                </h3>
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="text-2xl font-black text-zinc-900 dark:text-white">$299.00</span>
                    <span className="text-xs text-zinc-400 line-through ml-2">$349.00</span>
                  </div>
                  <Link
                    href="/products/featured"
                    className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}