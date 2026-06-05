import ShowImage from '@/components/ShowImage';
import React from 'react';
import ladiesTankTop_1 from '@/assets/Ladies/Ladies Tank Top/Ladies Tank top-01.jpg';
import ladiesTankTop_2 from '@/assets/Ladies/Ladies Tank Top/Ladies Tank top-02.jpg';
import ladiesTankTop_3 from '@/assets/Ladies/Ladies Tank Top/Ladies Tank top-03.jpg';

const LadiesTankTop = () => {
    const photos = [
        {
            id: 1,
            photo: ladiesTankTop_1
        },
        {
            id: 2,
            photo: ladiesTankTop_2
        },
        {
            id: 3,
            photo: ladiesTankTop_3
        },
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Ladies Tank Top</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default LadiesTankTop;