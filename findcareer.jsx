import React from "react";
import './findcareer.css';
import { FaSearch } from "react-icons/fa";

function Findcareer(){
    return(
        <div className="findcareer">
            <div class="topnav">

<div className="lefttopnav">
<div className="courseraname"> <h2>coursera</h2></div>
<div className="explorename"><a href="/"><select><option>Explore</option></select></a></div>
<div className="searchbar"><a href="/">
<input type="text" name="search" placeholder="what you want to learn? " >
    </input><div className="search1"><FaSearch/></div></a></div>
</div>

<div className="righttopnav"> 
<h4><select><option>Online Degrees</option></select></h4>
<a href="/findcareer">Find your New Career</a>
<a href="/login">login</a>
<a href="/signup"><button>Join for Free</button></a>
</div>
</div>
            <div className="findcareer1">
                <img src="./for government/DPFC-main.webp" alt="main"/>
                <div className="findtext">
                    <h1>Launch your new career with a <br/>Professional Certificate on Coursera</h1>
                    <p>Professional certificates offer flexible, online training 
                        designed to get you job-ready for  <br/>high-growth fields.</p>
                   <div className="findtext2">
                    <p>7 day free trial  |  Starting at $49 per month  |  Less than 6 months at your own pace</p>
                    </div>  
                    <button>Explore Careers</button>   
                </div>
            </div>
        </div>
    )
}
export default Findcareer;