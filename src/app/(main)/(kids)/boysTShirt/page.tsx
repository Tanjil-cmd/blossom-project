import React from 'react';
import boys_T_shirt_1 from '@/assets/Kids/Boys-T-Shirt/Boys-T-Shirt-01.jpg';
import boys_T_shirt_2 from '@/assets/Kids/Boys-T-Shirt/Boys-T-Shirt-02.jpg';
import boys_T_shirt_3 from '@/assets/Kids/Boys-T-Shirt/Boys-T-Shirt-03.jpg';
import boys_T_shirt_4 from '@/assets/Kids/Boys-Hoodie/hoodie.png';
import Image, { StaticImageData } from 'next/image';
import ShowImage from '@/components/ShowImage';

type PhotoItem = {
  id: number;
  photo: StaticImageData;
};

const BoysTShirt = () => {
    const photos: PhotoItem[] = [
        {
            id: 1,
            photo: boys_T_shirt_1
        },
        {
            id: 2,
            photo: boys_T_shirt_2
        },
        {
            id: 3,
            photo: boys_T_shirt_3
        }
    ];

    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Boy’s T-Shirt</h3>
            <ShowImage photos={photos} />
        </div>
    );
};

export default BoysTShirt;