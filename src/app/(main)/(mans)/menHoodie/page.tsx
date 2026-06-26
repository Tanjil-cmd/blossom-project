import ShowImage from '@/components/ShowImage';
import React from 'react';
import menHoodie_1 from '@/assets/Mens/hoodie/rsz_hoodie-1.png'
import menHoodie_2 from '@/assets/Mens/hoodie/rsz_hoodie-2.png'
import menHoodie_3 from '@/assets/Mens/hoodie/hoodie-3.jpg';
import menHoodie_4 from '@/assets/Mens/hoodie/hoodie-3.png';
import menHoodie_5 from '@/assets/Mens/hoodie/hoodie-4.jpg';
import menHoodie_6 from '@/assets/Mens/hoodie/rsz_hoodie-4.png';
import menHoodie_7 from '@/assets/Mens/hoodie/philipp-lansing-REOoETloFqE-unsplash.jpg';

const MenHoodie = () => {
    const photos = [
        {
            id: 1,
            photo: menHoodie_1
        },
        {
            id: 2,
            photo: menHoodie_2
        },
        {
            id: 3,
            photo: menHoodie_3
        },
        {
            id: 4,
            photo: menHoodie_4
        },
        {
            id: 5,
            photo: menHoodie_5
        },
        {
            id: 6,
            photo: menHoodie_6
        },
        {
            id: 7,
            photo: menHoodie_7
        }
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Men Hoodie</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default MenHoodie;