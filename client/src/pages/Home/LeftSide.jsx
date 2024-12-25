import React from 'react';

const LeftSide = () => {
  return (
    <div className='fixed left-0 bottom-0 px-10 sm:static'>
      <div className='flex flex-col items-center'>
        <div className='flex flex-col gap-4 sm:flex-row sm:justify-between'>
          <a href='https://github.com/Subomi7' target='_blank'>
            {' '}
            <i className='ri-github-fill text-gray-400'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/oluwatobiloba-odeyemi-21b60412b/'
            target='_blank'
          >
            {' '}
            <i className='ri-linkedin-fill text-gray-400'></i>
          </a>
          <a href='https://x.com/TobiOdeyemi6' target='_blank'>
            {' '}
            <i className='ri-twitter-x-line text-gray-400'></i>
          </a>
        </div>
        <div className='w-[1px] h-32 bg-[#125f63] sm:hidden'></div>
      </div>
    </div>
  );
};

export default LeftSide;
