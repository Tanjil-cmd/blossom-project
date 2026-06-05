"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const shipments = [
  {
    id: 1,
    title: "Men T-Shirt",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800",
  },
  {
    id: 2,
    title: "Ladies Hoodie",
    image:
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=800",
  },
  {
    id: 3,
    title: "Kids Wear",
    image:
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=800",
  },
  {
    id: 4,
    title: "Polo Shirt",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800",
  },
  {
    id: 5,
    title: "Sweat Shirt",
    image:
      "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800",
  },
  {
    id: 6,
    title: "Uniform",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=800",
  },
];

export default function LatestShipmentCarousel() {
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // responsive items
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1); // mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // tablet
      } else {
        setItemsPerView(3); // desktop
      }
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const maxIndex = shipments.length - itemsPerView;

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="py-10 max-w-[1200px] mx-auto px-4">
      <h2 className="md:text-3xl text-2xl font-bold text-center mb-4">
        Our Latest
      </h2>

      <div className="relative overflow-hidden">
        <motion.div
          animate={{ x: `-${index * (100 / itemsPerView)}%` }}
          transition={{ duration: 0.5 }}
          className="flex"
        >
          {shipments.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 px-3"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div className="bg-white shadow-md rounded-xl overflow-hidden">
                <img
                  src={item.image}
                  className="w-full h-64 object-cover"
                  alt={item.title}
                />

                {/* <div className="p-4">
                  <h3 className="font-medium">{item.title}</h3>
                </div> */}
              </div>
            </div>
          ))}
        </motion.div>

        {/* arrows */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}