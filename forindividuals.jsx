import React from "react";
import './forindividuals.css';
import { FaSearch } from "react-icons/fa";

function Individual(){
   
    return(
        
 <div className="forindividuals">
    
 <div class="topnav">

    <div className="lefttopnav">
    <div className="courseraname"> <h2>coursera</h2></div>
    <div className="explorename"><a href="/"><select><option>Explore</option></select></a></div>
    <div className="searchbar"><a href="/">
    <input type="text" name="search" placeholder="what you want to learn? " ></input><div className="search1"><FaSearch/></div></a></div>
    </div>

    <div className="righttopnav"> 
    <h4><select><option>Online Degrees</option></select></h4>
    <a href="/findcareer">Find your New Career</a>
    <a href="/login">login</a>
    <a href="/signup"><button>Join for Free</button></a>
    </div>
 </div>
<div className="content">
   
    <div className="learn">
        <img src="./CourseraLearners_C_Composition_Hillary_copy__3_.png" alt="name"/>
        <h1> Learn without <br/>limits</h1>
        <p>Start, switch, or advance your career with more than 5,800 courses,<br/>
         Professional Certificates, and degrees from world-class universities <br/> and companies.</p>
     
     <div className="sublearn">
        <div className="sub1"><button><a href="/signup"> Join for Free</a></button></div>
        <div className="sub2" >
            <button><strong><a href="/forbusiness">Try Coursera for Business</a></strong></button></div>
           
    </div>
    </div>
    
    <div className="collaborate">
        <h1>We collaborate with <a href="/">300+ leading universities and companies</a></h1>
        <div className="imageofcom">
        <img src="./illinois-3.png" alt="name"/>
        <img src="./duke-3.png" alt="name"/>
        <img src="./google.png" alt="name"/>
        <img src="./umich.png" alt="name"/>
        <img src="./1000px-IBM_logo.svg.png" alt="name"/>
        <img src="./imperial.png" alt="name"/>
        <img src="./stanford.png" alt="name"/>
        <img src="./penn (1).png" alt="name"/>
        </div>
    </div>
    </div>
   
</div>
    );
}
export default Individual;