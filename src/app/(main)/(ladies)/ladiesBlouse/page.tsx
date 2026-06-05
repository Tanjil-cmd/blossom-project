import ShowImage from '@/components/ShowImage';
import React from 'react';
import ladiesBlouse_1 from '@/assets/Ladies/Ladies Blous/Ladies Blouse-01.jpg';
import ladiesBlouse_2 from '@/assets/Ladies/Ladies Blous/Ladies Blouse-02.jpg';
import ladiesBlouse_3 from '@/assets/Ladies/Ladies Blous/Ladies Blouse-03.jpg';

const LadiesBlouse = () => {
    const photos = [
        {
            id: 1,
            photo: ladiesBlouse_1
        },
        {
            id: 2,
            photo: ladiesBlouse_2
        },
        {
            id: 3,
            photo: ladiesBlouse_3
        },
    ];
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Ladies Blouse</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default LadiesBlouse;