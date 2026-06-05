import React from 'react';
import boys_Pant_1 from '@/assets/Kids/Boys-Pant/Boys-Pant-01.jpg';
import boys_Pant_2 from '@/assets/Kids/Boys-Pant/Boys-Pant-02.jpg';
import boys_Pant_3 from '@/assets/Kids/Boys-Pant/Boys-Pant-03.jpg';
import ShowImage from '@/components/ShowImage';

const BoysPant = () => {
    const photos = [
        {
            id: 1,
            photo: boys_Pant_1
        },
        {
            id: 2,
            photo: boys_Pant_2
        },
        {
            id: 3,
            photo: boys_Pant_3
        },
    ];
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Boy’s Pant</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default BoysPant;