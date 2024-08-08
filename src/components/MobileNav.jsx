"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import Responsive from './Responsive';

import { IoMdClose } from "react-icons/io";
const MobileNav = () => {
  const [menu,setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  }
  return (
    <header className=''>
      <div className="cursor-pointer" onClick={toggleMenu}>
        {
          menu? <RiMenu3Fill className="text-2xl text-headingPrimary"/> : <IoMdClose  className='text-2xl text-headingPrimary'/>
        }
        <Responsive menu={menu}/>
      </div>
    </header>
  )
}

export default MobileNav