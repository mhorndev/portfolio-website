import React, { useContext } from "react"
import Brand from "./brand"
import Burger from "./burger"
import { Context } from "../context"
import { AnimatePresence, motion } from "framer-motion"

const variants = {
  initial: {
    y: "-60px"
  },
  animate: {
    y: 0
  },
  exit: {
    y: "-60px"
  }
}

const Navbar = () => {
  const { globalContext, setGlobalContext } = useContext(Context)

  return (
    <AnimatePresence initial={false}>
      {globalContext.navbarOpen && (
        <motion.div 
          id="navbar"
          key="navbar"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          transition={{ ease: "anticipate", duration: .5 }}
        >
          <nav>
            <Brand/>
            <Burger/>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Navbar

/*
          <Burger/>

          {routes.map((route,index) => {
            return(
              <a 
                key={route.path} 
                href={route.path}
                onClick={e => globalContext.navigate(e,route.path)}
              >
                {route.label}
              </a>
            )
          })}
*/

