import React from 'react';
import Girls_T_Shirt_1 from '@/assets/Kids/Girls-T-Shirt/Girls-T-Shirt-01.jpg';
import Girls_T_Shirt_2 from '@/assets/Kids/Girls-T-Shirt/Girls-T-Shirt-02.jpg';
import Girls_T_Shirt_3 from '@/assets/Kids/Girls-T-Shirt/Girls-T-Shirt-03.jpg';
import ShowImage from '@/components/ShowImage';

const GirlsTShirt = () => {
    const photos = [
        {
            id: 1,
            photo: Girls_T_Shirt_1
        },
        {
            id: 2,
            photo: Girls_T_Shirt_2
        },
        {
            id: 3,
            photo: Girls_T_Shirt_3
        },
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Girl’s T-Shirt</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default GirlsTShirt;