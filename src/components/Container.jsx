import React from 'react'
import Menu from './Menu/Menu'
import 'boxicons'
import About from './About/About'
import Projects from './projects/projects'
import Footer from './Footer/Footer'

export default function Container() {
  return (

    <div className='w-full'>
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

        {/* <About/> */}
        <Projects/>
        <Footer/>
    </div>
  )
}
