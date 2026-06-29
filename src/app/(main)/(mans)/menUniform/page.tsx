import ShowImage from '@/components/ShowImage';
import React from 'react';
import menUniform_1 from '@/assets/Mens/Mens Uniform/22-A4b6db8d7dc464449a164f262f2980accf.jpg';
import menUniform_2 from '@/assets/Mens/Mens Uniform/22-FBIZ6091_med.jpg';
import menUniform_3 from '@/assets/Mens/Mens Uniform/22-c92ec7a2569fb1227a2cb060ad14ab7d.jpg';
import menUniform_4 from '@/assets/Mens/Mens Uniform/22-disley-mens-pilot-shirt-ls_2.jpg';

const menUniform = () => {
    const photos = [
        {
            id: 1,
            photo: menUniform_1
        },
        {
            id: 2,
            photo: menUniform_2
        },
        {
            id: 3,
            photo: menUniform_3
        },
        {
            id: 4,
            photo: menUniform_4
        }
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Men's Uniform</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default menUniform;