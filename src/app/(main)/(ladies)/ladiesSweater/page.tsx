import ShowImage from '@/components/ShowImage';
import React from 'react';
import ladiesSweater_1 from '@/assets/Ladies/Ladies Sweater/Ladies Sweater-01.jpg';
import ladiesSweater_2 from '@/assets/Ladies/Ladies Sweater/Ladies Sweater-02.jpg';
import ladiesSweater_3 from '@/assets/Ladies/Ladies Sweater/Ladies Sweater-03.jpg';
import ladiesSweater_4 from '@/assets/Ladies/Ladies Sweater/Ladies Sweater-04.jpg';
import ladiesSweater_5 from '@/assets/Ladies/Ladies Sweater/Ladies Sweater-05.jpg';
import ladiesSweater_6 from '@/assets/Ladies/Ladies Sweater/Ladies Sweater-06.jpg';
import ladiesSweater_7 from '@/assets/Ladies/Ladies Sweater/Ladies Sweater-07.jpg';

const LadiesSweater = () => {
    const photos = [
        {
            id: 1,
            photo: ladiesSweater_1
        },
        {
            id: 2,
            photo: ladiesSweater_2
        },
        {
            id: 3,
            photo: ladiesSweater_3
        },
        {
            id: 4,
            photo: ladiesSweater_4
        },
        {
            id: 5,
            photo: ladiesSweater_1
        },
        {
            id: 6,
            photo: ladiesSweater_6
        },
        {
            id: 7,
            photo: ladiesSweater_7
        },
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Ladies Pant</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default LadiesSweater;