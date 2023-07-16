import React from 'react'
import { styles } from '../styles'
import { motion } from "framer-motion";
import { textVariant } from '../utils/motion';
import { androidIcon, appleIcon } from '../assets';

const LastAction = () => {
  return (
    <section className='w-full flex flex-col justify-center items-center mt-10 gap-5 pb-10'>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
        ¡La diversión comienza con un click!
        </p>
      </motion.div>
      <div className={`w-full ${styles.paddingX} flex flex-row items-center justify-center gap-5`}>
          <button className=" w-[40%] max-w-[400px] bg-yellow-500 hover:bg-yellow-600 rounded-lg p-4 text-center text-white transition-colors duration-300 hover:text-black transform hover:scale-105 ">
              Descargar para<br/> <div className="flex flex-row  justify-center items-start gap-1" >Android  <img src={androidIcon} alt='android-icon' height={20} width={20}/></div> 
          </button>
          <button className=" w-[40%] max-w-[400px] bg-yellow-500 hover:bg-yellow-600 rounded-lg p-4 text-center text-white transition-colors duration-300 hover:text-black transform hover:scale-105  ">
              Descargar para<br/> <div className="flex flex-row  justify-center items-start gap-1" >IOS <img src={appleIcon} alt='apple-icon' height={20} width={20}/></div>
              
              
              
          </button>
        </div>
    </section>
  )
}

export default LastAction