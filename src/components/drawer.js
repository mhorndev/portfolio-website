import React, { useContext, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Context } from "../context"
import routes from "./routes"

const variants = {
  initial: {
    y: "-100vh"
  },
  animate: {
    y: 0
  },
  exit: {
    y: "-100vh"
  }
}

const Drawer = () => {
  const { globalContext, setGlobalContext } = useContext(Context)

  return (
    <AnimatePresence initial={false}>
      {globalContext.drawerOpen && (
        <motion.div 
          id="drawer"
          key="drawer"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          transition={{ ease: "anticipate", duration: .5 }}
        >
          <div id="drawer-links">
            {routes.map((route,index) => {

                return (
                  <motion.a 
                    key={route.path + index} 
                    href={route.path}
                    initial={{
                      x:-25, 
                      scale: 0.75, 
                      opacity:0
                    }}
                    animate={{
                      x:0, 
                      scale: 1, 
                      opacity:1
                    }}
                    transition={{
                      ease: "easeOut",
                      duration: .25, 
                      delay: .25 + index * .1 
                    }}
                    onClick={e => {
                      e.preventDefault()
                      setGlobalContext(prev => ({
                        ...prev, route: route.path
                      }))
                    }}
                  >
                    {route.label}
                  </motion.a>
                )
              })}
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Drawer