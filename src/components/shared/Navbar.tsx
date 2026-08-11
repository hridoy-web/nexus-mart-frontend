import Logo from "@/components/logo/Logo";
import NavLinks from "@/components/navbar/NavLinks";
import SearchBar from "@/components/navbar/SearchBar";
import CartButton from "@/components/navbar/CartButton";
import UserMenu from "@/components/navbar/UserMenu";
import MobileNav from "@/components/navbar/MobileNav";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2">
          
          {/* Left: Brand Logo */}
          <Logo />

          {/* Center: Desktop Nav Links */}
          <NavLinks />

          {/* Desktop Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-xs md:max-w-sm ml-auto">
            <SearchBar />
          </div>

          {/* Right Action Menu */}
          <div className="flex items-center gap-2 sm:gap-3 ml-auto md:ml-0">
            <CartButton />
            <UserMenu />
            
            <MobileNav />
          </div>

        </div>
      </div>
    </header>
  );
}