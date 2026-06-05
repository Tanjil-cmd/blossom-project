import ShowImage from '@/components/ShowImage';
import React from 'react';
import ladiesSleepwear_1 from '@/assets/Ladies/Ladies Sleep wear/Ladies Sleep wear-01.jpg';
import ladiesSleepwear_2 from '@/assets/Ladies/Ladies Sleep wear/Ladies Sleep wear-02.jpg';
import ladiesSleepwear_3 from '@/assets/Ladies/Ladies Sleep wear/Ladies Sleep wear-03.jpg';
import ladiesSleepwear_4 from '@/assets/Ladies/Ladies Sleep wear/Ladies Sleep wear-04.jpg';
import ladiesSleepwear_5 from '@/assets/Ladies/Ladies Sleep wear/Ladies Sleep wear-05.jpg';
import ladiesSleepwear_6 from '@/assets/Ladies/Ladies Sleep wear/Ladies Sleep wear-06.jpg';

const ladiesSleepwear = () => {
    const photos = [
        {
            id: 1,
            photo: ladiesSleepwear_1
        },
        {
            id: 2,
            photo: ladiesSleepwear_2
        },
        {
            id: 3,
            photo: ladiesSleepwear_3
        },
        {
            id: 4,
            photo: ladiesSleepwear_4
        },
        {
            id: 5,
            photo: ladiesSleepwear_5
        },
        {
            id: 6,
            photo: ladiesSleepwear_6
        },
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Ladies Sleepwear</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default ladiesSleepwear;