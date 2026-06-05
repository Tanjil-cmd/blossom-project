import React from 'react';
import boysSweatShirt_1 from '@/assets/Kids/Boys-Sweat-Shirt/Boys-Sweat-Shirt-01.jpg';
import boysSweatShirt_2 from '@/assets/Kids/Boys-Sweat-Shirt/Boys-Sweat-Shirt-02.jpg';
import boysSweatShirt_3 from '@/assets/Kids/Boys-Sweat-Shirt/Boys-Sweat-Shirt-03.jpg';
import ShowImage from '@/components/ShowImage';
const boysSweatShirt = () => {
    const photos = [
        {
            id: 1,
            photo: boysSweatShirt_1
        },
        {
            id: 2,
            photo: boysSweatShirt_2
        },
        {
            id: 3,
            photo: boysSweatShirt_3
        },
    ];
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Boys Sweat Shirt</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default boysSweatShirt;