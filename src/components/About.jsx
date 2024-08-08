import React from 'react'
import Span from './Span'
import Blob from "/public/blob01.svg";
import AboutIMage from "/public/About.png"
import Image from 'next/image'
const About = () => {
  return (
    <section className='container mx-auto px-4 xl:px-0'>
      <div className="flex items-center justify-center flex-col my-12">
        <Span text={`about us`}/>
        <h2 className="h2 text-center leading-snug font-extrabold">
        best customer experience
        </h2>
      </div>
      <div className="flex items-center justify-center">
      <div className="flex items-center xl:flex-row md:flex-row  flex-col justify-center xl:justify-between xl:items-start xl:gap-24 gap-8 text-center">
        {/* image */}
        <div className="relative flex items-center justify-center">
        <Image src={Blob} width={700} height={700} alt='blob' className='absolute top-0 left-0 rounded-[2rem]'/>
          <Image src={AboutIMage} alt='car image' className='w-[400px] md:w-[1200px] xl:w-full z-10'/>
        </div>
        {/* text */}
        <div className="xl:text-left md:text-left text-left">
          <h3 className='h2 xl:text-6xl text-4xl max-w-[24rem] xl:max-w-[32rem] font-extrabold leading-snug ' >
          why should you <span className="text-orangePrimary">choose</span> us
          </h3>
          <p className="p text-balance text-sm px-2  xl:text-base xl:max-w-[27rem] capitalize">Choose a rental car location near your accommodation or major transport hubs like airports and train stations for convenience, ease of access, and a wider selection of vehicles.</p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default About