import ShowImage from '@/components/ShowImage';
import React from 'react';
import ladiesShorts_1 from '@/assets/Ladies/Ladies Shorts/Ladies Shorts-01.jpg';
import ladiesShorts_2 from '@/assets/Ladies/Ladies Shorts/Ladies Shorts-02.jpg';
import ladiesShorts_3 from '@/assets/Ladies/Ladies Shorts/Ladies Shorts-03.jpg';
import ladiesShorts_4 from '@/assets/Ladies/Ladies Shorts/Ladies Shorts-04.jpg';
import ladiesShorts_5 from '@/assets/Ladies/Ladies Shorts/Ladies Shorts-05.jpg';
import ladiesShorts_6 from '@/assets/Ladies/Ladies Shorts/Ladies Shorts-06.jpg';
import ladiesShorts_7 from '@/assets/Ladies/Ladies Shorts/Ladies Shorts-07.jpg';
import ladiesShorts_8 from '@/assets/Ladies/Ladies Shorts/Ladies Shorts-08.jpg';

const LadiesShorts = () => {
    const photos = [
        {
            id: 1,
            photo: ladiesShorts_1
        },
        {
            id: 2,
            photo: ladiesShorts_2
        },
        {
            id: 3,
            photo: ladiesShorts_3
        },
        {
            id: 4,
            photo: ladiesShorts_4
        },
        {
            id: 5,
            photo: ladiesShorts_5
        },
        {
            id: 6,
            photo: ladiesShorts_6
        },
        {
            id: 7,
            photo: ladiesShorts_7
        },
        {
            id: 8,
            photo: ladiesShorts_8
        },
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Ladies Shorts</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default LadiesShorts;