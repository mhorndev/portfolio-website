import React, { useState, useContext } from "react"
import { motion } from "framer-motion"
import { Context } from "../context"

const Burger = () => {
  const [hover,setHover] = useState(false)
  const {globalContext, setGlobalContext} = useContext(Context)

  return (
    <motion.div 
      id="burger"
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      initial={{rotate: 0}}
      animate={{rotate: globalContext.drawerOpen ? 180 : 0, x: globalContext.drawerOpen ? 2 : 0}}
      onClick={()=>
        setGlobalContext(prev => ({
          ...prev, drawerOpen: !globalContext.drawerOpen
        }))
      }
      transition={{ease:"anticipate"}}
    >
      <div>
        <motion.span
          style={{
            height: "3px",
            borderRadius: "1px",
            backgroundColor: "#000"
          }}
          initial={{
            width: "80%",
            transform: "translateY(0px) rotate(0deg)"
          }}
          animate={{
            width: globalContext.drawerOpen ? "100%" : hover ? "100%" : "80%",
            transform: globalContext.drawerOpen ? "translateY(8px) rotate(45deg)" : "translateY(0px) rotate(0deg)"
          }}
          transition={{ ease: "easeInOut", duration: .25}}
        />

        <motion.span 
          style={{
            height: "3px",
            width: "100%",
            borderRadius: "1px",
            backgroundColor: "#000"
          }}
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: globalContext.drawerOpen ? 0 : 1
          }}
          transition={{ ease: "easeInOut", duration: .25}}
        />

        <motion.span 
          style={{
            height: "3px",
            borderRadius: "1px",
            backgroundColor: "#000"
          }}
          initial={{
            width: "60%",
            transform: "translateY(0px) rotate(0deg)"
          }}
          animate={{
            width: globalContext.drawerOpen ? "100%" : hover ? "100%" : "60%",
            transform: globalContext.drawerOpen ? "translateY(-8px) rotate(-45deg)" : "translateY(0px) rotate(0deg)"
          }}
          transition={{ ease: "easeInOut", duration: .25}}
        />

      </div>
    </motion.div>
  )
}

export default Burger