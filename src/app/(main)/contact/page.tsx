"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Swal from "sweetalert2";

export default function ContactPage() {
    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const form = e.currentTarget; // save form first

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            console.log(result);

            if (result.success) {
                Swal.fire({
                    title: "Message Sent successfully",
                    icon: "success",
                    draggable: true
                });
                form.reset(); // use saved reference
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Contact Us
            </h2>

            <div className="grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT SIDE - CONTACT INFO */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h3 className="text-2xl font-semibold">Get in Touch</h3>
                    <p className="text-gray-600">
                        We’d love to hear from you. Reach out to us for any inquiry
                        about our products or services.
                    </p>

                    <div className="space-y-4">

                        <div className="flex items-center gap-3">
                            <MapPin className="text-black" />
                            <p>Dhaka, Bangladesh</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <Phone className="text-black" />
                            <p>+880 1820640222</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <Mail className="text-black" />
                            <p>tanjil@blossomtexbd.com</p>
                        </div>

                    </div>
                </motion.div>

                {/* RIGHT SIDE - FORM */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white shadow-lg rounded-2xl p-6"
                >
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4">

                        <div>
                            <label className="block text-sm mb-1">Name</label>
                            <input
                                type="text"
                                name='name'
                                required
                                placeholder="Your name"
                                className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1">Email</label>
                            <input
                                type="email"
                                name='email'
                                required
                                placeholder="Your email"
                                className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1">Message</label>
                            <textarea
                                rows={4}
                                name='message'
                                placeholder="Your message"
                                className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                        >
                            Send Message
                        </button>

                    </form>
                </motion.div>

            </div>
        </div>
    );
}
