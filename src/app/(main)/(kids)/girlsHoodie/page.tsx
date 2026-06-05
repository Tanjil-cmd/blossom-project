import React from 'react';
import girlsHoodie_1 from '@/assets/Kids/Girls-Hoodie/Girls-Hoodie-01.jpg';
import girlsHoodie_2 from '@/assets/Kids/Girls-Hoodie/Girls-Hoodie-02.jpg';
import girlsHoodie_3 from '@/assets/Kids/Girls-Hoodie/Girls-Hoodie-03.jpg';
import ShowImage from '@/components/ShowImage';

const GirlsHoodie = () => {
    const photos = [
        {
            id: 1,
            photo: girlsHoodie_1
        },
        {
            id: 2,
            photo: girlsHoodie_2
        },
        {
            id: 3,
            photo: girlsHoodie_3
        },
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Girls Hoodie</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default GirlsHoodie;