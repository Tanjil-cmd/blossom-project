import ShowImage from '@/components/ShowImage';
import React from 'react';
import ladiesPanty_1 from '@/assets/Ladies/Ladis Penty/Ladies Panty-01.jpg';
import ladiesPanty_2 from '@/assets/Ladies/Ladis Penty/Ladies Panty-02.jpg';
import ladiesPanty_3 from '@/assets/Ladies/Ladis Penty/Ladies Panty-03.jpg';
import ladiesPanty_4 from '@/assets/Ladies/Ladis Penty/Ladies Panty-04.jpg';
import ladiesPanty_5 from '@/assets/Ladies/Ladis Penty/Ladies Panty-05.jpg';

const LadiesPanty = () => {
    const photos = [
        {
            id: 1,
            photo: ladiesPanty_1
        },
        {
            id: 2,
            photo: ladiesPanty_2
        },
        {
            id: 3,
            photo: ladiesPanty_3
        },
        {
            id: 4,
            photo: ladiesPanty_4
        },
        {
            id: 5,
            photo: ladiesPanty_5
        },
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Ladies Panty</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default LadiesPanty;