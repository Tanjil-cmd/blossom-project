import ShowImage from '@/components/ShowImage';
import React from 'react';
import ladiesBra_1 from '@/assets/Ladies/Ladies Bra/Ladies Bra-01.jpg';
import ladiesBra_2 from '@/assets/Ladies/Ladies Bra/Ladies Bra-02.jpg';
import ladiesBra_3 from '@/assets/Ladies/Ladies Bra/Ladies Bra-03.jpg';

const LadiesBra = () => {
    const photos = [
        {
            id: 1,
            photo: ladiesBra_1
        },
        {
            id: 2,
            photo: ladiesBra_2
        },
        {
            id: 3,
            photo: ladiesBra_3
        },
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Ladies Bra</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default LadiesBra;