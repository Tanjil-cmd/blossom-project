import ShowImage from '@/components/ShowImage';
import React from 'react';
import ladiesPant_1 from '@/assets/Ladies/Ladies pant/Ladies Pant-01.jpg';
import ladiesPant_2 from '@/assets/Ladies/Ladies pant/Ladies Pant-02.jpg';
import ladiesPant_3 from '@/assets/Ladies/Ladies pant/Ladies Pant-03.jpg';
import ladiesPant_4 from '@/assets/Ladies/Ladies pant/Ladies Pant-04.jpg';
import ladiesPant_5 from '@/assets/Ladies/Ladies pant/Ladies Pant-05.jpg';
import ladiesPant_6 from '@/assets/Ladies/Ladies pant/Ladies Pant-06.jpg';
import ladiesPant_7 from '@/assets/Ladies/Ladies pant/Ladies Pant-07.jpg';

const LadiesPant = () => {
    const photos = [
        {
            id: 1,
            photo: ladiesPant_1
        },
        {
            id: 2,
            photo: ladiesPant_2
        },
        {
            id: 3,
            photo: ladiesPant_3
        },
        {
            id: 4,
            photo: ladiesPant_4
        },
        {
            id: 5,
            photo: ladiesPant_5
        },
        {
            id: 6,
            photo: ladiesPant_6
        },
        {
            id: 7,
            photo: ladiesPant_7
        },
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Ladies Pant</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default LadiesPant;