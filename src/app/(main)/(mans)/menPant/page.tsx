import ShowImage from '@/components/ShowImage';
import React from 'react';
import menPant_1 from '@/assets/Mens/MensPant/MensPant-1.jpg';
import menPant_2 from '@/assets/Mens/MensPant/MensPant-2.jpg';
import menPant_3 from '@/assets/Mens/MensPant/MensPant-3.jpg';
import menPant_4 from '@/assets/Mens/MensPant/MensPant-4.jpg';
import menPant_5 from '@/assets/Mens/MensPant/MensPant-5.jpg';
import menPant_6 from '@/assets/Mens/MensPant/MensPant-6.jpg';
import menPant_7 from '@/assets/Mens/MensPant/MensPant-7.jpg';
import menPant_8 from '@/assets/Mens/MensPant/MensPant-8.jpg';
import menPant_9 from '@/assets/Mens/MensPant/MensPant-9.jpg';
import menPant_10 from '@/assets/Mens/MensPant/MensPant-10.jpg';
import menPant_11 from '@/assets/Mens/MensPant/MensPant-11.jpg';
import menPant_12 from '@/assets/Mens/MensPant/MensPant-12.jpg';
import menPant_13 from '@/assets/Mens/MensPant/MensPant-13.jpg';

const MenPant = () => {
    const photos = [
        {
            id: 1,
            photo: menPant_1
        },
        {
            id: 2,
            photo: menPant_2
        },
        {
            id: 3,
            photo: menPant_3
        },
        {
            id: 4,
            photo: menPant_4
        },
        {
            id: 5,
            photo: menPant_5
        },
        {
            id: 6,
            photo: menPant_6
        },
        {
            id: 7,
            photo: menPant_7
        },
        {
            id: 8,
            photo: menPant_8
        },
        {
            id: 9,
            photo: menPant_9
        },
        {
            id: 10,
            photo: menPant_10
        },
        {
            id: 11,
            photo: menPant_11
        },
        {
            id: 12,
            photo: menPant_12
        },
        {
            id: 13,
            photo: menPant_13
        },
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>men Pant</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default MenPant;