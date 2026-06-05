import ShowImage from '@/components/ShowImage';
import React from 'react';
import ladiesPoloShirt_1 from '@/assets/Ladies/Ladies Polo shirt/Ladies Polo Shirt-01.jpg';
import ladiesPoloShirt_2 from '@/assets/Ladies/Ladies Polo shirt/Ladies Polo Shirt-02.jpg';
import ladiesPoloShirt_3 from '@/assets/Ladies/Ladies Polo shirt/Ladies Polo Shirt-03.jpg';
import ladiesPoloShirt_4 from '@/assets/Ladies/Ladies Polo shirt/Ladies Polo Shirt-04.jpg';
import ladiesPoloShirt_5 from '@/assets/Ladies/Ladies Polo shirt/Ladies Polo Shirt-05.jpg';

const LadiesPoloShirt = () => {
    const photos = [
        {
            id: 1,
            photo: ladiesPoloShirt_1
        },
        {
            id: 2,
            photo: ladiesPoloShirt_2
        },
        {
            id: 3,
            photo: ladiesPoloShirt_3
        },
        {
            id: 4,
            photo: ladiesPoloShirt_4
        },
        {
            id: 5,
            photo: ladiesPoloShirt_5
        },
    ]
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Ladies Polo Shirt</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default LadiesPoloShirt;