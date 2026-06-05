import ShowImage from '@/components/ShowImage';
import React from 'react';
import menT_shirt_1 from '@/assets/Mens/Mens T shirt/Mens Short sleeve T-Shirt-1.jpg';
import menT_shirt_2 from '@/assets/Mens/Mens T shirt/Mens Short sleeve T-Shirt-2.jpg';
import menT_shirt_3 from '@/assets/Mens/Mens T shirt/Mens Short sleeve T-Shirt-3.jpg';
import menT_shirt_4 from '@/assets/Mens/Mens T shirt/Mens Short sleeve T-Shirt-4.jpg';
import menT_shirt_5 from '@/assets/Mens/Mens T shirt/Mens long sleeve T-Shirt-1.jpg';
import menT_shirt_6 from '@/assets/Mens/Mens T shirt/Mens long sleeve T-Shirt-2.jpg';
import menT_shirt_7 from '@/assets/Mens/Mens T shirt/Mens long sleeve T-Shirt-3.jpg';

const MenTShirt = () => {
    const photos = [
        {
            id: 1,
            photo: menT_shirt_1
        },
        {
            id: 2,
            photo: menT_shirt_2
        },
        {
            id: 3,
            photo: menT_shirt_3
        },
        {
            id: 4,
            photo: menT_shirt_4
        },
        {
            id: 5,
            photo: menT_shirt_5
        },
        {
            id: 6,
            photo: menT_shirt_6
        },
        {
            id: 7,
            photo: menT_shirt_7
        }
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>men T-shirt</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default MenTShirt;