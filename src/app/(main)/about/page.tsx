"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import aboutImg from "@/assets/services/Quality Control.jpg"; // change to your image
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">

            {/* HERO */}
            <section className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    About Us
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    We are a trusted garment sourcing and manufacturing company,
                    delivering premium quality clothing worldwide.
                </p>
            </section>

            {/* IMAGE + TEXT */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-20">

                {/* Image */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src={aboutImg}
                            alt="about"
                            width={600}
                            height={400}
                            className="w-full h-[350px] object-cover"
                        />
                    </div>
                </motion.div>

                {/* Text */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-4">
                        Who We Are
                    </h2>

                    <p className="text-gray-600 mb-4">
                        Blossom Tex BD is a leading garment manufacturer and sourcing
                        partner based in Bangladesh. We specialize in producing
                        high-quality apparel for men, ladies, and kids.
                    </p>

                    <p className="text-gray-600">
                        Our goal is to deliver world-class products with competitive
                        pricing, fast delivery, and complete customer satisfaction.
                    </p>
                </motion.div>
            </section>

            {/* MISSION & VISION */}
            <section className="grid md:grid-cols-2 gap-8 mb-5">

                <motion.div
                    initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gray-100 p-6 rounded-2xl shadow"
                >
                    <h3 className="text-2xl font-semibold mb-3">
                        Our Mission
                    </h3>
                    <p className="text-gray-600">
                        To provide premium garments with excellent quality and build
                        long-term relationships with global clients.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gray-100 p-6 rounded-2xl shadow"
                >
                    <h3 className="text-2xl font-semibold mb-3">
                        Our Vision
                    </h3>
                    <p className="text-gray-600">
                        To become a globally recognized garment sourcing company by
                        ensuring quality, innovation, and sustainability.
                    </p>
                </motion.div>

            </section>

            {/* company profile */}
            <section className='mb-5'>
                <h3 className="text-2xl md:text-4xl font-bold text-center mb-5">Company Profile</h3>
                <div className='bg-[#31859c]  text-white p-4 rounded-xl space-y-4'>
                    <h4 className="text-2xl md:text-4xl font-bold mb-5">INTRODUCTION</h4>

                    <div className='text-white space-y-4'>
                        <p>“BLOSSOM TEX BD” has been supplying good quality readymade garments to some renowned and largest importers and dealers from Europe, USA & Canada.</p>

                        <p>we have learned how to develop design and maintain the highest quality.</p>

                        <p>Over the years, “BLOSSOM TEX BD” has become a very professional ready-made garment supplier in Bangladesh. Our  experience, good quality, competitive price, timely delivery and excellent service makes us very popular to our valued customers.</p>

                        <p>So, if you want to buy any kind of ready-made garments from Bangladesh, please make “BLOSSOM TEX BD”  your first choice and get relaxed. People from “BLOSSOM TEX BD” will take all the responsibility to make your orders successful. We are very much trustworthy, and we make business easy for our customer.</p>

                        <p>We are dealing with Casual-wear, Fashion wear, sportswear, knight wear, kids wear, Work-wear, corporate clothing & Uniforms.</p>

                        <p>Our production factories are compliance with International standards like: amfori, BSCI, OEKOTEX-100, SEDEX, WRAP, ACCORD, ALLIANCE, RSC, GOTS, GRS, Higg index.</p>

                        <h4 className='font-bold'>Our products range include the following items:</h4>

                        <h4 className='font-bold'>Casual & Fashion</h4>
                    </div>

                    <div>
                        <p>1) T-shirts, Polo shirts, tank top Sweatshirts, Sweat jackets, polar fleece for men, women and children.</p>
                        <p>2) Sweaters, Cardigans, pullovers, vest in various quality and designs.</p>
                        <p>3) Trousers, shorts, Denim Jeans, skirts in many design and qualities.</p>
                        <p>4) Shirts & blouse in varies design and qualities.</p>
                        <p>5) Sports wears in different design and qualities.</p>
                        <p>6) Swinging shorts in all range</p>
                        <p>7) Knight wear & leisure wear in all range</p>
                        <p>8) Boys, girls & Children wears.</p>
                    </div>

                    <h3 className='font-bold my-4'>OUTERWEAR</h3>

                    <div>
                        <p>1) Winter Jackets in all range</p>
                        <p>2) Functional jackets in all range</p>
                        <p>3) Vest in all range</p>
                        <p>4) Rain jackets and coat</p>
                        <p>5) Fleece jackets</p>
                        <p>6) Soft shell jackets etc.</p>
                    </div>

                    <h3 className='font-bold my-4'>Work wear & Uniforms</h3>

                    <div>
                        <p>1) Work trousers, shorts, multi utility pants, BIB & Overall</p>
                        <p>2) All Hi visibility range</p>
                        <p>3) Jackets, Vest, soft-shell etc.</p>
                        <p>4) All restaurant and Chef range</p>
                        <p>5) Corporate dress</p>
                        <p>6) School, military and police uniforms</p>
                        <p>7) All Apron range</p>
                        <p>8) Shopping bags in all range</p>
                        <p>9) Shopping bags etc.</p>
                    </div>

                    <h3 className='font-bold my-4'>Portfolio of our company :</h3>
                    <table>
                        <tbody>
                           
                            <tr>
                                <td>Legal Status</td>
                                <td>: Registered as privet limited company by share</td>
                            </tr>
                            <tr>
                                <td>Company activity</td>
                                <td>: Export of ready-made garments as a buying agent.</td>
                            </tr>
                            <tr>
                                <td>Main export market</td>
                                <td>: Europe, USA & Canada</td>
                            </tr>
                            <tr>
                                <td>Main exported item</td>
                                <td>: Woven, Knit and Sweater for men, women & Kids.</td>
                            </tr>
                            <tr>
                                <td>Products group</td>
                                <td>: Casual, fashion, outerwear, Workwear & uniform.</td>
                            </tr>
                            <tr>
                                <td>Specialty</td>
                                <td>: Workwear & Uniform</td>
                            </tr>
                            <tr>
                                <td>Payment term-01</td>
                                <td>: L/C at sight</td>
                            </tr>
                            <tr>
                                <td>Payment Terms -02</td>
                                <td>: 50% Advanced TT</td>
                            </tr>
                            <tr>
                                <td>Terms delivery</td>
                                <td>: FOB or CNF</td>
                            </tr>
                            <tr>
                                <td>Production lead time</td>
                                <td>: 60 Days for local fabric & 90 days for imported fabric</td>
                            </tr>
                            <tr>
                                <td>Final inspection</td>
                                <td>: BLOSSOM TEX BD. or Customers nominated agent</td>
                            </tr>
                            <tr>
                                <td>Main contact</td>
                                <td>: Tanjil Or Rahman</td>
                            </tr>
                            <tr>
                                <td>Personal Mobile</td>
                                <td>: +88 01820640222</td>
                            </tr>
                            <tr>
                                <td>Email address</td>
                                <td>: tanjil@blossomtexbd.com, info@blossomtexbd.com</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3 className='font-bold my-4'>Service that we provide</h3>
                    <div>
                        <p>1) We source good quality factories that fit our customer’s products production.</p>
                        <p>2) We source fabrics, accessories, print, embroidery wash etc as per our customer’s requirements.</p>
                        <p>3) We develop samples from Fit to PP.</p>
                        <p>4) We do follow up production from the very beginning.</p>
                        <p>5) Our quality team checks every day in line quality.</p>
                        <p>6) We perform final inspection before shipment.</p>
                        <p>7) We ensure logistic support for our factories.</p>
                        <p>8) We handle different test as per present international standard of quality & compliance.</p>
                        <p>9) We do follow up with the shipping line agents to ensure in time shipments.</p>
                    </div>

                </div>
            </section>

            {/* STATS */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-20">

                {[
                    { number: "1+", label: "Years Experience" },
                    { number: "5+", label: "Clients" },
                    { number: "100+", label: "Products" },
                    { number: "5+", label: "Countries" },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white shadow-md rounded-xl p-6"
                    >
                        <h4 className="text-2xl font-bold">{item.number}</h4>
                        <p className="text-gray-600">{item.label}</p>
                    </motion.div>
                ))}

            </section>

            {/* CTA */}
            <section className="text-center">
                <h3 className="text-3xl font-bold mb-4">
                    Want to Work With Us?
                </h3>
                <p className="text-gray-600 mb-6">
                    Contact us today and let’s build something amazing together.
                </p>

                <Link href='/contact'>
                    <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
                        Contact Us
                    </button>
                </Link>
            </section>

        </div>
    );
}