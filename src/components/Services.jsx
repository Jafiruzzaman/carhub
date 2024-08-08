import React from 'react'
import Span from './Span'
import imageOne from "/public/cars/car-image-01.png"
import imageTwo from "/public/cars/car-image-02.png"
import imageThree from "/public/cars/car-image-03.png"
import imageFour from "/public/cars/car-image-04.png"
import imageFive from "/public/cars/car-image-05.png"
import imageSix from "/public/cars/car-image-06.png"
import Image from 'next/image'
import Button from './Button'
const carsInfoList = [
  {
      image:imageOne,
      name:"BMW 3 Series (330i)",
      description:"",
      price:"$41,450",
      monthlyPrice:"$360",
      releaseYear:"2022",
  },
  {
      image:imageTwo,
      name:"1990 old vintage car",
      description:"",
      price:"$36,000",
      monthlyPrice:"$360",
      releaseYear:"1990",
  },
  {
      image:imageThree,
      name:"2018 honda clivic",
      description:"",
      price:"$46,870",
      monthlyPrice:"$360",
      releaseYear:"2018",
  },
  {
      image:imageFour,
      name:"Mercedes-Benz S-Class (S 580)",
      description:"",
      price:"$55,360",
      monthlyPrice:"$360",
      releaseYear:"2020",
  },
  {
      image:imageFive,
      name:"Jeep Grand Cherokee (Laredo)",
      description:"",
      price:"$37,330",
      monthlyPrice:"$360",
      releaseYear:"2021",
  },
  {
      image:imageSix,
      name:"Range Rover Velar (R-Dynamic S)",
      description:"",
      price:"$58,300",
      monthlyPrice:"$360",
      releaseYear:"2024",
  },
]
const Services = () => {
  return (
    <section className='my-12 xl:my-24 container mx-auto'>
      <div className="flex items-center justify-center flex-col">
        <Span text={`best services`}/>
        <h2 className="h2 max-w-[24rem] xl:max-w-[38rem] text-center leading-snug font-extrabold">
        explore our top deals
        from top rated dealers
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {
          carsInfoList.map((item,index)=>{
            return(
              <div className="bg-white rounded-xl px-4 xl:py-4 py-4 grid gap-4 hover:cursor-pointer hover:shadow-md" key={index}>
                <div className="text-center mx-auto w-full">
                  <Image src={item.image} alt='car image' className='rounded-lg w-full bg-cover'/>
                </div>
                  <div className="flex flex-col gap-1 items-start">
                  <Span text={item.releaseYear}/>
                <h3 className="text-xl text-headingPrimary font-semibold my-3 capitalize">{item.name}</h3>
                <div className="flex items-center gap-1">
                  <span className="text-orangePrimary text-2xl font-bold">{item.price}</span>
                  <span className="text-gray-600 font-medium">{item.monthlyPrice} <span className="text-textPrimary">/monthly</span></span>
                </div>
                <Button btnText={`rent now`} btnStyle={`bg-orangePrimary w-full my-3 text-white capitalize font-medium`} />
                  </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Services