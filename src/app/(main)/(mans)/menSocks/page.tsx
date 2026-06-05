import ShowImage from '@/components/ShowImage';
import React from 'react';
import menSocks_1 from '@/assets/Mens/Mens Socks/Mens Socks-1.jpg';
import menSocks_2 from '@/assets/Mens/Mens Socks/Mens Socks-2.jpg';
import menSocks_3 from '@/assets/Mens/Mens Socks/Mens Socks-3.jpg';
import menSocks_4 from '@/assets/Mens/Mens Socks/Mens Socks-4.jpg';

const MenSocks = () => {
    const photos = [
        {
            id: 1,
            photo: menSocks_1
        },
        {
            id: 2,
            photo: menSocks_2
        },
        {
            id: 3,
            photo: menSocks_3
        },
        {
            id: 4,
            photo: menSocks_4
        },
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>men Socks</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default MenSocks;