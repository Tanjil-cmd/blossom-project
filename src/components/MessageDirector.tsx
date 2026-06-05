import React from 'react';
import Logo from './Logo';

const MessageDirector = () => {
    return (
        <section 
        className='max-w-[1200px]
        grid md:grid-cols-2 gap-4
        px-4 py-6 mb-3 mx-auto'>
            <div 
            className='bg-white md:h-[400px] flex justify-center items-center rounded-xl'>
                <Logo />
            </div>

            <div>
                <h3
                className='md:text-3xl text-2xl font-bold mb-3'
                >message from the Managing <br /> Director</h3>
                <p>The continuous improvement of the quality and service are the main goal of our company. We fight hard to do better than what we have done yesterday. Our vision is to be the top preferred supplier of the global brands. Our production facilities are totally eco friendly & green. So, we can avoid the carbon footprint in the environment.<strong>Blossom tex BD</strong> success lies in the empowerment of the people. We nurture them to take the challenges from every corner.</p>
                <p>OUR SERVICES</p>
                <p>Sourcing certified qualityful factory for qualityful production</p>
                <p>Sourcing good quality fabrics supplier</p>
                <p>Developing Accessories, Print, Embroidery, Wash etc.</p>
                <p>Developing all kind of samples in time</p>
                <p>Following up production for timely delivery</p>
                <p>Doing every day inline report for quality control</p>
                <p>Performing final inspection</p>
                <p>Following up shipment & documentation</p>
                <p>Ensuring certification like BSCI, EIA, OEKOTEX, WRAP, GOTS, ACCORD, ALLIANCE, RSC, SEDEX, ISO-9001;2008 etc. As per buyer requirements.</p>
            </div>
        </section>
    );
};

export default MessageDirector;