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

  console.log(children)
  return (
    <AnimatePresence initial={false} custom={globalContext.direction}>
      <motion.div
        id="page"
        key={children.key}
        custom={globalContext.direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: .75 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default Transition