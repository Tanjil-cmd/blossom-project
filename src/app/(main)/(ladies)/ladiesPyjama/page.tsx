import ShowImage from '@/components/ShowImage';
import React from 'react';
import ladiesPyjama_1 from '@/assets/Ladies/Ladis Pyjama/Ladies Pyjama-01.jpg';
import ladiesPyjama_2 from '@/assets/Ladies/Ladis Pyjama/Ladies Pyjama-02.jpg';
import ladiesPyjama_3 from '@/assets/Ladies/Ladis Pyjama/Ladies Pyjama-03.jpg';
import ladiesPyjama_4 from '@/assets/Ladies/Ladis Pyjama/Ladies Pyjama-04.jpg';
import ladiesPyjama_5 from '@/assets/Ladies/Ladis Pyjama/Ladies Pyjama-05.jpg';

const LadiesPyjama = () => {
    const photos = [
        {
            id: 1,
            photo: ladiesPyjama_1
        },
        {
            id: 2,
            photo: ladiesPyjama_2
        },
        {
            id: 3,
            photo: ladiesPyjama_3
        },
        {
            id: 4,
            photo: ladiesPyjama_4
        },
        {
            id: 5,
            photo: ladiesPyjama_5
        },
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>ladies Pyjama</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default LadiesPyjama;