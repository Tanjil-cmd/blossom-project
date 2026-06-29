import ShowImage from '@/components/ShowImage';
import React from 'react';
import ladiesHoodie_1 from '@/assets/Ladies/Ladies Hoodie/Ladies Hoodie-01.jpg';
import ladiesHoodie_2 from '@/assets/Ladies/Ladies Hoodie/Ladies Hoodie-02.jpg';
import ladiesHoodie_3 from '@/assets/Ladies/Ladies Hoodie/Ladies Hoodie-03.jpg';
import ladiesHoodie_4 from '@/assets/Ladies/Ladies Hoodie/Ladies Hoodie-04.jpg';
import ladiesHoodie_5 from '@/assets/Ladies/Ladies Hoodie/Ladies Hoodie-05.jpg';

const LadiesHoodie = () => {
    const photos = [
        {
            id: 1,
            photo: ladiesHoodie_1
        },
        {
            id: 2,
            photo: ladiesHoodie_2
        },
        {
            id: 3,
            photo: ladiesHoodie_3
        },
        {
            id: 4,
            photo: ladiesHoodie_4
        },
        {
            id: 5,
            photo: ladiesHoodie_5
        },
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Ladies Hoodie</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default LadiesHoodie;