import React from 'react';
import Header from '../../components/Header';
import Intro from './Intro';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import LeftSide from './LeftSide';

const Home = () => {
  return (
    <div className='bg-primary'>
      <Header />
      <div className='px-40 sm:px-5'>
        <Intro />
        <About />
        <Experiences />
        <Projects />
        <Contact />
        <Footer />
        <LeftSide />
      </div>
    </div>
  );
};

export default Home;
