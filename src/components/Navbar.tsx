"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import NestedNav from "./NestedNav";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

type NavItem = {
  name: string;
  path: string;
};

export type MegaNavData = {
  collumn_1: NavItem[];
  collumn_2: NavItem[];
  collumn_3: NavItem[];
  photo: string;
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // mobile dropdrown
  const [mobileMega, setMobileMega] = useState(false);
  const [mobileLadies, setMobileLadies] = useState(false);
  const [mobileKids, setMobileKids] = useState(false);

  const [megaOpen, setMegaOpen] = useState(false);
  const [opentLadiesCollection, setOpenLadiesCollection] = useState(false);
  const [opentKidsCollection, setOpenKidsCollection] = useState(false);

  // separate timeout refs (FIX)
  const menTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const ladiesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const kidsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // men's
  const handleEnter = () => {
    if (menTimeoutRef.current) clearTimeout(menTimeoutRef.current);
    setMegaOpen(true);
  };

  const handleLeave = () => {
    menTimeoutRef.current = setTimeout(() => {
      setMegaOpen(false);
    }, 150);
  };

  // Ladies hover
  const ladiesEnter = () => {
    if (ladiesTimeoutRef.current) clearTimeout(ladiesTimeoutRef.current);
    setOpenLadiesCollection(true);
  };

  const ladiesLeave = () => {
    ladiesTimeoutRef.current = setTimeout(() => {
      setOpenLadiesCollection(false);
    }, 150);
  };

  // kids hover
  const kidsEnter = () => {
    if (kidsTimeoutRef.current) clearTimeout(kidsTimeoutRef.current);
    setOpenKidsCollection(true);
  };

  const kidsLeave = () => {
    kidsTimeoutRef.current = setTimeout(() => {
      setOpenKidsCollection(false);
    }, 150);
  };

  const handleMobileClose = () => {
    setTimeout(()=> {
      setOpen(false);
    }, 1000)
  }

  // data
  const manData: MegaNavData = {
    collumn_1: [
      { name: "Men’s Suit", path: "/menSuit" },
      { name: "Men’s Uniform", path: "/menUniform" },
      { name: "Men’s polo shirt", path: "/menPoloShirt" },
      { name: "Men’s hoodie", path: "/menHoodie" },
      { name: "Men’s cap", path: "/menCap" },
    ],

    collumn_2: [
      { name: "Men’s pant", path: "/menPant" },
      { name: "Men’s workwear", path: "/menWorkwear" },
      { name: "Men’s tank top", path: "/MenTankTop" },
      { name: "Men’s sweat shirt", path: "/menSweatShirt" },
      { name: "Men’ underwear", path: "/menUnderwear" },
    ],

    collumn_3: [
      { name: "Men’s shirt", path: "/menShirt" },
      { name: "Men’s t-shirt", path: "/menT-shirt" },
      { name: "Men’s sweater", path: "/menSweater" },
      { name: "Men’s socks", path: "/menSocks" },
    ],

    photo:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop",
  };

  const ladiesData: MegaNavData = {
    collumn_1: [
      { name: "Ladies Suit", path: "/ladiesSuit" },
      { name: "Ladies Uniform", path: "/ladiesUniform" },
      { name: "Ladies blouse", path: "/ladiesBlouse" },
      { name: "Ladies tank top", path: "/ladiesTankTop" },
      { name: "Ladies sweat shirt", path: "/ladiesSweatShirt" },
      { name: "Ladies sleepwear", path: "/ladiesSleepwear" },
      { name: "Ladies cap", path: "/ladiesCap" },
    ],

    collumn_2: [
      { name: "Ladies pant", path: "/ladiesPant" },
      { name: "Ladies workwear", path: "/ladiesWorkwear" },
      { name: "Ladies t-shirt", path: "/ladiesTShirt" },
      { name: "Ladies sweater", path: "/ladiesSweater" },
      { name: "Ladies pyjama", path: "/ladiesPyjama" },
      { name: "Ladies shorts", path: "/ladiesShorts" },
      { name: "Ladies panty", path: "/ladiesPanty" },
    ],

    collumn_3: [
      { name: "Ladies shirt", path: "/ladiesShirt" },
      { name: "Ladies outerwear", path: "/ladiesOuterwear" },
      { name: "Ladies polo shirt", path: "/ladiesPoloShirt" },
      { name: "Ladies hoodie", path: "/ladiesHoodie" },
      { name: "Ladies dress", path: "/ladiesDress" },
      { name: "Ladies socks", path: "/ladiesSocks" },
      { name: "Ladies bra", path: "/ladiesBra" },
    ],

    photo:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop",
  };

  const kidsData: MegaNavData = {
    collumn_1: [
      { name: "Boy’s T-Shirt", path: "/boysTShirt" },
      { name: "Girl’s T-Shirt", path: "/girlsTShirt" },
      { name: "Boy’s Pant", path: "/boysPant" },
      { name: "Girl’s Pant", path: "/girlsPant" },
      { name: "Boy’s Polo Shirt", path: "/boysPoloShirt" },
    ],

    collumn_2: [
      { name: "Boy’s Sweat Shirt", path: "/boysSweatShirt" },
      { name: "Girl’s Sweat Shirt", path: "/girlsSweatShirt" },
      { name: "Boy’s Hoodie", path: "/boysHoodie" },
      { name: "Girl’s Hoodie", path: "/girlsHoodie" },
      { name: "Kid’s Romper", path: "/kidsRomper" },
    ],

    collumn_3: [],

    photo:
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=1200&auto=format&fit=crop",
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#e3e6e6] backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Logo ></Logo>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`transition-colors ${pathname === "/"
              ? "text-blue-600 font-semibold"
              : "text-black hover:text-blue-500"
              }`}
          >
            Home
          </Link>

          {/* Men's */}
          <div
            className="relative"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            onClick={() => setMegaOpen(false)}
          >
            <button className="flex items-center gap-1 cursor-pointer">
              Men's Collection <ChevronDown size={16} />
            </button>

            {megaOpen && (
              <div
                className="fixed left-0 top-16 w-full z-50"
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
              >
                <div className="bg-white border-t shadow-lg">
                  <div className="mx-auto max-w-7xl px-6 py-8">
                    <NestedNav navData={manData} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Ladies */}
          <div
            className="relative"
            onMouseEnter={ladiesEnter}
            onMouseLeave={ladiesLeave}
            onClick={() => setOpenLadiesCollection(false)}
          >
            <button className="flex items-center gap-1 cursor-pointer">
              Ladies collection <ChevronDown size={16} />
            </button>

            {opentLadiesCollection && (
              <div
                className="fixed left-0 top-16 w-full z-50"
                onMouseEnter={ladiesEnter}
                onMouseLeave={ladiesLeave}
              >
                <div className="bg-white border-t shadow-lg">
                  <div className="mx-auto max-w-7xl px-6 py-8">
                    <NestedNav navData={ladiesData} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Kids */}
          <div
            className="relative"
            onMouseEnter={kidsEnter}
            onMouseLeave={kidsLeave}
            onClick={() => setOpenKidsCollection(false)}
          >
            <button className="flex items-center gap-1 cursor-pointer">
              Kids collection <ChevronDown size={16} />
            </button>

            {opentKidsCollection && (
              <div
                className="fixed left-0 top-16 w-full z-50"
                onMouseEnter={kidsEnter}
                onMouseLeave={kidsLeave}
              >
                <div className="bg-white border-t shadow-lg">
                  <div className="mx-auto max-w-7xl px-6 py-8">
                    <NestedNav navData={kidsData} />
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className={`transition-colors ${pathname === "/about"
              ? "text-blue-600 font-semibold"
              : "text-black hover:text-blue-500"
              }`}
          >
            About
          </Link>

          <Link
            href="/services"
            className={`transition-colors ${pathname === "/services"
              ? "text-blue-600 font-semibold"
              : "text-black hover:text-blue-500"
              }`}
          >
            Services
          </Link>
        </div>

        {/* Contact */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-black text-white px-4 py-2 rounded-xl"
          >
            Contact
          </Link>
        </div>

        {/* Mobile button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
        onClick={handleMobileClose}
        className="md:hidden border-t bg-white h-[50vh] overflow-y-auto">
          <div className="flex flex-col px-4 py-4">
            <Link
              href="/"
              className={`transition-colors ${pathname === "/"
                ? "text-blue-600 font-semibold"
                : "text-black hover:text-blue-500"
                }`}
            >
              Home
            </Link>

            {/* Men's */}
            <button
              onClick={() => setMobileMega(!mobileMega)}
              className="flex justify-between py-2 cursor-pointer"
            >
              Men's Collection
              <ChevronDown className={mobileMega ? "rotate-180" : ""} />
            </button>

            {mobileMega && <NestedNav navData={manData} />}

            {/* Ladies */}
            <button
              onClick={() => setMobileLadies(!mobileLadies)}
              className="flex justify-between py-2 cursor-pointer"
            >
              Ladies Collection
              <ChevronDown className={mobileLadies ? "rotate-180" : ""} />
            </button>

            {mobileLadies && <NestedNav navData={ladiesData} />}

            {/* Kids */}
            <button
              onClick={() => setMobileKids(!mobileKids)}
              className="flex justify-between py-2 cursor-pointer"
            >
              Kids Collection
              <ChevronDown className={mobileKids ? "rotate-180" : ""} />
            </button>

            {mobileKids && <NestedNav navData={kidsData} />}

            <Link
              href="/about"
              className={`transition-colors ${pathname === "/about"
                ? "text-blue-600 font-semibold"
                : "text-black hover:text-blue-500"
                }`}
            >
              About
            </Link>

            <Link
              href="/services"
              className={`transition-colors ${pathname === "/services"
                ? "text-blue-600 font-semibold"
                : "text-black hover:text-blue-500"
                }`}
            >
              Services
            </Link>

            <Link
              href="/contact"
              className="bg-black text-white text-center py-2 mt-3 rounded-xl"
            >
              Contact
            </Link>
          </div>
        </div>
      )}

    </header>
  );
}