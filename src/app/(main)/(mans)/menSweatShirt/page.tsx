import ShowImage from '@/components/ShowImage';
import React from 'react';
import menSweatShirt_1 from '@/assets/Mens/Mens Sweatshirt/Mens Sweatshirt-1.jpg';
import menSweatShirt_2 from '@/assets/Mens/Mens Sweatshirt/Mens Sweatshirt-2.jpg';
import menSweatShirt_3 from '@/assets/Mens/Mens Sweatshirt/Mens Sweatshirt-3.jpg';
import menSweatShirt_4 from '@/assets/Mens/Mens Sweatshirt/Mens Sweatshirt-4.jpg';
import menSweatShirt_5 from '@/assets/Mens/Mens Sweatshirt/Mens Sweatshirt-5.jpg';
import menSweatShirt_6 from '@/assets/Mens/Mens Sweatshirt/Mens Sweatshirt-6.jpg';
import menSweatShirt_7 from '@/assets/Mens/Mens Sweatshirt/Mens Sweatshirt-7.jpg';
import menSweatShirt_8 from '@/assets/Mens/Mens Sweatshirt/Mens Sweatshirt-8.jpg';

const MenSweatShirt = () => {
    const photos = [
        {
            id: 1,
            photo: menSweatShirt_1
        },
        {
            id: 2,
            photo: menSweatShirt_2
        },
        {
            id: 3,
            photo: menSweatShirt_3
        },
        {
            id: 4,
            photo: menSweatShirt_4
        },
        {
            id: 5,
            photo: menSweatShirt_5
        },
        {
            id: 1,
            photo: menSweatShirt_6
        },
        {
            id: 7,
            photo: menSweatShirt_7
        },
        {
            id: 8,
            photo: menSweatShirt_8
        }
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Men's Sweat Shirt</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default MenSweatShirt;