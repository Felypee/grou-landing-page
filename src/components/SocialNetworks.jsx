import React from 'react'
import { styles } from '../styles'
import { motion } from "framer-motion";
import { textVariant } from '../utils/motion';
import { socialNetWorks } from '../constants';
import { Link } from 'react-router-dom';
import { SectionWrapper } from '../hoc';

const SocialNetWorks = () => {
  return (
    <section className='w-full flex flex-row justify-center items-center mt-10 gap-5 pb-40'>
   <div className='flex flex-col justify-center items-center gap-4'>
   Contáctame: 
   <div className='flex flex-row justify-center items-center gap-4'>
   {socialNetWorks.map((social, index) => (
        <div   key={`${social.platform}-${index}`} className='flex flex-col justify-center items-center'>
         <a
         
          onClick={() => {
            
            window.open(social.url, '_blank');
          }}
        >

        <img
          src={social.img}
          alt={`${social.platform}`}
          className='w-10 h-10 rounded-full object-contain cursor-pointer'
        />
        </a>
            

        {social.platform}
            </div>
          
     
        ))}
   </div>
   
   </div>
        
   
    </section>
  )
}

export default SectionWrapper(SocialNetWorks,"contact")