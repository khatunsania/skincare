import React from 'react'
import "../style/Bars.css"
import { Menu } from 'lucide-react';
const Bars = () => {
  return (
    <>
 <div className="navbar">
        <div className="logo">
            <h1>AESTHETIC</h1>
        </div>
        <div className="bars">
          <li>Home</li>
          <li>about</li>
          <li>services</li>
          <li>pages</li>
          <li>news</li>
          <li>contact</li>
         
        </div>
        <div className="btn">
            <button>appoinment</button>
        </div>
        <div className="menu">
          <Menu />
          </div>
    </div>    
    </>
  )
}

export default Bars