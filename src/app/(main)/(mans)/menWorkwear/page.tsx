import ShowImage from '@/components/ShowImage';
import React from 'react';
import menWorkwear_1 from '@/assets/Mens/Mens Work Wear/22-poplin-short-sleeve-coverall-TC.jpg';
import menWorkwear_2 from '@/assets/Mens/Mens Work Wear/22-work-pant-workwear-300x300.jpg';
import menWorkwear_3 from '@/assets/Mens/Mens Work Wear/22-workwear-work-shirt-300x300.jpg';
import menWorkwear_4 from '@/assets/Mens/Mens Work Wear/Mens work wear jacket-1.webp';
import menWorkwear_5 from '@/assets/Mens/Mens Work Wear/Mens work wear pant-1.webp';

const MenWorkwear = () => {
    const photos = [
        {
            id: 1,
            photo: menWorkwear_1
        },
        {
            id: 2,
            photo: menWorkwear_2
        },
        {
            id: 3,
            photo: menWorkwear_3
        },
        {
            id: 4,
            photo: menWorkwear_4
        },
        {
            id: 5,
            photo: menWorkwear_5
        },
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>men Work wear</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default MenWorkwear;