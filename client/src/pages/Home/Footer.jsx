import React from 'react'

const Footer = () => {
  return (
    <div className='py-10'>
        <div className='h-[1px] w-full bg-gray-700'></div>
        <div className="flex flex-col items-center justify-center mt-10">
            <h1 className="text-white">
                Designed and developed by
            </h1>
            <h1 className="text-white">
                <span className='text-tertiary'>Odeyemi Oluwatobiloba</span>
            </h1>
        </div>
    </div>
  )
}

export default Footer