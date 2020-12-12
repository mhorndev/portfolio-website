import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"
import { Context } from "../context"
import Transition from "./transition"
import routes from "./routes"
import Navbar from "./navbar"
import Drawer from "./drawer"
import "../style.css"

const Layout = ({children, location}) => {
  const [globalContext, setGlobalContext] = useState({
    routes: routes,
    navbarOpen: true,
    drawerOpen: false,
    transitionCompleted: true,
  })

  function onNavigate() {
    if (globalContext.route && globalContext.route !== location.pathname) {
      {/** findIndex needs polyfill for older versions of IE */}
      let curr = routes.findIndex(obj => obj.path === location.pathname)
      let next = routes.findIndex(obj => obj.path === globalContext.route)

      setGlobalContext(prev => ({ ...prev, 
        drawerOpen:false, 
        navbarOpen: false,
        transitionCompleted: false,
        direction: next > curr ? 1 : -1
      }))

      setTimeout(() => {
        navigate(globalContext.route)
      }, 500)
    }
  }

  function onTransition() {
    if (globalContext.transitionCompleted) {
      setTimeout(() => {
        setGlobalContext(prev => ({
          ...prev, navbarOpen: true,
        }))
      }, 250)
    }
  }

  function onLocation() {
    setGlobalContext(prev => ({
      ...prev, location: location,
    }))
  }

  useEffect(() => onLocation(), [location])
  useEffect(() => onNavigate(), [globalContext.route])
  useEffect(() => onTransition(), [globalContext.transitionCompleted])

  return (
    <Context.Provider value={{ globalContext, setGlobalContext }}>
      <main>
        <Navbar/>
        <Drawer/>
        <Transition>{children}</Transition>
      </main>
    </Context.Provider>
  )
}

export default Layout