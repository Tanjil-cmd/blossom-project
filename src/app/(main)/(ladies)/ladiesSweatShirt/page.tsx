import ShowImage from '@/components/ShowImage';
import React from 'react';
import ladiesSweatShirt_1 from '@/assets/Ladies/Ladies Sweat Shirt/Ladies Sweat shirt-01.jpg';
import ladiesSweatShirt_2 from '@/assets/Ladies/Ladies Sweat Shirt/Ladies Sweat shirt-02.jpg';
import ladiesSweatShirt_3 from '@/assets/Ladies/Ladies Sweat Shirt/Ladies Sweat shirt-03.jpg';
import ladiesSweatShirt_4 from '@/assets/Ladies/Ladies Sweat Shirt/Ladies Sweat shirt-04.jpg';
import ladiesSweatShirt_5 from '@/assets/Ladies/Ladies Sweat Shirt/Ladies Sweat shirt-05.jpg';
import ladiesSweatShirt_6 from '@/assets/Ladies/Ladies Sweat Shirt/Ladies Sweat shirt-06.jpg';
import ladiesSweatShirt_7 from '@/assets/Ladies/Ladies Sweat Shirt/Ladies Sweat shirt-07.jpg';
import ladiesSweatShirt_8 from '@/assets/Ladies/Ladies Sweat Shirt/Ladies Sweat shirt-08.jpg';

const LadiesSweatShirt = () => {
    const photos = [
        {
            id: 1,
            photo: ladiesSweatShirt_1
        },
        {
            id: 2,
            photo: ladiesSweatShirt_2
        },
        {
            id: 3,
            photo: ladiesSweatShirt_3
        },
        {
            id: 4,
            photo: ladiesSweatShirt_4
        },
        {
            id: 5,
            photo: ladiesSweatShirt_5
        },
        {
            id: 6,
            photo: ladiesSweatShirt_6
        },
        {
            id: 7,
            photo: ladiesSweatShirt_7
        },
        {
            id: 8,
            photo: ladiesSweatShirt_8
        },
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Ladies Sweat Shirt</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default LadiesSweatShirt;