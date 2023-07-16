import React, {useRef, useEffect} from 'react'

import { styles } from '../styles'
import Lottie from "lottie-react";
import people from '../assets/people.json'
import { SectionWrapper } from '../hoc';
import { androidIcon, appleIcon } from '../assets';

const Hero = () => {

  return (
    <section className={` flex flex-row justify-center items-center w-full h-screen py-15  gap-5`}>
      <div className='flex flex-col justify-center items-center lg:items-center gap-5'>
        <div className={`w-full h-600 flex flex-wrap justify-center items-center  `}>
          <div className={` top-[120px]  max-w-7xl  ${styles.paddingX} flex flex-col items-start gap-5`}>
            <h1 className={`${styles.sectionHeadText}  w-full text-white  text-center `} >¡Aprende inglés creando y jugando!</h1>
            <p className={`${styles.sectionSubText}   w-full mt-2 text-white-100  text-center`}>
                ¡Una app donde aprendes en vivo con otras personas, juegas con ell@s, ganas puntos
                y creas actividades para que los demás te conozcan!
            </p>
          </div>
          <Lottie animationData={people} loop={true}  className='max-w-sm' />
        </div>
          
        <div className={`w-full ${styles.paddingX} flex flex-row items-center justify-center gap-5`}>
          <button className=" w-[40%] max-w-[400px] bg-yellow-500 hover:bg-yellow-600 rounded-lg p-4 text-center text-white transition-colors duration-300 hover:text-black transform hover:scale-105 ">
              Descargar para<br/> <div className="flex flex-row  justify-center items-start gap-1" >Android  <img src={androidIcon} alt='android-icon' height={20} width={20}/></div> 
          </button>
          <button className=" w-[40%] max-w-[400px] bg-yellow-500 hover:bg-yellow-600 rounded-lg p-4 text-center text-white transition-colors duration-300 hover:text-black transform hover:scale-105  ">
              Descargar para<br/> <div className="flex flex-row  justify-center items-start gap-1" >IOS <img src={appleIcon} alt='apple-icon' height={20} width={20}/></div>
              
              
              
          </button>
        </div>
      </div>
   
      
      
    
    </section>
  )
}

export default SectionWrapper(Hero,"what")