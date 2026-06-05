import ShowImage from '@/components/ShowImage';
import React from 'react';
import kidsRomper_1 from '@/assets/Kids/Kids-Romper/Kids-Romper-01.jpg';
import kidsRomper_2 from '@/assets/Kids/Kids-Romper/Kids-Romper-02.jpg';
import kidsRomper_3 from '@/assets/Kids/Kids-Romper/Kids-Romper-03.jpg';

const KidsRomper = () => {
    const photos = [
        {
            id: 1,
            photo: kidsRomper_1 
        },
        {
            id: 2,
            photo: kidsRomper_2 
        },
        {
            id: 3,
            photo: kidsRomper_3 
        },
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>kids Romper</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default KidsRomper;