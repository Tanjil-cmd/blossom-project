"use client";

import Link from "next/link";
import React from "react";
import { MegaNavData } from "./Navbar";
import { usePathname } from "next/navigation";
import Image from "next/image";

type navProps = {
  navData: MegaNavData;
};

const NestedNav = ({ navData }: navProps) => {
  const pathname = usePathname();

  // reusable style function
  const activeClass = (path: string) => {
    return pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-500";
  };

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-4 gap-8 px-6 py-8">
      
      {/* Column 1 */}
      <div className="flex flex-col gap-3">
        {navData.collumn_1.map((singleData) => (
          <Link
            key={singleData.name}
            href={singleData.path}
            className={`
              transition-all duration-300
              ${activeClass(singleData.path)}
            `}
          >
            {singleData.name}
          </Link>
        ))}
      </div>

      {/* Column 2 */}
      <div className="flex flex-col gap-3">
        {navData.collumn_2.map((singleData) => (
          <Link
            key={singleData.name}
            href={singleData.path}
            className={`
              transition-all duration-300
              ${activeClass(singleData.path)}
            `}
          >
            {singleData.name}
          </Link>
        ))}
      </div>

      {/* Column 3 */}
      <div className="flex flex-col gap-3">
        {navData.collumn_3.map((singleData) => (
          <Link
            key={singleData.name}
            href={singleData.path}
            className={`
              transition-all duration-300
              ${activeClass(singleData.path)}
            `}
          >
            {singleData.name}
          </Link>
        ))}
      </div>

      {/* Image */}
      <div className="relative hidden md:block h-[300px] w-full overflow-hidden rounded-2xl">
        <Image
          src={navData.photo}
          alt="Collection"
          className="h-full w-full object-cover"
          fill
          unoptimized
        />
      </div>
    </div>
  );
};

export default NestedNav;