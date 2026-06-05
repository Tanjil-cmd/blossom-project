import React from 'react';
import ladiesTShirt_1 from '@/assets/Ladies/Ladies T-SHirt/Ladies T-Shirt-01.jpg';
import ladiesTShirt_2 from '@/assets/Ladies/Ladies T-SHirt/Ladies T-Shirt-02.jpg';
import ladiesTShirt_3 from '@/assets/Ladies/Ladies T-SHirt/Ladies T-Shirt-03.jpg';
import ladiesTShirt_4 from '@/assets/Ladies/Ladies T-SHirt/Ladies T-Shirt-04.jpg';
import ShowImage from '@/components/ShowImage';

const LadiesTShirt = () => {
    const photos = [
        {
            id: 1,
            photo: ladiesTShirt_1
        },
        {
            id: 2,
            photo: ladiesTShirt_2
        },
        {
            id: 3,
            photo: ladiesTShirt_3
        },
        {
            id: 4,
            photo: ladiesTShirt_4
        },
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>ladies T-Shirt</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default LadiesTShirt;