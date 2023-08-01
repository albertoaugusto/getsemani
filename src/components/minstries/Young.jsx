import '../../styles/components/young.sass'
import { useState } from 'react';

import {AnimatePresence, motion} from "framer-motion";                                         
import img1 from "../../assets/ministries/slide-youth-1.jpg"
import img2 from "../../assets/ministries/slide-youth-2.jpg"
import img3 from "../../assets/ministries/slide-youth-3.jpg"
import img4 from "../../assets/ministries/slide-youth-4.jpg"
import img5 from "../../assets/ministries/slide-youth-5.jpg"
import img6 from "../../assets/ministries/slide-youth-6.jpg"

const images = [img1, img2, img3, img4, img5, img6]

const variants = {
  initial: direction => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      // scale: 0.5,
    }
  },
  animate: {
    x: 0,
    opacity: 1,
    // scale: 1,
    // transition: 'ease-in',
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: direction => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      // scale: 0.5,
      // transition: 'ease-in',
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }
  },
};

const Young = () => {
  
   const [index, setIndex] = useState(0)
     const [direction, setDirection] = useState(0)

     function nextStep() {
        setDirection(1)
        if (index === images.length - 1) {
        setIndex(0)
        return
        }
        setIndex(index + 1)
     }

     function prevStep() {
        setDirection(-1)
        if (index === 0) {
        setIndex(images.length - 1)
        return
        }
        setIndex(index - 1)
     }
  
  return (
    <div className='container-young'>
        <h4 className='sub-section'>Culto de Jovens<h4/>                                                           </h4>
      <div className='slideshow'>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            variants={variants}
            animate='animate'
            initial='initial'
            exit='exit'
            src={images[index]}
            alt='slides'
            className='slides'
            key={images[index]}
            custom={direction}
          />
        </AnimatePresence>
        <button className='prevButton' onClick={prevStep}>
          <i className="uil uil-angle-left-b"></i>
        </button>
        <button className='nextButton' onClick={nextStep}>
          <i className="uil uil-angle-right-b"></i>
        </button>
      </div>
    </div>
  )
}

export default Young