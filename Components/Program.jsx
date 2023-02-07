import Image from 'next/image';
import React from 'react';

const Program = () => {
    return (
        <section className="mt-28">
        <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="">
            <h2 className="text-3xl text-center  sm:text-5xl mb-10">Programs that can <br></br>be taken</h2>
      
          </div>
      
          <div
            className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
          >
            <div className="flex items-start">
              <span className="p1 flex-shrink-0 rounded-full bg-gray-800 py-4 px-5">
                <Image src="/Gets.png" alt="img" width={50} height={50}></Image>
              </span>
      
              <div className="ml-4">
                <h2 className="text-lg font-bold">Gets ABS in 2 weeks</h2>
      
                <p className="mt-1 text-sm text-[#262524] opacity-50">
                Exercise is a very important<br></br>need for our body. 
                </p>
              </div>
            </div>
      
            <div className="flex items-start">
              <span className="p2 flex-shrink-0 ">
                <Image src="/man-doing-yoga.png" alt="img" width={50} height={50}></Image>
              </span>
      
              <div className="ml-4">
                <h2 className="text-lg font-bold">25 Mins full body workout</h2>
      
                <p className="mt-1 text-sm text-[#262524] opacity-50">
                Exercise is a very important<br></br>need for our body. 
                </p>
              </div>
            </div>
      
      
            <div className="flex items-start">
              <span className="p3 flex-shrink-0 rounded-full bg-gray-800 py-4 px-5">
                <Image src="/stretching.png" alt="img" width={50} height={50}></Image>
              </span>
      
              <div className="ml-4">
                <h2 className="text-lg font-bold">10 Mins toned arms workout</h2>
      
                <p className="mt-1 text-sm text-[#262524] opacity-50">
                Exercise is a very important<br></br>need for our body. 
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="p4 flex-shrink-0 rounded-full bg-gray-800 py-4 px-5">
                <Image src="/man-doing-yoga-4.png" alt="img" width={50} height={50}></Image>
              </span>
      
              <div className="ml-4">
                <h2 className="text-lg font-bold">15 Mins full body fat burn</h2>
      
                <p className="mt-1 text-sm text-[#262524] opacity-50">
                Exercise is a very important<br></br>need for our body. 
                </p>
              </div>
            </div>

            
            <div className="flex items-start">
              <span className="p5 flex-shrink-0 rounded-full bg-gray-800 py-4 px-5">
                <Image src="/person-practicing-a-strengthen-posture.png" alt="img" width={50} height={50}></Image>
              </span>
      
              <div className="ml-4">
                <h2 className="text-lg font-bold">25 Mins HIIT workout</h2>
      
                <p className="mt-1 text-sm text-[#262524] opacity-50">
                Exercise is a very important<br></br>need for our body. 
                </p>
              </div>
            </div>
      
           
      
          
            <div className="flex items-start">
              <span className="p6 flex-shrink-0 ">
                <Image src="/yoga-posture-.png" alt="img" width={50} height={50}></Image>
              </span>
      
              <div className="ml-4">
                <h2 className="text-lg font-bold">Intense lower Abs workout</h2>
      
                <p className="mt-1 text-sm text-[#262524] opacity-50">
                Exercise is a very important<br></br>need for our body. 
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      
    );
};

export default Program;