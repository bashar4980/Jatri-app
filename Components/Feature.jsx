import Image from 'next/image'
import React from 'react'

export default function Feature() {
  return (
  
     <div className="mx-[20px] p-6 py-12 bg-[#6462F0] rounded my-[120px]">
	<div className="container mx-auto">
		<div className="grid lg:grid-cols-3 gap-2 justify-items-center">
			<div className='flex items-center  gap-[50px]'>
                    <div  class=" rounded-lg relative bg-[url(https://i.ibb.co/VwcH9QC/bg.png)] bg-cover bg-center bg-no-repeat px-6 py-5">
               <Image className="" src="/crucified-pose.png" height={50} width={50} alt="img" ></Image>
             
               </div>
                <div>
                    <p className='font-bold text-[20px] text-white mb-[16px]'>Get that 11 line<br></br> in 30 days</p>
                    <a className="inline-flex items-center   text-white opacity-50 bg-transparent font-bold">
                    Learn More
                    <svg
                  className="ml-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
                </a>
                </div>
            </div>
			<div className='flex items-center  gap-[30px]'>
                    <div  class="rounded-lg relative bg-[url(https://i.ibb.co/VwcH9QC/bg.png)] bg-cover bg-center bg-no-repeat px-6 py-5">
               <Image className="" src="/dancer-balance-posture-on-one-leg.png" height={50} width={50} alt="img" ></Image>
             
               </div>
                <div>
                    <p className='font-bold text-[20px] text-white mb-[16px]'>14 days<br></br>sherd challenge Get</p>
                    <a className="inline-flex items-center   text-white opacity-50 bg-transparent font-bold">
                    Learn More
                    <svg
                  className="ml-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
                </a>
                </div>
            </div>
			<div className='flex items-center  gap-[30px]'>
                    <div  class=" rounded-lg relative bg-[url(https://i.ibb.co/VwcH9QC/bg.png)] bg-cover bg-center bg-no-repeat px-6 py-5">
               <Image className="" src="/dancer-motion.png" height={50} width={50} alt="img" ></Image>
             
               </div>
                <div>
                    <p className='font-bold text-[20px] text-white mb-[16px]'>flat belly<br></br>in 30 days</p>
                    <a className="inline-flex items-center   text-white opacity-50 bg-transparent font-bold">
                    Learn More
                    <svg
                  className="ml-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
                </a>
                </div>
            </div>
		</div>
	</div>
</div>
   
  )
}
