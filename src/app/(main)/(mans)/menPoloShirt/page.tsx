import ShowImage from '@/components/ShowImage';
import React from 'react';
import menPoloShirt_1 from '@/assets/Mens/Mens-Polo/33-890-2.jpg';
import menPoloShirt_2 from '@/assets/Mens/Mens-Polo/33-926-2.jpg';
import menPoloShirt_3 from '@/assets/Mens/Mens-Polo/33-943-2.jpg';
import menPoloShirt_4 from '@/assets/Mens/Mens-Polo/33-S41c1acc2b8e84c5b815d0677e21afe7d7.jpg_200x200q80.jpg';
import menPoloShirt_5 from '@/assets/Mens/Mens-Polo/Mens-polo-shirt-1.jpg';
import menPoloShirt_6 from '@/assets/Mens/Mens-Polo/Mens-polo-shirt-2.jpg';

const MenPoloShirt = () => {
    const photos = [
        {
            id: 1,
            photo: menPoloShirt_1
        },
        {
            id: 1,
            photo: menPoloShirt_1
        },
        {
            id: 2,
            photo: menPoloShirt_2
        },
        {
            id: 3,
            photo: menPoloShirt_3
        },
        {
            id: 4,
            photo: menPoloShirt_4
        },
        {
            id: 5,
            photo: menPoloShirt_5
        },
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Men's Polo Shirt</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default MenPoloShirt;