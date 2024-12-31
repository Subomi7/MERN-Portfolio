import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { CPlaceholder } from '@coreui/react';

// import { experiences } from '../../resources/experience.jsx';
const Experiences = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const req = await fetch(
        'https://mern-portfolio-qgid.onrender.com/api/experience/get-experience'
      );
      if (!req.ok) {
        throw new Error(`HTTP error! status: ${req.status}`);
      }
      const res = await req.json();
      console.log(res);
      setData(res.experience);
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
        <>
          <CPlaceholder xs={6} />
          <CPlaceholder className='w-75' />
          <CPlaceholder style={{ width: '30%' }} />
        </>
      ) : (
        <>
          <SectionTitle title='Experience' />
          <div className='flex py-10 items-center justify-between sm:flex-col gap-4'>
            <div className='flex flex-col gap-10 border-l-2 border-[#27dab082] w-1/2 sm:flex-row sm:overflow-x-scroll sm:w-full'>
              {data.map((experience, index) => {
                const { period, _id } = experience;
                return (
                  <div
                    className='cursor-pointer'
                    key={_id}
                    onClick={() => {
                      setSelectedItemIndex(index);
                    }}
                  >
                    <h1
                      className={`text-xl px-5 ${
                        selectedItemIndex === index
                          ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3'
                          : 'text-white'
                      }`}
                    >
                      {period}
                    </h1>
                  </div>
                );
              })}
            </div>
            <div className='flex flex-col gap-5 w-2/3 sm:w-full'>
              {data.length > 0 && (
                <>
                  <h1 className='text-secondary text-xl'>
                    {data[selectedItemIndex]?.title}
                  </h1>
                  <h1 className='text-tertiary text-xl'>
                    {data[selectedItemIndex]?.company}
                  </h1>
                  <p className='text-white'>
                    {data[selectedItemIndex]?.description}
                  </p>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Experiences;
