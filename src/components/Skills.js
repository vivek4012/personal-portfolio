import React from "react";
import './styles.css';
import ParticleBackground from "./particlebackground";

function Skills2 () {
   return (
       <div className="container2">
           <h1 className="title-text"> Skills</h1>
           <h3>I love to learn new things and experiment with new technologies.
These are some of the major languages, technologies, tools and platforms I have worked with:</h3>

           <div className="skill-box">
               <span className="title">HTML</span>
               <div className="skill-bar">
                   <span className="skill-per html">
                       <span className="tooltip">95%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">CSS</span>
               <div className="skill-bar">
                   <span className="skill-per css">
                       <span className="tooltip">80%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">JavaScript</span>
               <div className="skill-bar">
                   <span className="skill-per javascript">
                       <span className="tooltip">60%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">Bootstrap</span>
               <div className="skill-bar">
                   <span className="skill-per nodejs">
                       <span className="tooltip">40%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">ReactJS</span>
               <div className="skill-bar">
                   <span className="skill-per reactjs">
                       <span className="tooltip">70%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">Tailwind CSS</span>
               <div className="skill-bar">
                   <span className="skill-per expressjs">
                       <span className="tooltip">75%</span>
                   </span>
               </div>
           </div>
       </div>
   )
}
function Add (){
    return(
<div>
    <div className="addtitle">additional tools</div>

<div className="flex25"> 
    <div className="iconflex"> <img className="icon4" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"></img>   <div className="margintop"> GIT</div>  </div> 
    <div className="iconflex">   <img className="icon4" src="https://www.netlify.com/v3/img/components/logomark-light.png"></img> <div className="margintop"> Netlify </div> </div>
    <div className="iconflex">  <img className="icon5" src="https://res.cloudinary.com/practicaldev/image/fetch/s--bvQtwOo5--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://reacttraining.com/images/blog/reach-react-router-future.png"></img> <div className="margintop"> React-Router </div></div>
    <div className="iconflex">   <img className="icon4" src=" https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"></img><div className="margintop"> React-Redux </div></div>
</div>
</div>
    )
}
function Skills () {
    return (
        <>
        
        <Skills2/>
        <Add/>

        {/* <ParticleBackground/> */}
        </>
    )
 }
export default Skills;