import ShowImage from '@/components/ShowImage';
import React from 'react';
import ladiesShirt_1 from '@/assets/Ladies/Ladis Shirt/Ladies Shirt-01.jpg';
import ladiesShirt_2 from '@/assets/Ladies/Ladis Shirt/Ladies Shirt-02.jpg';
import ladiesShirt_3 from '@/assets/Ladies/Ladis Shirt/Ladies Shirt-03.jpg';
import ladiesShirt_4 from '@/assets/Ladies/Ladis Shirt/Ladies Shirt-04.jpg';
import ladiesShirt_5 from '@/assets/Ladies/Ladis Shirt/Ladies Shirt-05.jpg';

const LadiesShirt = () => {
    const photos = [
        {
            id: 1,
            photo: ladiesShirt_1
        },
        {
            id: 2,
            photo: ladiesShirt_2
        },
        {
            id: 3,
            photo: ladiesShirt_3
        },
        {
            id: 4,
            photo: ladiesShirt_4
        },
        {
            id: 5,
            photo: ladiesShirt_5
        },
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Ladies Shirt</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default LadiesShirt;