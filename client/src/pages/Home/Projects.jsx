import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { projects } from '../../resources/projects';

const Projects = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <div>
      <SectionTitle title='Projects' />
      <div className='flex py-10 items-center justify-between sm:flex-col gap-4'>
        <div className='flex flex-col gap-10 border-l-2 border-[#27dab082] w-1/2 sm:flex-row sm:overflow-x-scroll sm:w-full'>
          {projects.map((project, index) => {
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
          <a href={projects[selectedItemIndex].link} target='_blank'>
            <img
              src={projects[selectedItemIndex].image}
              className='h-60 w-64 cursor-pointer'
            />
          </a>
          <div className='flex flex-col gap-5 w-2/3 sm:w-full'>
            <h1 className='text-secondary text-xl'>
              {projects[selectedItemIndex].title}
            </h1>
            <p className='text-white'>
              {projects[selectedItemIndex].description}
            </p>
            <p className='text-white'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              quam velit sunt aliquid impedit aliquam repellendus cum, autem ad
              tempora debitis eius. Atque quibusdam tempora deserunt eligendi
              magni veritatis vel! Odio excepturi a aspernatur iusto ipsa
              delectus ad suscipit possimus repellendus, accusantium molestiae.
              Quae, dolore? Debitis, cum et dignissimos error aut at facere
              quaerat temporibus harum eum fuga officia nulla.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
