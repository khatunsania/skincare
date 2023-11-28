import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './componant/Nav'
import Bars from './componant/Bars'
import Home from './pages/home'
import Footer from './componant/Footer'
function App() {

  return (
    <>
    < Nav />
    < Bars />
    < Home />
    <Footer/>

    </>
  )
}

export default App
