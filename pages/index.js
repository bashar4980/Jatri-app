import React from 'react';
import Banner from '../Components/Banner';
import Feature from '../Components/Feature';
import Info from '../Components/Info';
import MorningWorkout from '../Components/MorningWorkout';
import Navbar from '../Components/Navbar';
import Program from '../Components/Program';
import Work from '../Components/Work';
import Workout from '../Components/Workout';

const Home = () => {
  return (
    <div className='container mx-auto'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Info></Info>
      <Feature></Feature>
      <Workout></Workout>
      <MorningWorkout></MorningWorkout>
      
      <Work></Work>
      <Program></Program>
    </div>
  );
};

export default Home;