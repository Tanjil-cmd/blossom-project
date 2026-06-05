"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import man_1 from '@/assets/Mens/Mens Suit/1JBLMB1692-27-1738_2048x.jpg';
import man_2 from '@/assets/Mens/Mens Suit/2-0079476_150_x.jpg';
import man_3 from '@/assets/Mens/Mens Suit/3-il_fullxfull.7173471992_bs1l.jpg';
import man_4 from '@/assets/Mens/Mens Suit/4-bespoke-formal-mens-suits-regular-grey-three-piece-business-suits-ballbella_1024x.jpg';
import man_5 from '@/assets/Mens/Mens Suit/4-modern_fit_suit.jpg';
import man_6 from '@/assets/Mens/Mens Suit/5-61TW9XafrEL._AC_UY1000_.jpg';

const images = [
  man_1,
  man_2,
  man_3,
  man_4,
  man_5,
  man_6,
];

export default function MensSection() {
  return (
    <section className="w-full overflow-hidden py-10 ">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
          Men&apos;s Collection
        </h2>

        {/* Slider */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-5"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...images, ...images].map((img, index) => (
              <div
                key={index}
                className="
                  min-w-full
                  sm:min-w-[50%]
                  lg:min-w-[25%]
                "
              >
                <div className="h-[400px] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={img}
                    width={400}
                    height={400}
                    alt="Men Fashion"
                    className="w-full h-full object-cover hover:scale-110 duration-500"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}