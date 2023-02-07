import Image from 'next/image';
import React from 'react';

const Testimonials = () => {
    return (
        <div className='mt-28 mb-28'>
            <h1 className='text-center mb-12 text-5xl'>Testimonials</h1>
            <div className="review_section grid lg:grid-cols-2 place-items-center">
              
            <div className="review1">
              <div className="review_text p-12 text-justify">
              <p className='text-[#262524] opacity-50 text-[16px] mb-14'>
              <q >exercise used to be a boring thing for me, but after following the gymbaran I became fond of sports and sports became my new hobby. I participate in sports 5 times a week.</q>
              </p>
                <div className="flex items-start">
              <span className="p7 flex-shrink-0 ">
                <Image src="/gallery.png" alt="img" width={20} height={20}></Image>
              </span>
      
              <div className="ml-4">
                <h2 className="text-lg font-bold">Suketi Mantapo</h2>
      
                <p className="mt-1 text-sm text-[#262524] opacity-50">
                Designer Graphic
                </p>
              </div>
              </div>
            </div>
               </div>
               <div className="review1">
              <div className="review_text p-12 text-justify">
              <p className='text-[#262524] opacity-50 text-[16px] mb-14'>
              <q >exercise used to be a boring thing for me, but after following the gymbaran I became fond of sports and sports became my new hobby. I participate in sports 5 times a week.</q>
              </p>
                <div className="flex items-start">
              <span className="p7 flex-shrink-0 ">
                <Image src="/gallery.png" alt="img" width={20} height={20}></Image>
              </span>
      
              <div className="ml-4">
                <h2 className="text-lg font-bold">Suketi Mantapo</h2>
      
                <p className="mt-1 text-sm text-[#262524] opacity-50">
                Designer Graphic
                </p>
              </div>
              </div>
            </div>
               </div>
            </div>
        </div>
    );
};

export default Testimonials;