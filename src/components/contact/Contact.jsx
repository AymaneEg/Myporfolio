import React from 'react'

export default function () {
  return (
    <div className='w-full h-screen flex-col justify-center items-center py-8 h-96 flex  bg-customBlack  text-white text-center'>
        <div className='w-8/12 h-1/2 flex justify-start items-end border-b border-gray-100 pb-8'>
            <div className='flex flex-col justify-start'>
                <div className='flex items-center gap-4'>
                   <div className='bg-gray-400 rounded-full w-24 h-24'></div>
                   <h1 style={{fontSize : '5rem'}}>Let's work </h1>
                </div>
                  <h1 className='text-left' style={{fontSize : '5rem'}}>together</h1>
                
            </div>
        </div>
        <div className='w-8/12 h-1/2 flex gap-4 py-8 '>

            <div className='ContactDiv'>
                <span>aymanelgenouni10@gmail.com</span>
            </div>

            <div className='ContactDiv'>
                <span>LinkedIn.com/AymaneEg</span>
            </div>

            <div className='ContactDiv'>
                <span>github.com/AymaneEg</span>
            </div>

            <div className='ContactDiv'>
                <span>+212 6 30 50 83 10</span>
            </div>
           
            
        </div>


          
    </div>
  )
}