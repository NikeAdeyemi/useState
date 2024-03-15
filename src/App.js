// import React from 'react'
// // import "./App.css"

// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Products from './pages/Products'
// import Contact from './pages/Contact'
// import About from './pages/About'
// import Home from './pages/Home'

// const App = () => {
  

//   return (
//     <>
//       <BrowserRouter>
//     <Routes>
//       <Route path="/" element = {<Home/>}/>
//       <Route path="/about" element = {<About/>}/>
//       <Route path="/contact" element = {<Contact/>}/>
//       <Route path="/products" element = {<Products/>}/>
//     </Routes>
//     </BrowserRouter>
    
//     </>
//   )
// }

// export default App

import React from 'react'
import State from './components/State'
import State2 from './components/State2'

const App = () => {
  return (
    <>
    <State />
    <State2 />
    </>
  )
}

export default App