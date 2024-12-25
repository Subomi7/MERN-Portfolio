import React from 'react';

const Intro = () => {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start sm:items-center justify-center gap-8 py-10'>
      <h1 className='text-white'>Hi, I am</h1>
      <h1 className='text-7xl sm:text-3xl sm:text-center  text-secondary font-semibold'>
        Oluwatobiloba Odeyemi Peter
      </h1>
      <h1 className='text-7xl sm:text-xl text-white font-semibold'>
        I build things for the web.
      </h1>
      <p className='text-white sm:text-center'>
        I am a Fullstack Web Developer / Instructor . Currently I am working as
        a React Developer In Nigeria. Also sharing my knowledge to the students
        that i have gained in my career through online teaching across the world
      </p>
      <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>Get Started</button>
    </div>
  );
};

export default Intro;
