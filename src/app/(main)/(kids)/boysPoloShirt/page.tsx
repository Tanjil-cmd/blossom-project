import React from 'react';
import Boys_Polo_Shirt_1 from '@/assets/Kids/Boys-Polo-Shirt/Boys-Polo-Shirt-01.jpg';
import Boys_Polo_Shirt_2 from '@/assets/Kids/Boys-Polo-Shirt/Boys-Polo-Shirt-01.jpg';
import Boys_Polo_Shirt_3 from '@/assets/Kids/Boys-Polo-Shirt/Boys-Polo Shirt-03.jpg';
import ShowImage from '@/components/ShowImage';

const BoysPoloShirt = () => {
    const photos = [
        {
            id: 1,
            photo: Boys_Polo_Shirt_1
        },
        {
            id: 2,
            photo: Boys_Polo_Shirt_2
        },
        {
            id: 3,
            photo: Boys_Polo_Shirt_3
        },
    ];
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Boys Polo Shirt</h3>
            <ShowImage photos={photos} />

        </div>
    );
};

export default BoysPoloShirt;