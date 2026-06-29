import React from 'react';
import girlsSweatShirt_1 from '@/assets/Kids/Boys-Sweat-Shirt/Boys-Sweat-Shirt-01.jpg';
import girlsSweatShirt_2 from '@/assets/Kids/Boys-Sweat-Shirt/Boys-Sweat-Shirt-02.jpg';
import girlsSweatShirt_3 from '@/assets/Kids/Boys-Sweat-Shirt/Boys-Sweat-Shirt-03.jpg';
import girlsSweatShirt_4 from '@/assets/Kids/Boys-Sweat-Shirt/Boys-Sweat-Shirt-04.jpg';
import ShowImage from '@/components/ShowImage';

const GirlsSweatShirt = () => {
    const photos = [
        {
            id: 1,
            photo: girlsSweatShirt_1
        },
        {
            id: 2,
            photo: girlsSweatShirt_2
        },
        {
            id: 3,
            photo: girlsSweatShirt_3
        },
        {
            id: 4,
            photo: girlsSweatShirt_4
        },
    ];
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Girl's Sweat Shirt</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default GirlsSweatShirt;