import React from 'react'
import Navbaar from './Navbar/Navbaar'
import {Routes,Route} from 'react-router-dom'
import Count from './Counter/Count'
import Color from './Colornn/Color'
import Products from './Producted/Products'


const App = () => {
  return (
    <div>
      <Navbaar></Navbaar>
      <Routes>
        <Route path="/Count" element={<Count/>}/>
        <Route path="/Color" element={<Color/>}/>
        <Route path="/Products" element={<Products/>}/>
      </Routes>
    </div>
  )
}

export default App
