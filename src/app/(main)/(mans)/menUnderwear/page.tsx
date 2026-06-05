import ShowImage from '@/components/ShowImage';
import React from 'react';
import menUnderwear_1 from '@/assets/Mens/Mens Under wear/Mens Under Wear-1.webp';
import menUnderwear_2 from '@/assets/Mens/Mens Under wear/Mens Under Wear-2.webp';
import menUnderwear_3 from '@/assets/Mens/Mens Under wear/Mens Under Wear-3.webp';

const MenUnderwear = () => {
    const photos = [
        {
            id: 1,
            photo: menUnderwear_1
        },
        {
            id: 2,
            photo: menUnderwear_2
        },
        {
            id: 3,
            photo: menUnderwear_3
        }
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>men Underwear</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default MenUnderwear;