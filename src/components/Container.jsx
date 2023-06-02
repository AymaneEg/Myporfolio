import React, { useEffect, useState } from 'react'
import Menu from './Menu/Menu'
import 'boxicons'
import About from './About/About'
import Projects from './projects/projects'
import Footer from './Footer/Footer'
import Skills from './skills/skiils'
import Contact from './contact/Contact'

export default function Container() { 

  const [mouselocation , setMouseLocation] = useState({})

  useEffect(()=> {

    const handlemouve = e =>{
      setMouseLocation({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove" , handlemouve) 

    return ()=>{
      window.removeEventListener("mousemove" , handlemouve)
    }
  },  [])

 


  return (

    <>

    <div className='w-full scroll-smooth '>
        <Menu/>
        <div className='Intro'>
            <p>Front-end Developer</p>
           <h1> Aymane <br/> El Guanouni</h1>
            <div className='flex justify-between items-center gap-4 mt-8'>
              <box-icon name='current-location' ></box-icon>
              <p>Tangier , Morocco</p>
            </div>

            <div className='w-28 h-12 absolute bottom-8 border flex justify-center items-center rounded-lg border-black'>
                See More.
            </div>
        </div> 

        <About/>
        <Skills/>
        <Projects/>

         <Contact/>
        <Footer/>

     
    </div>
    {/* <div className='w-4 h-4 absolute top-8 left-28 rounded-full transition-all ease-out bg-customBlack' style={{left : `${mouselocation.x}px` , top : `${mouselocation.y}px` ,  }}>
          
          </div> */}
    </>
  )
}
