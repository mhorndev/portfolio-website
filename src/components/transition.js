import React, { useContext, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Context } from "../context"

const variants = {
  enter: (direction) => {
    return {
      transformOrigin: direction > 0 
      ? "left"
      : "right",
        transform: direction > 0 
          ? "translateX(100%) rotateY(0deg)"
          : "translateX(-100%) rotateY(0deg)"
    }
  },
  center: {
    transformOrigin: "left",
    transform: "translateX(0%) rotateY(0deg)" 
  },
  exit: (direction) => {
    return {
      transformOrigin: direction < 0 
      ? "left"
      : "right",
        transform: direction < 0 
          ? "translateX(100%) rotateY(90deg)"
          : "translateX(-100%) rotateY(-90deg)"
    }
  }
}

const Transition = ({children}) => {
  const {globalContext, setGlobalContext} = useContext(Context)

  function onAnimationComplete() {
    console.log("anim complete")
    setGlobalContext(prev => ({
      ...prev, transitionCompleted: true,
    }))
  }

  return (
    <AnimatePresence 
      initial={false} 
      custom={globalContext.direction}>

      <motion.div
        id="page"
        key={children.key}
        initial="enter"
        animate="center"
        exit="exit"
        variants={variants}
        custom={globalContext.direction}
        onAnimationComplete={onAnimationComplete}
        transition={{ duration: .75, ease: "anticipate" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default Transition