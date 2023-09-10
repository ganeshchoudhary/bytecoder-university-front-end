import React from "react";
import './coursecertificate.css';

function CourseCertificate(){
    return(
        <div className="course">
            <div className="courseprograms">
                <h3>Courses and Professional Certificates</h3>
                <h1>New on Coursera</h1>
                <p>Explore our newest programs, focused on delivering in-demand skills.</p>
            </div>
            <div className="courseslide">
           <div className="coursegallery">
               <div className="slideimage">
                   <a href="/"><img src="./DPC-Microsoft.png" alt="random"/></a>
               </div>
               <div className="imagedescription1">
                 <div className="slideimage2">
                 <p> <img src="./360microsoftlogo.png" alt="random"/>Microsoft</p>
                   <h3>Microsoft Power BI Data Analyst</h3>
                   <p>Professional Certificate</p>
                 </div>
               </div>
           </div>
           <div className="coursegallery">
               <div className="slideimage">
                   <a href="/"><img src="./DPC-DeepLearning.png" alt="random"/></a>
               </div>
               <div className="imagedescription1">
                 <div className="slideimage2">
                 <p> <img src="./360DeepLearninglogo.png" alt="random"/>DeepLearning.AI</p>
                   <h3>Genrative AI with Large Language Models</h3>
                   <p>Course</p>
                 </div>
               </div>
           </div> 
           <div className="coursegallery">
               <div className="slideimage">
                   <a href="/"><img src="./DPC-vanderbiltuniv.png" alt="random"/></a>
               </div>
               <div className="imagedescription1">
                 <div className="slideimage2">
                 <p> <img src="./360vanderbilt.png" alt="random"/>Vanderbilt University</p>
                   <h3>Prompt Engineering for ChatGPT</h3>
                   <p>Course</p>
                 </div>
               </div>
           </div>
           <div className="coursegallery">
               <div className="slideimage">
                   <a href="/"><img src="./DPC-ibm.png" alt="random"/></a>
               </div>
               <div className="imagedescription1">
                 <div className="slideimage2">
                 <p> <img src="./IBM-Logo-Blk---Square.png" alt="random"/>IBM</p>
                   <h3>IBM IT Project Manager</h3>
                   <p>Professional Certificate</p>
                 </div>
               </div>
           </div>
           </div>
        </div>
    );
}
export default CourseCertificate;