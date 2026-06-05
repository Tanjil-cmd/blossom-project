import ShowImage from '@/components/ShowImage';
import React from 'react';
import menSuit_1 from '@/assets/Mens/Mens Suit/1JBLMB1692-27-1738_2048x.jpg'
import menSuit_2 from '@/assets/Mens/Mens Suit/2-0079476_150_x.jpg';
import menSuit_3 from '@/assets/Mens/Mens Suit/3-il_fullxfull.7173471992_bs1l.jpg';
import menSuit_4 from '@/assets/Mens/Mens Suit/4-bespoke-formal-mens-suits-regular-grey-three-piece-business-suits-ballbella_1024x.jpg';
import menSuit_5 from '@/assets/Mens/Mens Suit/4-modern_fit_suit.jpg';
import menSuit_6 from '@/assets/Mens/Mens Suit/5-61TW9XafrEL._AC_UY1000_.jpg';

const menSuit = () => {
    const photos = [
        {
            id: 1,
            photo: menSuit_1
        },
        {
            id: 2,
            photo: menSuit_2
        },
        {
            id: 3,
            photo: menSuit_3
        },
        {
            id: 4,
            photo: menSuit_4
        },
        {
            id: 5,
            photo: menSuit_5
        },
        {
            id: 6,
            photo: menSuit_6
        }
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>men's Suit</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default menSuit;