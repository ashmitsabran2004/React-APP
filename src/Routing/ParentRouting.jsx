import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import DataFIle from './DataFIle'

const ParentRouting = () => {

  const aboutData = {
    compName: "Infosys",
    Locationcomp: "Bangalore",
    Work: "Full Stack"
  }
  return (
    <div>
        <BrowserRouter>
        <div><Link to='/home'>Home</Link></div>
        <div><Link to='/datafile?name=Harsh&regno=12318384'>Data</Link></div>
        <div><Link to='/about' name={{compName:"Infosys"}}>About</Link></div>
        <div><Link to='/contact'>Contact</Link></div>

        <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/datafile' element={<DataFIle/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>

        </BrowserRouter>
    </div>
  )
}

export default ParentRouting
