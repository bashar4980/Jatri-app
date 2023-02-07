import React from "react";
import { FaFacebookMessenger, FaInstagram , FaLinkedin , FaTwitterSquare , FaDribbble} from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer aria-label="Site Footer" className="bg-[#1C3764] rounded">
        <div className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-4">
            
          <div>
          <a className="text-[20px]"><span className="bg-[#6765F0] rounded-lg text-white  pb-1 px-1 items-center">Gym</span><span className="text-[#6765F0]"> baran</span></a>
          <p className="text-[18px] text-white opacity-60 my-7">We take care of your health with regular and fun exercise</p>
          <div className="social_icon flex gap-2 text-indigo-100">
          <FaFacebookMessenger/>
          <FaDribbble/>
          <FaInstagram></FaInstagram>
          <FaLinkedin></FaLinkedin>
          <FaTwitterSquare></FaTwitterSquare>
          </div>
        
        
        </div>


        <div>
          <p className="font-bol text-[18px] text-[#F0F6FF]">Program</p>

          <nav aria-label="Footer Navigation - Services" className="mt-6">
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="text-white opacity-50 text-[18px] transition hover:opacity-75">
                 Workout
                </a>
              </li>
              <li>
                <a href="#" className="text-white opacity-50 text-[18px] transition hover:opacity-75">
                 Gym
                </a>
              </li>
              <li>
                <a href="#" className="text-white opacity-50 text-[18px] transition hover:opacity-75">
                Cardio
                </a>
              </li>

              <li>
                <a href="#" className="text-white opacity-50 text-[18px] transition hover:opacity-75">
                 Zumba
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <p className="font-bol text-[18px] text-[#F0F6FF]">Blog</p>

          <nav aria-label="Footer Navigation - Services" className="mt-6">
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="text-white opacity-50 text-[18px] transition hover:opacity-75">
                Daily stretch
                </a>
              </li>
              <li>
                <a href="#" className="text-white opacity-50 text-[18px] transition hover:opacity-75">
                 Daily workout
                </a>
              </li>
             
            </ul>
          </nav>
        </div>

        <div>
          <p className="font-bol text-[18px] text-[#F0F6FF]">About Us</p>

          <nav aria-label="Footer Navigation - Services" className="mt-6">
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="text-white opacity-50 text-[18px] transition hover:opacity-75">
                 Supoort
                </a>
              </li>
              <li>
                <a href="#" className="text-white opacity-50 text-[18px] transition hover:opacity-75">
                Contract
                </a>
              </li>
              <li>
                <a href="#" className="text-white opacity-50 text-[18px] transition hover:opacity-75">
               Adress
                </a>
              </li>
            </ul>
          </nav>
        </div>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
