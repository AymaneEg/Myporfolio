import React, { useEffect, useState } from 'react'
import cv from './ElGuanouniAymane.pdf'

export default function Menu() {

  const [openMenu , setOpenMenu] = useState(false);  
  
  useEffect(()=> {
    window.addEventListener("scroll" , ()=> {
      setOpenMenu(false)
    })
  } , [])


  const scroll =  id =>{
    const element = document.getElementById(id)
    console.log(element)
    element.scrollIntoView()
  }

  return (
     <div className='w-full fixed bg-white z-20 top-0 left-0  h-20 flex justify-between items-center px-8 lg:px-20 '>
        <div>
            <h1 className='text-xl cursor-pointer transition-all hover:font-bold' onClick={()=> scroll('Intro')}>Aymane <span className='font-bold'>{`</>`}</span></h1>
        </div>

        <div className={openMenu ? 'MenuContainer active' : 'MenuContainer'} >
            <ul className='MenuItems'>
                <li onClick={()=> scroll('About')}>About</li>
                <li onClick={()=> scroll('Skills')}> Skills</li>
                <li onClick={()=> scroll('ProjectsContainer')}> Projects</li>
                <li onClick={()=> scroll('Contact')}>Contact</li>
                <a href={cv} >
                  <button className='DownloadBtn' onClick={()=> console.log('dd')}>Download cv</button>
                </a>
            </ul>

            <div className='absolute top-8 right-8 cursor-pointer ' style={{display : openMenu ? "flex" : "none"}} onClick={()=>setOpenMenu(false)}>
              <box-icon name='x' ></box-icon>
            </div>
        </div>

        <div className='absolute right-10 mt-2 cursor-pointer lg:hidden ' onClick={()=>setOpenMenu(true)} >
           <box-icon name='menu' className='cursor-pointer' ></box-icon>
        </div>

        <div className='absolute top-0 left-0 w-full h-screen bg-MenuBlack transition-all' style={{display : openMenu ? "flex" : "none"}} onClick={()=>setOpenMenu(false)}>

        </div>
     </div> 
   )
}



