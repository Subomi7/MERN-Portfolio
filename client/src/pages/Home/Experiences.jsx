import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { experiences } from '../../resources/experience.jsx';
const Experiences = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  return (
    <div>
      <SectionTitle title='Experience' />
      <div className='flex py-10 items-center justify-between sm:flex-col gap-4'>
        <div className='flex flex-col gap-10 border-l-2 border-[#27dab082] w-1/2 sm:flex-row sm:overflow-x-scroll sm:w-full'>
          {experiences.map((experience, index) => {
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
          <h1 className='text-secondary text-xl'>
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className='text-tertiary text-xl'>
            {experiences[selectedItemIndex].company}
          </h1>
          <p className='text-white'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro quam
            velit sunt aliquid impedit aliquam repellendus cum, autem ad tempora
            debitis eius. Atque quibusdam tempora deserunt eligendi magni
            veritatis vel! Odio excepturi a aspernatur iusto ipsa delectus ad
            suscipit possimus repellendus, accusantium molestiae. Quae, dolore?
            Debitis, cum et dignissimos error aut at facere quaerat temporibus
            harum eum fuga officia nulla. Esse quo nam, harum nostrum illo ex et
            rem quod, vel dolore excepturi perspiciatis nisi sit commodi unde?
            Odit odio dolor maxime ipsa eos at quaerat nobis ipsam dolorem
            beatae! eaque voluptatibus praesentium.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
