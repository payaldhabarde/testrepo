import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import Home1 from "./Home1"
import Home2 from "./Home2"
import Home3 from "./Home3"
import Home4 from "./Home4"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/payal' element={<Home/>}/>
        <Route path='/sudha' element={<Home1/>}/>
        <Route path='/siya' element={<Home2/>}/>
        <Route path='/abhay' element={<Home3/>}/>
        <Route path='/fahim' element={<Home4/>}/>
      </Routes>
    </div>
  )
}

export default App
