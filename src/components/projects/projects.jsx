import React, { useEffect, useLayoutEffect, useReducer, useRef, useState } from 'react'
import comments from './images/CommentsSection.png' 
import fylo from './images/Fylo.png' 
// import MultiStepsForm from './images/MultiStepsForm.png' 
import Shortly from './images/Shortly.png' 
import Signin from './images/SigninPage.png' 
import MultiSteps from './images/MultiStepsForm.png' 

const ACTIONS = {
    INCREMENT : "INCREMENT" , 
    DECREMENT : "DECREMENT"
}

const ProjectDetails = {
    Fylo : {
        name : "Fylo" ,
        image : fylo ,
    } ,
    UrlShorting : {
        name : "UrlShorting" ,
        image : Shortly
    } ,
    MultiStepsForm : {
        name : "MultiStepsForm" ,
        image : MultiSteps
    } ,
    Comments : {
        name : "Comments" ,
        image : comments
    } ,
    SigninPage : {
        name : "SigninPage" ,
        image : Signin
    } ,
} 


export default function Projects() { 

  const  [selectedProject , SetSelectedProject ] = useState({})  
  //const [scrolledIndex , setScrolledIndex] = useState(3);  
  const [width , setWidth] = useState(0);
  const ref = useRef(null);

  const reducer = (state , actions)=>{
    const Container =  document.getElementById("ProjectsContainer");
    switch(actions.type){
      case ACTIONS.INCREMENT : 
      Container.scrollLeft += width;
      return { index : state.index > 3 ? 4 : state.index + 1}
      case ACTIONS.DECREMENT : 
      Container.scrollLeft -= width;
      return { index : state.index < 1 ? 0 : state.index -1}
      
    }
  }
  
  const [ scrolledIndex  , dispatch] = useReducer(reducer , {index : 1}) 

 
  
  useLayoutEffect(()=>{
    setWidth(ref.current.offsetWidth)
  } , [])

  useEffect(()=>{
     const Container =  document.getElementById("ProjectsContainer");

     switch(scrolledIndex.index){
       case 0 : 
         SetSelectedProject(ProjectDetails.Fylo)
          Container.scrollLeft += document.getElementById(ProjectDetails.Fylo.name).clientLeft
         //Container.scrollIntoView(document.getElementById(ProjectDetails.Fylo.name))
         break;
       case 1 : 
         SetSelectedProject(ProjectDetails.UrlShorting)
         Container.scrollLeft += parseInt(document.getElementById(ProjectDetails.UrlShorting.name).clientLeft)
         break;
       case 2 : 
         SetSelectedProject(ProjectDetails.MultiStepsForm)
         Container.scrollLeft += document.getElementById(ProjectDetails.MultiStepsForm.name).clientLeft
         break;
       case 3 : 
         SetSelectedProject(ProjectDetails.Comments)
         Container.scrollLeft += document.getElementById(ProjectDetails.Comments.name).clientLeft
         break;
       case 4 : 
         SetSelectedProject(ProjectDetails.SigninPage)
         Container.scrollLeft += document.getElementById(ProjectDetails.SigninPage.name).clientLeft
         break;
     }
  } , [scrolledIndex.index] )


  return (
     <div className='w-full h-screen flex flex-col justify-center items-center gap-8'>
         <h1 className='text-3xl text-center p-8'>Side projects i've been working on</h1>
         <div className='w-11/12 lg:w-8/12 h-2/3 border-2 rounded-lg flex flex-col lg:flex-row p-4 gap-4 shadow-sm	'>
            <div className='lg:w-4/12 lg:h-full border rounded-lg flex justify-center'>
              <div className='lg:hidden h-28 flex justify-center items-center'>
                <div className='text-2xl text-white bg-customBlack px-8 py-2 rounded-lg shadow-lg transition-all' >
                  {selectedProject.name}
                </div>
              </div>
               <ul className='Projects' id='ProjectsContainer' ref={ref}>
                  <li id={ProjectDetails.Fylo.name} className='w-full lg:w-8/12 flex justify-center items-center relative'>
                    <span className={selectedProject == ProjectDetails.Fylo ? "ProjectsItems active" : "ProjectsItems"} onClick={()=> SetSelectedProject(ProjectDetails.Fylo)}>Fylo</span>
                  </li>
                  <li id={ProjectDetails.UrlShorting.name} className='w-full lg:w-8/12 flex justify-center items-center relative'>
                    <span className={selectedProject == ProjectDetails.UrlShorting ? "ProjectsItems active" : "ProjectsItems"} onClick={()=> SetSelectedProject(ProjectDetails.UrlShorting)}>Url Shorting Api</span>
                  </li>
                  <li id={ProjectDetails.MultiStepsForm.name} className='w-full lg:w-8/12 flex justify-center items-center relative'>
                    <span className={selectedProject == ProjectDetails.MultiStepsForm ? "ProjectsItems active" : "ProjectsItems"} onClick={()=> SetSelectedProject(ProjectDetails.MultiStepsForm)}>Multi steps form</span>
                    </li>
                  <li id={ProjectDetails.Comments.name} className='w-full lg:w-8/12 flex justify-center items-center relative'>
                    <span className={selectedProject == ProjectDetails.Comments ? "ProjectsItems active" : "ProjectsItems"} onClick={()=> SetSelectedProject(ProjectDetails.Comments)}>Comments Section</span>
                    </li>
                  <li id={ProjectDetails.SigninPage.name} className='w-full lg:w-8/12 flex justify-center items-center relative'>
                    <span className={selectedProject == ProjectDetails.SigninPage ? "ProjectsItems active" : "ProjectsItems"} onClick={()=> SetSelectedProject(ProjectDetails.SigninPage)}>Sign in</span>
                  </li>
                   

               </ul>
                   <span className='lg:hidden absolute left-16  mt-10  w-10 h-10 bg-customBlack rounded-full text-white text-3xl flex items-center justify-center' onClick={()=> dispatch({type : ACTIONS.DECREMENT}) }>{`<`}</span>
                   <span className='lg:hidden absolute right-16 mt-10 w-10 h-10 bg-customBlack rounded-full text-white text-3xl flex items-center justify-center' onClick={()=>dispatch({type : ACTIONS.INCREMENT})}>{`>`}</span>
            </div>
            <div className='ProjectSection' style={{backgroundImage : `url(${selectedProject.image})`}}> 
              <span>
                 <button className='w-3/12 h-12 rounded-lg transition-all m-4 relative overflow-hidden font-bold bg-white' >Live Demo</button>
                 <button className='w-3/12 h-12 rounded-lg transition-all m-4 relative overflow-hidden font-bold bg-customBlack text-white'  >GitHub link</button>
              </span>
              
            </div>
         </div>
         <h1 className='text-3xl text-center p-8'>More thinks are beign made , stay tuned ...</h1>

     </div>
  )
}


