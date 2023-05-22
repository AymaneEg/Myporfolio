import React, { useState } from 'react'
import comments from './images/CommentsSection.png' 
import fylo from './images/Fylo.png' 

let ProjectDetails = {
    Fylo : {
        image : fylo
    } ,
    UrlShorting : {
        image : comments
    } ,
    ProductPage : {
        image : comments
    } ,
    Comments : {
        image : comments
    } ,
    Aznak : {
        image : comments
    } ,
} 

export default function Projects() { 

  const  [selectedProject , SetSelectedProject ] = useState({})  

  return (
     <div className='w-full h-screen flex justify-center items-center'>
         <div className='w-8/12 h-2/3 border-2 rounded-lg flex p-4 gap-4 shadow-sm	'>
            <div className='w-4/12 h-full border rounded-lg flex justify-center'>
               <ul className='w-full flex flex-col justify-center items-center gap-8 text-xl'>
                  <li className='w-8/12 flex justify-center items-center relative'>
                    <span className={selectedProject == ProjectDetails.Fylo ? "ProjectsItems active" : "ProjectsItems"} onClick={()=> SetSelectedProject(ProjectDetails.Fylo)}>Fylo</span>
                  </li>
                  <li className='w-8/12 flex justify-center items-center relative'>
                    <span className={selectedProject == ProjectDetails.UrlShorting ? "ProjectsItems active" : "ProjectsItems"} onClick={()=> SetSelectedProject(ProjectDetails.UrlShorting)}>Url Shorting Api</span>
                  </li>
                  <li className='w-8/12 flex justify-center items-center relative'>
                    <span className={selectedProject == ProjectDetails.ProductPage ? "ProjectsItems active" : "ProjectsItems"} onClick={()=> SetSelectedProject(ProjectDetails.ProductPage)}>Product Page</span>
                    </li>
                  <li className='w-8/12 flex justify-center items-center relative'>
                    <span className={selectedProject == ProjectDetails.Comments ? "ProjectsItems active" : "ProjectsItems"} onClick={()=> SetSelectedProject(ProjectDetails.Comments)}>Comments Section</span>
                    </li>
                  <li className='w-8/12 flex justify-center items-center relative'>
                    <span className={selectedProject == ProjectDetails.Aznak ? "ProjectsItems active" : "ProjectsItems"} onClick={()=> SetSelectedProject(ProjectDetails.Aznak)}>Aznak Gym</span>
                    </li>
               </ul>
            </div>
            <div className='ProjectSection' style={{backgroundImage : `url(${selectedProject.image})`}}> 
              <span></span>
              <div className='w-full h-full z-10 flex justify-center items-center '>
                 <button className='w-3/12 h-6 m-4 bg-white' >Live Demo</button>
                 <button className='w-3/12 h-6 m-4 bg-white' >GitHub link</button>
              </div>
            </div>
         </div>
     </div>
  )
}


