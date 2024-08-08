import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroForm from "@/components/HeroForm";
import HowItWorks from "@/components/HowItWorks";
import { Reviews } from "@/components/Reviews";
import Services from "@/components/Services";
import Subscription from "@/components/Subscription";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <HeroForm />
      <HowItWorks />
      <Services />
      <About />
      <Reviews />
      <Subscription />
      <Footer />
    </>
  );
};

export default page;
