import React from "react";
import './freecourses.css';

function Freecourses(){
    return(
        <div className="degreeprograms">
            <div className="degree">
                <h3>100% Free</h3>
                <h1>Start learning with free courses</h1>
                <p>Explore free online courses from the world's top universities and companies.</p>
            </div>
            <div className="courseslide">
           <div className="coursegallery">
               <div className="slideimage">
                   <a href="/"><img src="./DPF-YaleU.png" alt="random"/></a>
               </div>
               <div className="imagedescription1">
                 <div className="slideimage2">
                 <p> <img src="./360Yalelogo.png" alt="random"/>Yale University</p>
                   <h3>Te Science of Well-Being for Teens</h3>
                   <p>Course</p>
                 </div>
               </div>
           </div>
          
           <div className="coursegallery">
               <div className="slideimage">
                   <a href="/"><img src="./DPF-Meta.png" alt="random"/></a>
               </div>
               <div className="imagedescription1">
                 <div className="slideimage2">
                 <p> <img src="./360-x-360meta.png" alt="random"/>Meta</p>
                   <h3>What is the Metaverse?</h3>
                   <p>Course</p>
                 </div>
               </div>
           </div>
        
           <div className="coursegallery">
               <div className="slideimage">
                   <a href="/"><img src="./DPF-DeepTeaching.png" alt="random"/></a>
               </div>
               <div className="imagedescription1">
                 <div className="slideimage2">
                 <p> <img src="./360Deeplogo.png" alt="random"/>Deep Teaching Solutions</p>
                   <h3>Learning How to Learn: Powerful Mental Tools To...</h3>
                   <p>Course</p>
                 </div>
               </div>
           </div>
           
           <div className="coursegallery">
               <div className="slideimage">
                   <a href="/"><img src="./DPF-PEnnsylvania.png" alt="random"/></a>
               </div>
               <div className="imagedescription1">
                 <div className="slideimage2">
                 <p> <img src="./360pennsylvanialogo.png" alt="random"/>University of Pennsylvania</p>
                   <h3>English for Career Development</h3>
                   <p>Course</p>
                 </div>
               </div>
               </div>
           </div>
           <br/>
        <br/>
        <br/>
        <br/>
            </div>
    )
}
export default Freecourses;