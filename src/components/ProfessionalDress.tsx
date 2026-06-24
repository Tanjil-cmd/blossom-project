import Image from 'next/image';
import React from 'react';
// import hoodie_1 from '@/assets/Mens/hoodie/rsz_hoodie-1.png';
// import hoodie_2 from '@/assets/Mens/hoodie/rsz_hoodie-2.png';
// import hoodie_3 from '@/assets/Mens/hoodie/hoodie-3.png';
// import hoodie_4 from '@/assets/Mens/hoodie/hoodie-4.jpg';

const ProfessionalDress = () => {
    // const hoodies = [hoodie_1, hoodie_2, hoodie_3, hoodie_4];
    return (
        <div className='max-w-[1200px] mx-auto px-3 py-10'>
            <h2 className='md:text-3xl text-2xl font-bold'>Timeless elegance and sophistication, crafted for every <br />
                professional and special occasion.</h2>

                {/* <div className='grid md:grid-cols-4 gap-5 mt-4'>
                    {
                        hoodies.map((data, index) => 
                        <div key={index}>
                            <Image
                        className='rounded-xl w-[350px] h-[350px]'
                        src={data} width={500} height={400} alt='hoodie-1'/>
                        </div>
                        )
                    }
                </div> */}
        </div>
    );
};

export default ProfessionalDress;