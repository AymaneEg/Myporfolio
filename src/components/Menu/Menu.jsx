import React from 'react'

export default function Menu() {
  return (
     <div className='w-full absolute top-0 left-0  h-20 flex justify-between items-center px-20 '>
        <div>
            <h1 className='text-xl cursor-pointer'>Aymane <span className='font-bold'>{`</>`}</span></h1>
        </div>

        <div>
            <ul className='MenuItems'>
                <li><a href="/">About</a></li>
                <li><a href="/">Skills</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Contact</a></li>
                <button className='DownloadBtn'>Download cv</button>
            </ul>
        </div>
     </div> 
   )
}
