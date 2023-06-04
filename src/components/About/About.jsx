import React from 'react'
import myimage from './myimage.jpeg'
import wave from './goodbye.png'
export default function 
() {
  return (
    <div className='w-full min-h-4/6 flex flex-col items-center gap-10 lg:flex-row justify-between  lg:px-28 py-8 ' id='About'> 
      
        <div className='AboutPicture' style={{backgroundImage : `url(${myimage})`}}>
        </div>
        <div className='w-8/12 flex flex-col gap-8 justify-center '>
            <p className='text-2xl'> 
               Hi There , <img src={wave}className='w-8 inline mx-2' alt=""  /> 
                <span className='font-bold'>I'am Aymane</span>  ! a front-end developer based in Morocco , i love building user-freindly websites and web page
            </p> 
            <p className='text-2xl'>
              Most recently , i've been passionate and loving creating web applications using react and other skills like css , tailwind , styled components and much more.
            </p>
            <p className='text-2xl'>
             As a full-stack student i have also a back-end profile as i used to develope full stack web applications using laravel and asp.net and desktop application using C#
            </p>
        </div>
    </div>
  )
}

