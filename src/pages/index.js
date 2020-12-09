import React, { useContext } from "react"
import { Context } from "../context"

const Home = () => {
  const {globalContext, setGlobalContext} = useContext(Context)

  return (
    <div className="full centered">
      Home
    </div>
  )
}

export default Home