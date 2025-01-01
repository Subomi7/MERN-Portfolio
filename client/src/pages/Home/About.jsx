import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Placeholder from 'react-bootstrap/Placeholder';

const About = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
      const req = await fetch(
        'https://mern-portfolio-qgid.onrender.com/api/about/get-about'
      );
      if (!req.ok) {
        throw new Error(`HTTP error! status: ${req.status}`);
      }
      const res = await req.json();
      console.log(res);
      setData(res.about);
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Failed to fetch intro data. Please try again later.');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=''>
      <SectionTitle title='About' />

      {data.length === 0 ? (
        <>
          <div className='text-white'>
            <Placeholder as='p' animation='glow'>
              <Placeholder xs={12} />
            </Placeholder>
            <Placeholder as='p' animation='wave'>
              <Placeholder xs={12} />
            </Placeholder>
          </div>
        </>
      ) : (
        data.map((about) => {
          const { lottieURL, description1, description2, skills, _id } = about;
          return (
            <div key={_id}>
              <div className='flex items-center w-full gap-10 sm:flex-col'>
                <div className='h-[70vh] w-1/2 sm:w-full'>
                  <DotLottieReact src={lottieURL} autoplay />
                </div>
                <div className='flex flex-col gap-5 w-1/2 sm:w-full'>
                  <p className='text-white'>{description1}</p>
                  <p className='text-white'>{description2}</p>
                </div>
              </div>

              <div className='py-5'>
                <h1 className='text-tertiary text-xl'>
                  Here are a few technologies I've been working with recently:
                </h1>
                <div className='flex flex-wrap justify-between mt-5'>
                  {Array.isArray(skills) ? (
                    skills.map((skill, index) => (
                      <div
                        className='border border-tertiary py-3 px-10'
                        key={index}
                      >
                        <h1 className='text-tertiary'>{skill}</h1>
                      </div>
                    ))
                  ) : (
                    <div className='border border-tertiary py-3 px-10'>
                      <h1 className='text-tertiary'>{skills}</h1>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default About;
