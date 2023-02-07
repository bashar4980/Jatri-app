import Image from "next/image";
import React from "react";

export default function Work() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center ">
        

          <div className=" lg:order-last ">
            <h2 className="text-3xl sm:text-5xl ">
            How it works?
            </h2>
            
             <div className="mb-4 mt-8 shadow-[0_20px_80px_-15px_rgba(51,78,123,0.3)] hover:shadow-2xl  rounded-lg">
             <p className="py-8 text-[18px] ml-8 ">The body becomes sick because of rarely exercise</p>
             </div>
             <div className=" mb-4 shadow-[0_20px_80px_-15px_rgba(51,78,123,0.3)] hover:shadow-2xl  rounded-lg">
             <p className="py-8 text-[18px] ml-8 ">Don`t give up in order to get a healthy and ideal body</p>
             </div>
             <div className="shadow-[0_20px_80px_-15px_rgba(51,78,123,0.3)] hover:shadow-2xl  rounded-lg">
             <p className="py-8 text-[18px] ml-8 ">Become addicted to the exercise that is given</p>
             </div>

           
          </div>
          <div className="mx-auto max-w-xl">
          <Image src="/Feature3.png" alt="fearure_img" width={570} height={496}></Image>
          </div>
        </div>
      </div>
    </section>
  );
}
