import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Placeholder from 'react-bootstrap/Placeholder';

const Contact = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const req = await fetch(
        'https://mern-portfolio-qgid.onrender.com/api/contact/get-contact'
      );
      if (!req.ok) {
        throw new Error(`HTTP error! status: ${req.status}`);
      }
      const res = await req.json();
      console.log(res);
      setData(res.contact);
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Failed to fetch intro data. Please try again later.');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // const user = {
  //   name: 'Oluwatobiloba Odeyemi',
  //   email: 'petertob01@gmail.com',
  //   gender: 'Male',
  //   pronoun: 'he/him',
  //   mobile: '+2347050248793',
  //   country: 'Nigeria',
  // };

  return (
    <div>
      <SectionTitle title='Say Hello' className='text-nowrap' />

      {data.length === 0 ? (
        <>
          <Placeholder as='p' animation='glow'>
            <Placeholder xs={12} />
          </Placeholder>
          <Placeholder as='p' animation='wave'>
            <Placeholder xs={12} />
          </Placeholder>
        </>
      ) : (
        <>
          <div className='flex sm:flex-col-reverse items-center justify-between'>
            <div className='flex flex-col gap-1'>
              <p className='text-tertiary'>{'{'}</p>
              {data.map((contact) => {
                const { name, email, gender, pronoun, mobile, country, _id } =
                  contact;
                return (
                  <div key={_id}>
                    <p className='ml-5'>
                      <span className='text-tertiary'>name : </span>
                      <span className='text-tertiary'>{name}</span>
                    </p>
                    <p className='ml-5'>
                      <span className='text-tertiary'>email : </span>
                      <span className='text-tertiary'>{email}</span>
                    </p>
                    <p className='ml-5'>
                      <span className='text-tertiary'>gender : </span>
                      <span className='text-tertiary'>{gender}</span>
                    </p>
                    <p className='ml-5'>
                      <span className='text-tertiary'>pronoun : </span>
                      <span className='text-tertiary'>{pronoun}</span>
                    </p>
                    <p className='ml-5'>
                      <span className='text-tertiary'>mobile : </span>
                      <span className='text-tertiary'>{mobile}</span>
                    </p>
                    <p className='ml-5'>
                      <span className='text-tertiary'>country : </span>
                      <span className='text-tertiary'>{country}</span>
                    </p>
                  </div>
                );
              })}

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
        </>
      )}
    </div>
  );
};

export default Contact;
