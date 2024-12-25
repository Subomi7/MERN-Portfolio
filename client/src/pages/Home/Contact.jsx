import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Contact = () => {
  const user = {
    name: 'Oluwatobiloba Odeyemi',
    email: 'petertob01@gmail.com',
    gender: 'Male',
    pronoun: 'he/him',
    mobile: '+2347050248793',
    country: 'Nigeria',
  };
  return (
    <div>
      <SectionTitle title='Say Hello' className='text-nowrap' />

      <div className='flex sm:flex-col-reverse items-center justify-between'>
        <div className='flex flex-col gap-1'>
          <p className='text-tertiary'>{'{'}</p>
          {Object.keys(user).map((key) => (
            <p className='ml-5'>
              <span className='text-tertiary'>{key} : </span>
              <span className='text-tertiary'>{user[key]}</span>
            </p>
          ))}
          <p className='text-tertiary'>{'}'}</p>
        </div>
        <div className='h-[300px]'>
          <DotLottieReact
            src='https://lottie.host/4d87fe41-3d23-4dfe-9bca-eb4918a4437f/Pj2GjVxL2E.lottie'
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
