import React, { useEffect, useState } from "react"
import "../style.css"
import { AnimatePresence } from "framer-motion"
import Navbar from "./navbar"
import { Context } from "../context"
import Transition from "./transition"

const Layout = ({children, location}) => {
  const [globalContext, setGlobalContext] = useState({
    someValue: true,
  })

  useEffect(() => {
    console.log('location changed to ' + location.pathname)
    setGlobalContext(prev => ({
      ...prev, location: location.pathname
    }))
  }, [location])

  return (
    <Context.Provider value={{ globalContext, setGlobalContext }}>
      <main>
        <Navbar/>
        <Transition>
          {children}
        </Transition>
      </main>
    </Context.Provider>
  )
}

export default Layout