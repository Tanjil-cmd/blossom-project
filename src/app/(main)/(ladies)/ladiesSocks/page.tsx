import ShowImage from '@/components/ShowImage';
import React from 'react';
import ladiesSocks_1 from '@/assets/Ladies/Ladies Socks/Ladies Socks-01.jpg';
import ladiesSocks_2 from '@/assets/Ladies/Ladies Socks/Ladies Socks-02.jpg';
import ladiesSocks_3 from '@/assets/Ladies/Ladies Socks/Ladies Socks-03.jpg';

const LadiesSocks = () => {
    const photos = [
        {
            id: 1,
            photo: ladiesSocks_1
        },
        {
            id: 2,
            photo: ladiesSocks_2
        },
        {
            id: 3,
            photo: ladiesSocks_3
        },
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Ladies Socks</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default LadiesSocks;