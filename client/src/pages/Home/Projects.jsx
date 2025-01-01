import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { projects } from '../../resources/projects';
import Placeholder from 'react-bootstrap/Placeholder';

const Projects = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const req = await fetch(
        'https://mern-portfolio-qgid.onrender.com/api/projects/get-projects'
      );
      if (!req.ok) {
        throw new Error(`HTTP error! status: ${req.status}`);
      }
      const res = await req.json();
      console.log(res);
      setData(res.project);
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
      <SectionTitle title='Projects' />

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
          <div className='flex py-10 items-center justify-between sm:flex-col gap-4'>
            <div className='flex flex-col gap-10 border-l-2 border-[#27dab082] w-1/2 sm:flex-row sm:overflow-x-scroll sm:w-full'>
              {data.map((project, index) => {
                const { title, _id } = project;
                return (
                  <div
                    className='cursor-pointer py-4'
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
                      {title}
                    </h1>
                  </div>
                );
              })}
            </div>

            <div className='flex items-center justify-center gap-10 sm:flex-col py-5 w-2/3 sm:w-full'>
              {data.length > 0 && (
                <>
                  <img
                    src={data[selectedItemIndex]?.image}
                    className='h-60 w-64 cursor-pointer'
                  />

                  <div className='flex flex-col gap-5 w-2/3 sm:w-full'>
                    <h1 className='text-secondary text-xl'>
                      {data[selectedItemIndex]?.title}
                    </h1>
                    <p className='text-white'>
                      {data[selectedItemIndex]?.description}
                    </p>
                    <a
                      href={data[selectedItemIndex]?.link}
                      target='_blank'
                      alt='Click me'
                    >
                      <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>
                        View Site
                      </button>
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
