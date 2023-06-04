import React from 'react'
import redux from './images/redux.png'
import html from './images/html.png'
import css from './images/css.png'
import js from './images/js.png'
import tailwind from './images/tailwind.png'
import reactImg from '../../assets/react.svg'

export default function Skills() {
  return (
    <div className='w-full min-h-screen flex flex-col items-center px-8 py-4 bg-customBlack text-gray-200 justify-center ' id='Skills'>
       <h1 className='text-4xl '>What I do ?</h1>  

       <div className='w-full flex flex-col lg:flex-row justify-center gap-8 lg:gap-32 p-8'>

          <div className='w-full lg:w-2/12'>
             <div className='w-full border-b-2 '>
                 <h1 className='text-xl'>01</h1>
             </div>
             <div className='pt-4'>
                <h1 className='font-bold text-2xl'>Html</h1>
             </div>
          </div>
          
          <div className='w-full lg:w-2/12'>
             <div className='w-full border-b-2 '>
                 <h1 className='text-xl'>02</h1>
             </div>
             <div className='pt-4'>
                <h1 className='font-bold text-2xl'>Css</h1>
             </div>
          </div>

          <div className='w-full lg:w-2/12'>
             <div className='w-full border-b-2 '>
                 <h1 className='text-xl'>03</h1>
             </div>
             <div className='pt-4'>
                <h1 className='font-bold text-2xl'>Javascript</h1>
             </div>
          </div>         
       </div>
        

       <div className='w-full flex flex-col lg:flex-row gap-8 lg:gap-32 p-8 justify-center '>

<div className=' w-full lg:w-2/12'>
   <div className='w-full border-b-2 '>
       <h1 className='text-xl'>04</h1>
   </div>
   <div className='pt-4'>
      <h1 className='font-bold text-2xl'>React</h1>
   </div>
</div>

<div className='w-full lg:w-2/12'>
   <div className='w-full border-b-2 '>
       <h1 className='text-xl'>05</h1>
   </div>
   <div className='pt-4'>
      <h1 className='font-bold text-2xl'>Redux/toolkit</h1>
   </div>
</div>

<div className='w-full lg:w-2/12'>
   <div className='w-full border-b-2 '>
       <h1 className='text-xl'>06</h1>
   </div>
   <div className='pt-4'>
      <h1 className='font-bold text-2xl'>Tailwind css</h1>
   </div>
</div>         
</div>

<div className='w-full flex flex-col lg:flex-row gap-8 lg:gap-32 p-8 justify-center '>

<div className='w-full lg:w-2/12'>
   <div className='w-full border-b-2 '>
       <h1 className='text-xl'>07</h1>
   </div>
   <div className='pt-4'>
      <h1 className='font-bold text-2xl'>Responsive design</h1>
   </div>
</div>

<div className='w-full lg:w-2/12'>
   <div className='w-full border-b-2 '>
       <h1 className='text-xl'>08</h1>
   </div>
   <div className='pt-4'>
      <h1 className='font-bold text-2xl'>npm package managment</h1>
   </div>
</div>

<div className='w-full lg:w-2/12'>
   <div className='w-full border-b-2 '>
       <h1 className='text-xl'>09</h1>
   </div>
   <div className='pt-4'>
      <h1 className='font-bold text-2xl'>Git & Github</h1>
   </div>
</div>         
</div>

    </div> 
  )
}
