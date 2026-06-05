import ShowImage from '@/components/ShowImage';
import React from 'react';
import menCap_1 from '@/assets/Mens/Mens-Cap/Mens-Cap-1.webp';
import menCap_2 from '@/assets/Mens/Mens-Cap/Mens-Cap-2.webp';
import menCap_3 from '@/assets/Mens/Mens-Cap/Mens-Cap-3.webp';
import menCap_4 from '@/assets/Mens/Mens-Cap/Mens-Cap-4.webp';
import menCap_5 from '@/assets/Mens/Mens-Cap/Mens-Cap-5.webp';

const MenCap = () => {
    const photos = [
        {
            id: 1,
            photo: menCap_1
        },
        {
            id: 2,
            photo: menCap_2
        },
        {
            id: 3,
            photo: menCap_3
        },
        {
            id: 4,
            photo: menCap_4
        },
        {
            id: 5,
            photo: menCap_5
        }
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>men Cap</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default MenCap;