import ShowImage from '@/components/ShowImage';
import React from 'react';
import Girls_Pant_1 from '@/assets/Kids/Girls-Pant/Girls-Pant-01.jpg';
import Girls_Pant_2 from '@/assets/Kids/Girls-Pant/Girls-Pant-02.jpg';
import Girls_Pant_3 from '@/assets/Kids/Girls-Pant/Girls-Pant-03.jpg';

const GirlsPant = () => {
    const photos = [
        {
            id: 1,
            photo: Girls_Pant_1,
        },
        {
            id: 2,
            photo: Girls_Pant_2,
        },
        {
            id: 3,
            photo: Girls_Pant_3,
        },
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Girl’s Pant</h3>
            <ShowImage photos={photos}/>
        </div>
    );
};

export default GirlsPant;