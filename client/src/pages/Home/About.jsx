import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const About = () => {
  const skills = ['Javascript', 'React', 'Node', 'Express', 'MongoDB'];
  return ( 
    <div className=''>
      <SectionTitle title='About' />
      <div className='flex items-center w-full gap-10 sm:flex-col'>
        <div className='h-[70vh] w-1/2 sm:w-full'>
          <DotLottieReact
            src='https://lottie.host/6636aaa0-4da0-4972-a469-30231ca593f7/ygFp4142oF.lottie'
            autoplay
          />
        </div>
        <div className='flex flex-col gap-5 w-1/2 sm:w-full'>
          <p className='text-white'>
            Hello! My name Is Oluwatobiloba Odeyemi . I enjoy creating things
            that live on the internet. My interest in web development started
            back in 2022 when i decided to try wordpress - turns out using of
            plugins taught me a lot about HTML and CSS.
          </p>
          <p className='text-white'>
            Fast-forward to today, and i have the privilege of working as an
            intern at TechStudio Academy. My main focus these days is building
            accessible, inclusive products and digital experienes at Mentor
            Techies for a variety of clients. Here are a few technologies I've
            been working with recently:{' '}
          </p>
        </div>
      </div>

      <div className='py-5'>
        <h1 className='text-tertiary text-xl'>
          Here are a few technologies I've been working with recently:
        </h1>
        <div className='flex flex-wrap justify-between mt-5'>
          {skills.map((skill, index) => {
            return (
              <div className='border border-tertiary py-3 px-10'>
                <h1 className='text-tertiary'>{skill}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
