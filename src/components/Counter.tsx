'use client';
import React from 'react';
import { motion } from "framer-motion";

const Counter = () => {
    const counter = [
        {
            id: 1,
            name: 'years in Business',
            count: 1,
        },
        {
            id: 2,
            name: 'Countries',
            count: 2,
        },
        {
            id: 3,
            name: 'enlisted garments',
            count: 10,
        },
        {
            id: 4,
            name: 'enlisted suppliers',
            count: 5,
        },
    ]
    return (
        <div className='max-w-[1200px] mx-auto px-4'>
            <h3 className='md:text-3xl text-2xl font-bold text-center'>Success stat</h3>

            <div className='grid md:grid-cols-4 gap-3 mt-4'>
                {
                    counter.map(singleData =>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className='bg-white rounded-xl py-6 shadow-2xl flex justify-center text-center'
                            key={singleData.id}>
                            <div>
                                <h3 className='text-3xl font-bold mb-3'>{singleData.count} +</h3>
                                <p className='text-2xl'>{singleData.name}</p>
                            </div>
                        </motion.div>
                    )
                }
            </div>
        </div>
    );
};

export default Counter;