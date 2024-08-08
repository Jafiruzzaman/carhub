import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import Span from './Span';
const HowItWorksList = [
  {
      icon:<FaLocationDot />,
      title:"choose a location",
      description:"Choose a rental car location near your accommodation or major transport hubs like airports and train stations for convenience, ease of access, and a wider selection of vehicles."
  },
  {
      icon:<FaCalendarAlt />,
      title:"pick up date",
      description:"Choose a rental car location near your accommodation or major transport hubs like airports and train stations for convenience, ease of access, and a wider selection of vehicles."
  },
  {
      icon:<FaCarSide />,
      title:"Enjoy Ride",
      description:"Choose a rental car location near your accommodation or major transport hubs like airports and train stations for convenience, ease of access, and a wider selection of vehicles."
  },
]
const HowItWorks = () => {
  return (
    <section className='container mx-auto my-12'>
      <div className="text-center mx-auto ">
      <Span text={`how it works`}/>
        <h2 className="text-3xl xl:text-4xl capitalize font-semibold xl:font-bold m-6">
        rent with 3 easy steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8 xl:my-12 ">
          {HowItWorksList.map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md py-8 flex flex-col gap-4 items-center hover:transition-all duration-300 hover:-translate-y-3 cursor-pointer">
              <div className="bg-inputBackground px-6 py-6 text-2xl rounded-full text-orangePrimary">{item.icon}</div>
              <h3 className="text-2xl capitalize text-headingPrimary font-semibold">{item.title}</h3>
              <p className="text-base font-light p px-6 my-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks