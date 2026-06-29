import ShowImage from '@/components/ShowImage';
import React from 'react';
import ladiesCap_1 from '@/assets/Ladies/Ladies Cap/Ladies Cap-01.jpg';
import ladiesCap_2 from '@/assets/Ladies/Ladies Cap/Ladies Cap-02.jpg';
import ladiesCap_3 from '@/assets/Ladies/Ladies Cap/Ladies Cap-03.jpg';
import ladiesCap_4 from '@/assets/Ladies/Ladies Cap/Ladies Cap-04.jpg';
import ladiesCap_5 from '@/assets/Ladies/Ladies Cap/Ladies Cap-05.jpg';

const ladiesCap = () => {
    const photos = [
        {
            id: 1,
            photo: ladiesCap_1
        },
        {
            id: 2,
            photo: ladiesCap_2
        },
        {
            id: 3,
            photo: ladiesCap_3
        },
        {
            id: 4,
            photo: ladiesCap_4
        },
        {
            id: 5,
            photo: ladiesCap_5
        },
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Ladies Cap</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default ladiesCap;