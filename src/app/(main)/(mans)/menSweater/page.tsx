import ShowImage from '@/components/ShowImage';
import React from 'react';
import menSweater_1 from '@/assets/Mens/Mens Sweatshirt/Mens Sweatshirt-1.jpg';
import menSweater_2 from '@/assets/Mens/Mens Sweatshirt/Mens Sweatshirt-2.jpg';
import menSweater_3 from '@/assets/Mens/Mens Sweatshirt/Mens Sweatshirt-3.jpg';
import menSweater_4 from '@/assets/Mens/Mens Sweatshirt/Mens Sweatshirt-4.jpg';
import menSweater_5 from '@/assets/Mens/Mens Sweatshirt/Mens Sweatshirt-5.jpg';
import menSweater_6 from '@/assets/Mens/Mens Sweatshirt/Mens Sweatshirt-6.jpg';
import menSweater_7 from '@/assets/Mens/Mens Sweatshirt/Mens Sweatshirt-7.jpg';
import menSweater_8 from '@/assets/Mens/Mens Sweatshirt/Mens Sweatshirt-8.jpg';

const MenSweater = () => {
    const photos = [
        {
            id: 1,
            photo: menSweater_1
        },
        {
            id: 2,
            photo: menSweater_2
        },
        {
            id: 3,
            photo: menSweater_3
        },
        {
            id: 4,
            photo: menSweater_4
        },
        {
            id: 5,
            photo: menSweater_5
        },
        {
            id: 6,
            photo: menSweater_6
        },
        {
            id: 7,
            photo: menSweater_7
        },
        {
            id: 8,
            photo: menSweater_8
        }
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Men's Sweater</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default MenSweater;