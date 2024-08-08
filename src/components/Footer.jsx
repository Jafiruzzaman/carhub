import React from 'react'

const Footer = () => {
  return (
    <footer className='py-3  bg-white  mt-5'>
    <div className="container mx-auto px-4 flex items-center flex-col md:flex-row gap-3  justify-between">
      <p className='md:text-base text-sm'>
      @copyright 2024 | all rights reserved
      </p>
      <p className='md:text-base text-sm'>
      Made with 💖 <span className="text-orangePrimary font-semibold">Tuhin Ahamed</span>
      </p>
    </div>
    </footer>
  )
}

export default Footer