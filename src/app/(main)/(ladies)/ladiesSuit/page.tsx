import React from 'react';
import ladiesSuit_1 from '@/assets/Ladies/Ladies Suit/Ladies suit -01.avif';
import ladiesSuit_2 from '@/assets/Ladies/Ladies Suit/Ladies suit -02.avif';
import ladiesSuit_3 from '@/assets/Ladies/Ladies Suit/Ladies suit -03.avif';
import ShowImage from '@/components/ShowImage';

const LadiesSuit = () => {
    const photos = [
        {
            id: 1,
            photo: ladiesSuit_1
        },
        {
            id: 2,
            photo: ladiesSuit_2
        },
        {
            id: 3,
            photo: ladiesSuit_3
        },
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Ladies Suit</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default LadiesSuit;