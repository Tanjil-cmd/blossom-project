import ShowImage from '@/components/ShowImage';
import React from 'react';
import ladiesDress_1 from '@/assets/Ladies/Ladies Dress/Ladies Dress-01.jpg';
import ladiesDress_2 from '@/assets/Ladies/Ladies Dress/Ladies Dress-02.jpg';
import ladiesDress_3 from '@/assets/Ladies/Ladies Dress/Ladies Dress-03.jpg';
import ladiesDress_4 from '@/assets/Ladies/Ladies Dress/Ladies Dress-04.jpg';
import ladiesDress_5 from '@/assets/Ladies/Ladies Dress/Ladies Dress-05.jpg';

const LadiesDress = () => {
    const photos = [
        {
            id: 1,
            photo: ladiesDress_1
        },
        {
            id: 2,
            photo: ladiesDress_2
        },
        {
            id: 3,
            photo: ladiesDress_3
        },
        {
            id: 4,
            photo: ladiesDress_4
        },
        {
            id: 5,
            photo: ladiesDress_5
        },
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Ladies Dress</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default LadiesDress;