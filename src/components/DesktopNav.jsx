import Link from 'next/link'
import React from 'react'
import Button from './Button'

const navLinks = [
  {
    name:"home",
    path:"",
  },
  {
    name:"ride",
    path:"",
  },
  {
    name:"services",
    path:"",
  },
  {
    name:"about",
    path:"",
  },
  {
    name:"contact",
    path:"",
  },
]
const DesktopNav = () => {
  return (
    <nav className='flex items-center gap-6'>
      {
        navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={`text-lg capitalize text-headingPrimary hover:text-orangePrimary`}
          >
            {link.name}
          </Link>
        ))
      }
      {/* button */}
      <div className="flex items-center gap-3">
        <Button btnText={`sign up`} btnStyle={`border border-2 border-headingPrimary rounded-full font-medium hover:bg-orangePrimary hover:border-orangePrimary hover:text-white`}/>
        <Button btnText={`log in`} btnStyle={`hover:bg-transparent  hover:border-orangePrimary hover:text-headingPrimary border border-2  border-orangePrimary bg-orangePrimary text-white font-medium rounded-full`}/>
      </div>
    </nav>
  )
}

export default DesktopNav