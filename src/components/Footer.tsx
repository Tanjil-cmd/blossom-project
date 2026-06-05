"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* company */}
          <div>
            <Logo />
            <p className="text-gray-400 text-sm my-4">
              We provide high-quality garments for men, ladies and kids. 
              Latest shipment with best export quality.
            </p>

            <div className="flex gap-3">
              {/* <Facebook className="cursor-pointer hover:text-gray-300" /> */}
              {/* <Instagram className="cursor-pointer hover:text-gray-300" /> */}
              {/* <Twitter className="cursor-pointer hover:text-gray-300" /> */}
            </div>
          </div>

          {/* quick links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#">Men Collection</Link></li>
              <li><Link href="#">Ladies Collection</Link></li>
              <li><Link href="#">Kids Collection</Link></li>
              <li><Link href="#">Latest Shipment</Link></li>
              <li><Link href="#">New Arrivals</Link></li>
            </ul>
          </div>

          {/* contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>

            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex gap-2 items-start">
                <MapPin size={16} />
                <p>Dhaka, Bangladesh</p>
              </div>

              <div className="flex gap-2 items-center">
                <Phone size={16} />
                <p>+880 1820640222</p>
              </div>

              <div className="flex gap-2 items-center">
                <Mail size={16} />
                <p>tanjil.bd44@gmail.com</p>
              </div>
            </div>
          </div>

        </div>

        {/* divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-gray-400 text-sm">
          <p>© 2026 MyLogo. All rights reserved.</p>

          <div className="flex gap-4">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}