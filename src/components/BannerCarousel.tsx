"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop",
    title: "Men Collection",
    subtitle: "New arrivals for men",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop",
    title: "Ladies Collection",
    subtitle: "Trending fashion 2026",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=1600&auto=format&fit=crop",
    title: "Kids Collection",
    subtitle: "Comfort for kids",
  },
];

export default function BannerCarousel() {
  const [index, setIndex] = useState(0);

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % banners.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative w-full h-[500px] bg-black overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <img
            src={banners[index].image}
            className="w-full h-full object-contain"
            alt="banner"
          />

          {/* overlay text */}
          <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white">
            <h2 className="text-4xl font-bold mb-2">
              {banners[index].title}
            </h2>
            <p className="text-lg">
              {banners[index].subtitle}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* left arrow */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
      >
        <ChevronLeft />
      </button>

      {/* right arrow */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
      >
        <ChevronRight />
      </button>

      {/* dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              index === i ? "bg-white w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}