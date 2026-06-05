import ShowImage from '@/components/ShowImage';
import React from 'react';
import MenTankTop_1 from '@/assets/Mens/Mens Tank Top/Mens Tank Top-1.webp';
import MenTankTop_2 from '@/assets/Mens/Mens Tank Top/Mens Tank Top-2.webp';
import MenTankTop_3 from '@/assets/Mens/Mens Tank Top/Mens Tank Top-3.jpg';
import MenTankTop_4 from '@/assets/Mens/Mens Tank Top/Mens Tank Top-4.webp';

const MenTankTop = () => {
    const photos = [
        {
            id: 1,
            photo: MenTankTop_1
        },
        {
            id: 2,
            photo: MenTankTop_2
        },
        {
            id: 3,
            photo: MenTankTop_3
        },
        {
            id: 4,
            photo: MenTankTop_4
        }
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Men Tank Top</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default MenTankTop;