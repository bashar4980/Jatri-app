import React from 'react';
import Banner from '../Components/Banner';
import Feature from '../Components/Feature';
import Footer from '../Components/Footer';
import Info from '../Components/Info';
import MorningWorkout from '../Components/MorningWorkout';
import Navbar from '../Components/Navbar';
import Program from '../Components/Program';
import Testimonials from '../Components/Testimonials';
import Work from '../Components/Work';
import Workout from '../Components/Workout';

const Home = () => {
  return (
    <div >
    
      <Banner></Banner>
     <div className='container  mx-auto'>
     <Info></Info>
      <Feature></Feature>
      <Workout></Workout>
      <MorningWorkout></MorningWorkout>
      
      <Work></Work>
      <Program></Program>
      <Testimonials></Testimonials>
      <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;