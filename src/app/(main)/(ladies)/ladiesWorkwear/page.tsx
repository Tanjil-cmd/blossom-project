import ShowImage from '@/components/ShowImage';
import React from 'react';
import ladiesWorkwear_1 from '@/assets/Ladies/Ladies work wear/Ladies Workwear-01.jpg';
import ladiesWorkwear_2 from '@/assets/Ladies/Ladies work wear/Ladies Workwear-02.jpg';
import ladiesWorkwear_3 from '@/assets/Ladies/Ladies work wear/Ladies Workwear-03.jpg';
import ladiesWorkwear_4 from '@/assets/Ladies/Ladies work wear/Ladies Workwear-04.jpg';

const ladiesWorkwear = () => {
    const photos = [
        {
            id: 1,
            photo: ladiesWorkwear_1
        },
        {
            id: 2,
            photo: ladiesWorkwear_2
        },
        {
            id: 3,
            photo: ladiesWorkwear_3
        },
        {
            id: 4,
            photo: ladiesWorkwear_4
        },
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Ladies Work wear</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default ladiesWorkwear;