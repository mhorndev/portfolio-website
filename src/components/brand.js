import React, { useContext } from "react"
import { Context } from "../context"

const Brand = () => {
  const { globalContext, setGlobalContext } = useContext(Context)
  
  return (
    <svg 
      id="brand"
      width="25" 
      height="25"
      fill="#000"
      viewBox="0 0 40 40"
      onClick={e => {
        e.preventDefault()
        setGlobalContext(prev => ({
          ...prev, route: "/"
        }))
      }}
    >
      <path 
      d="M 24.056 29.841 L 20.021 40 L 8.001 9.947 
      L 12.029 0 Z M 21.903 15.264 L 28.025 0.041 L 
      40 29.943 L 32.09 30.035 L 27.964 19.872 L 
      25.848 25.23 Z M 6.173 14.686 L 10.153 24.625 
      L 7.971 29.948 L 0 30.002 Z"/>
    </svg>
  )
}

export default Brand