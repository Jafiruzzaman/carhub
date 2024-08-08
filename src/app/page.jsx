import About from '@/components/About'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import HeroForm from '@/components/HeroForm'
import HowItWorks from '@/components/HowItWorks'
import React from 'react'

const page = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <HeroForm/>
      <HowItWorks/>
      <About/>
    </>
  )
}

export default page
