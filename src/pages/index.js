import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import InfoSection from '../components/InfoSection';
import {homeObjOne, homeObjTwo} from '../components/InfoSection/data';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection/>
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Services/>
      {/* <InfoSection {...homeObjThree}/> */}
      <Footer/>
    </>
  
  )
}

export default Home;