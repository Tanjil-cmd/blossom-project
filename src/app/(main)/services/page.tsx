"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import design from "@/assets/services/Design & Development.jpg";
import Fabric from "@/assets/services/Fabric Sourceing.jpg";
import Garments from "@/assets/services/Garments Manufacturing.jpg";
import Logistics from "@/assets/services/Logistics & Delivery.jpg";
import Prototyping from "@/assets/services/Prototyping & Sampling.jpg";
import Quality from "@/assets/services/Quality Control.jpg";
import Sustainable from "@/assets/services/Sustainable Solutions.jpg";
import Private from "@/assets/services/Private Label & Custom Collections.jpg";

const Services = () => {
  const service = {
    title: "Design & Development",
    description:
      "We provide complete design and product development solutions, transforming your ideas into high-quality garments with precision and creativity.",
    image: design,
  };

  const reverse = false; // 👉 change to true to swap layout

  return (
    <div className="max-w-[1200px] mx-auto px-3 py-12">
      {/* Heading */}
      <h4 className="md:text-6xl text-3xl text-center font-bold">
        Our Service
      </h4>

      <p className="mt-4 text-center max-w-2xl mx-auto text-gray-600">
        At Blossom Tex BD, we provide end-to-end garment sourcing and
        manufacturing solutions to bring your fashion ideas to life.
      </p>

      {/* Section */}
      <section className="py-16">
        <div
          className={`grid md:grid-cols-2 gap-10 items-center ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* IMAGE */}
          <motion.div
            initial={{ x: reverse ? 100 : -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,1)] hover:shadow-2xl transition duration-300">
              <Image
                src={service.image}
                alt="design"
                width={600}
                height={400}
                className="w-full h-[350px] object-cover"
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ x: reverse ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {service.title}
            </h2>

            <p className="text-gray-600 mb-6">
              {service.description}
            </p>

            <button className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* reverse */}
      <section className="py-16">
        <div
          className={`grid md:grid-cols-2 gap-10 items-center ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >

          {/* TEXT */}
          <motion.div
            initial={{ x: reverse ? 100 : -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fabric Sourcing
            </h2>

            <p className="text-gray-600 mb-6">
              we source high-quality, sustainable fabrics from trusted suppliers worldwide. Whether you need organic cotton, recycled polyester, or premium blends, we’ve got you covered.
            </p>

            <button className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition">
              Learn More
            </button>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ x: reverse ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,1)] hover:shadow-2xl transition duration-300">
              <Image
                src={Fabric}
                alt="design"
                width={600}
                height={400}
                className="w-full h-[350px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section */}
      <section className="py-16">
        <div
          className={`grid md:grid-cols-2 gap-10 items-center ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* IMAGE */}
          <motion.div
            initial={{ x: reverse ? 100 : -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,1)] hover:shadow-2xl transition duration-300">
              <Image
                src={Prototyping}
                alt="design"
                width={600}
                height={400}
                className="w-full h-[350px] object-cover"
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ x: reverse ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prototyping & Sampling
            </h2>

            <p className="text-gray-600 mb-6">
              Before full-scale production, we create prototypes and samples to ensure the perfect fit, finish, and functionality. Your satisfaction is our priority.
            </p>

            <button className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* reverse */}
      <section className="py-16">
        <div
          className={`grid md:grid-cols-2 gap-10 items-center ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >

          {/* TEXT */}
          <motion.div
            initial={{ x: reverse ? 100 : -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Garments Manufacturing
            </h2>

            <p className="text-gray-600 mb-6">
              With state-of-the-art facilities and skilled artisans, we produce a wide range of garments, including casual wear, activewear, formal attire, and more. Our production process is efficient, scalable, and tailored to your requirements.
            </p>

            <button className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition">
              Learn More
            </button>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ x: reverse ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,1)] hover:shadow-2xl transition duration-300">
              <Image
                src={Garments}
                alt="design"
                width={600}
                height={400}
                className="w-full h-[350px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section */}
      <section className="py-16">
        <div
          className={`grid md:grid-cols-2 gap-10 items-center ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* IMAGE */}
          <motion.div
            initial={{ x: reverse ? 100 : -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,1)] hover:shadow-2xl transition duration-300">
              <Image
                src={Quality}
                alt="design"
                width={600}
                height={400}
                className="w-full h-[350px] object-cover"
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ x: reverse ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quality Control
            </h2>

            <p className="text-gray-600 mb-6">
              Rigorous quality checks are integrated into every stage of production to ensure that every piece meets international standards and your specifications.
            </p>

            <button className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* reverse */}
      <section className="py-16">
        <div
          className={`grid md:grid-cols-2 gap-10 items-center ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >

          {/* TEXT */}
          <motion.div
            initial={{ x: reverse ? 100 : -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sustainable Solutions
            </h2>

            <p className="text-gray-600 mb-6">
              We offer eco-friendly options, from sustainable materials to ethical manufacturing practices, helping you create fashion that’s kind to the planet.
            </p>

            <button className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition">
              Learn More
            </button>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ x: reverse ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,1)] hover:shadow-2xl transition duration-300">
              <Image
                src={Sustainable}
                alt="design"
                width={600}
                height={400}
                className="w-full h-[350px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section */}
      <section className="py-16">
        <div
          className={`grid md:grid-cols-2 gap-10 items-center ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* IMAGE */}
          <motion.div
            initial={{ x: reverse ? 100 : -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,1)] hover:shadow-2xl transition duration-300">
              <Image
                src={Logistics}
                alt="design"
                width={600}
                height={400}
                className="w-full h-[350px] object-cover"
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ x: reverse ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Logistics & Delivery
            </h2>

            <p className="text-gray-600 mb-6">
              From factory to doorstep, we handle all aspects of logistics, ensuring timely and cost-effective delivery of your products worldwide.
            </p>

            <button className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* reverse */}
      <section className="py-16">
        <div
          className={`grid md:grid-cols-2 gap-10 items-center ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >

          {/* TEXT */}
          <motion.div
            initial={{ x: reverse ? 100 : -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Private Label & Custom Collections
            </h2>

            <p className="text-gray-600 mb-6">
              Build your brand with our private label services. We help you create custom collections that stand out in the market, complete with branding and packaging.
            </p>

            <button className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition">
              Learn More
            </button>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ x: reverse ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,1)] hover:shadow-2xl transition duration-300">
              <Image
                src={Private}
                alt="design"
                width={600}
                height={400}
                className="w-full h-[350px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <p className="mt-4 text-center max-w-2xl mx-auto text-gray-600">
        Partner with us to streamline your supply chain, reduce costs, and bring high-quality garments to market faster. Let’s create fashion that inspires!
      </p>


    </div>
  );
};

export default Services;