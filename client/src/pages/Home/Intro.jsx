import React, { useEffect, useState } from 'react';

const Intro = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const req = await fetch('http://localhost:3000/api/intro/get-intro');
      if (!req.ok) {
        throw new Error(`HTTP error! status: ${req.status}`);
      }
      const res = await req.json();
      console.log(res);
      setData(res.intro);
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Failed to fetch intro data. Please try again later.');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data.length === 0 ? (
        <div className='text-white'>Loading...</div>
      ) : (
        data.map((intro) => {
          const {
            welcomeText,
            firstName,
            lastName,
            caption,
            description,
            _id,
          } = intro;
          return (
            <div
              className='h-[80vh] bg-primary flex flex-col items-start sm:items-center justify-center gap-8 py-10'
              key={_id}
            >
              <h1 className='text-white'>{welcomeText}</h1>
              <div className='flex items-center gap-2'>
                <h1 className='text-7xl sm:text-3xl sm:text-center text-secondary font-semibold'>
                  {firstName}
                </h1>
                <h1 className='text-7xl sm:text-3xl sm:text-center text-secondary font-semibold'>
                  {lastName}
                </h1>
              </div>
              <h1 className='text-7xl sm:text-xl text-white font-semibold'>
                {caption}
              </h1>
              <p className='text-white sm:text-center'>{description}</p>
              <a href='https://wa.me/+2347050248793' target='_blank'>
                <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>
                  Lets Chat
                </button>
              </a>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Intro;
