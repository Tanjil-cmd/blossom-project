import ShowImage from '@/components/ShowImage';
import { i } from 'framer-motion/client';
import React from 'react';
import ladiesOuterwear_1 from '@/assets/Ladies/Ladis Outwear/Ladies Outerwear-01.jpg';
import ladiesOuterwear_2 from '@/assets/Ladies/Ladis Outwear/Ladies Outerwear-02.jpg';
import ladiesOuterwear_3 from '@/assets/Ladies/Ladis Outwear/Ladies Outerwear-03.jpg';
import ladiesOuterwear_4 from '@/assets/Ladies/Ladis Outwear/Ladies Outerwear-04.jpg';
import ladiesOuterwear_5 from '@/assets/Ladies/Ladis Outwear/Ladies Outerwear-05.jpg';

const LadiesOuterwear = () => {
    const photos = [
        {
            id: 1,
            photo: ladiesOuterwear_1
        },
        {
            id: 2,
            photo: ladiesOuterwear_2
        },
        {
            id: 3,
            photo: ladiesOuterwear_3
        },
        {
            id: 4,
            photo: ladiesOuterwear_4
        },
        {
            id: 5,
            photo: ladiesOuterwear_5
        },
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Ladies Outerwear</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default LadiesOuterwear;