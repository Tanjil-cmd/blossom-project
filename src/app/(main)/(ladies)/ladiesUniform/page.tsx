import ShowImage from '@/components/ShowImage';
import React from 'react';
import ladiesUniform_1 from '@/assets/Ladies/Ladies Uniform/Ladies Uniform-01.jpg';
import ladiesUniform_2 from '@/assets/Ladies/Ladies Uniform/Ladies Uniform-02.jpg';
import ladiesUniform_3 from '@/assets/Ladies/Ladies Uniform/Ladies Uniform-03.jpg';
import ladiesUniform_4 from '@/assets/Ladies/Ladies Uniform/Ladies Uniform-04.jpg';
import ladiesUniform_5 from '@/assets/Ladies/Ladies Uniform/Ladies Uniform-05.jpg';
import ladiesUniform_6 from '@/assets/Ladies/Ladies Uniform/Ladies Uniform-06.jpg';

const LadiesUniform = () => {
    const photos = [
        {
            id: 1,
            photo: ladiesUniform_1
        },
        {
            id: 2,
            photo: ladiesUniform_2
        },
        {
            id: 3,
            photo: ladiesUniform_3
        },
        {
            id: 4,
            photo: ladiesUniform_4
        },
        {
            id: 5,
            photo: ladiesUniform_5
        },
        {
            id: 6,
            photo: ladiesUniform_6
        },
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Ladies Uniform</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default LadiesUniform;