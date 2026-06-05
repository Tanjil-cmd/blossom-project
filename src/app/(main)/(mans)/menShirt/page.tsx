import ShowImage from '@/components/ShowImage';
import React from 'react';
import menShirt_1 from '@/assets/Mens/Mens-Shirt/Mens-Shirt-1.jpg';
import menShirt_2 from '@/assets/Mens/Mens-Shirt/Mens-Shirt-2.jpg';
import menShirt_3 from '@/assets/Mens/Mens-Shirt/Mens-Shirt-3.jpg';
import menShirt_4 from '@/assets/Mens/Mens-Shirt/Mens-Shirt-4.jpg';
import menShirt_5 from '@/assets/Mens/Mens-Shirt/Mens-Shirt-5.jpg';
import menShirt_6 from '@/assets/Mens/Mens-Shirt/Mens-Shirt-6.jpg';
import menShirt_7 from '@/assets/Mens/Mens-Shirt/Mens-Shirt-7.jpg';
import menShirt_8 from '@/assets/Mens/Mens-Shirt/Mens-Shirt-8.jpg';
import menShirt_9 from '@/assets/Mens/Mens-Shirt/Mens-Shirt-9.jpg';

const MenShirt = () => {
    const photos = [
        {
            id: 1,
            photo: menShirt_1
        },
        {
            id: 2,
            photo: menShirt_2
        },
        {
            id: 3,
            photo: menShirt_3
        },
        {
            id: 4,
            photo: menShirt_4
        },
        {
            id: 5,
            photo: menShirt_5
        },
        {
            id: 6,
            photo: menShirt_6
        },
        {
            id: 7,
            photo: menShirt_7
        },
        {
            id: 8,
            photo: menShirt_8
        },
        {
            id: 9,
            photo: menShirt_9
        },
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>men Shirt</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default MenShirt;