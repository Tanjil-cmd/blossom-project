import Image, { StaticImageData } from 'next/image';
import React from 'react';
type PhotoItem = {
  id: number;
  photo: StaticImageData;
};

const ShowImage = ({ photos }:{photos: PhotoItem[]}) => {
    return (
        <div className='grid
        gap-4 px-4 mt-6
        md:grid-cols-3 max-w-[1200px] mx-auto'>
            {
                photos.map(singleData => 
                    <div key={singleData.id}>
                        <Image
                        src={singleData.photo} 
                        width={300} height={200}
                        className='w-[350px]
                        rounded-xl bg-transparent
                        h-[400px]'
                        alt='dress' />
                    </div>
                )
            }
        </div>
    );
};

export default ShowImage;