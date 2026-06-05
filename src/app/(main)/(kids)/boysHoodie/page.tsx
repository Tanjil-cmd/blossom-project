import ShowImage from '@/components/ShowImage';
import React from 'react';
import boysHoodie_1 from '@/assets/Kids/Boys-Hoodie/Boy-Hoodie-01.jpg';
import boysHoodie_2 from '@/assets/Kids/Boys-Hoodie/Boy-Hoodie-02.jpg';
import boysHoodie_3 from '@/assets/Kids/Boys-Hoodie/Boy-Hoodie-03.jpg';

const boysHoodie = () => {
    const photos = [
        {
            id: 1,
            photo: boysHoodie_1
        },
        {
            id: 2,
            photo: boysHoodie_2
        },
        {
            id: 3,
            photo: boysHoodie_3
        }
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Boys Hoodie</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default boysHoodie;