import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png';

const Logo = () => {
    return (
        <div className='flex gap-3'>
            <Image src={logo} height={40} width={40} alt='logo'></Image>
            <h3 className="text-2xl font-bold">BLOSSOM <span className='text-[#ff6502]'>TEX</span> BD</h3>
        </div>
    );
};

export default Logo;