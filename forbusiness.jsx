import React from "react";
import './forbusiness.css';
import { FaCheck,FaSearch} from "react-icons/fa";
function Business(){
    return(
        <div className="business">
            <div className="businessnavtop">
                <div className="lefthead">
                    <h2><strong>coursera</strong> for business</h2>
                </div>
                
                <div className="leftselect">
                <div className="why">
                    <h4><select><option>Why Coursera</option></select></h4>
                    </div>
                    <div className="solutions">
                    <h4><select><option>Solutions</option></select></h4> 
                    </div>
                   <div className="resourses">
                   <h4><select><option>Resourses</option></select></h4> 
                   </div>
                   <div className="leftlink">
                    <a href="/">For Teams</a>
                    <a href="/">Compare Plans</a>
                </div>
                </div>
               
                <div className="rightbutton">
                    <button>Contact Sales</button>
                </div>
                
            </div>
            
            <div className="competitive">
                <div className="compimage">
                    <img src="./for business images/download.webp" alt="main"/>
                </div>
                <div className="competitivetext">
                    <h1> Make talent your competitive advantage</h1>
                    <p><span><FaCheck/></span> Strengthen critical skills with content you can trust<br/></p>
                     
                    <p> <span><FaCheck/></span>Develop, retain, and advance critical talent<br/></p>
                    <p><span><FaCheck/></span>  Lower training costs without sacrificing quality<br/></p>
                    <p> <span><FaCheck/></span>  Track and measure skills to demonstrate ROI <br/></p>
                           <div className="compbutton">
                           <button>Contact us</button>
                           </div>
                           <div className="complink">
                            <p>Upskilling fewer than 125 employees? <a href="/">Get Coursera for Teams</a></p>
                           </div>
                         
                </div>
            </div>
            <div className="idealsolution1">
            <div className="solution2">
                <h1>Leaders at 3,800+ companies<br/> develop their talent with <br/>Coursera</h1>
            </div>
            <div className="solutionimages1">
                <div><img src="./DPIS-loreal.png" alt="loreal"/></div>
                <div><img src="./DPIS-P&G.png" alt="p&g"/></div>
                <div><img src="./DPIS-tata.png" alt="tata"/></div>
        
                <div><img src="./DPIS-capgemini.png" alt="capgemini"/></div>
                <div><img src="./DPIS-Emirates_NBD_logo.png" alt="emirates"/></div>
                <div><img src="./DPIS-General_Electric.png" alt="general"/></div>
           
                <div><img src="./DPIS-DANONE_LOGO.png" alt="danone"/></div>
                <div><img src="./DPIS-petrobras.png" alt="petrobras"/></div>
                <div><img src="./DPIS-Reliance_logo-2.png" alt="Reliance"/></div>
          
             </div>
        </div>
        <div className="upskill">
            <div className="upskillimage">
                <img src="./for business images/InDemandSkills_1_5x.png" alt="upskill"/>
            </div>
            <div className="uskilltextmain">
                <div className="upskillhead">
                    <h3>UPSKILL EMPLOYEES</h3>
                    <h1>Strengthen critical skills across every team</h1>
                    <h4>Increase business impact and agility with in-demand tech, data, and leadership skills.</h4>
                    <p> <span><FaCheck/></span>Use role-based assessments to identify skills gaps and advancement opportunities<br/>
                    <span><FaCheck/></span>Advance skills in roles that drive rapid transformation for your company<br/>
                    <span><FaCheck/></span>Enhance leadership skills to engage, navigate, and motivate employees amid change<br/>
                    <span><FaCheck/></span>Learn and apply skills faster with hands-on projects and immersive learning<br/></p>
                         <a href="/">Explore skill-based learning</a>
                         <div className="upskilhead2">
                            <p>"What I’ve learned through Coursera allows me to <br/>
                                better guide and inform the professional data analysts<br/>
                                 on my team to solve tough business problems and <br/>
                                 accelerate the development of our digital capabilities."<br/></p>
                                 <div className="upskillhead3">
                                    <img src="./for business images/logo-pg.svg" alt="pg"/>
                                     <h3>Sabine M.</h3>
                                      <p>Research Fellow, Procter & Gamble</p>
                                 </div>
                         </div>
                </div>
            

            </div>
        </div>
        <div className="learnbest">
            <div className="bestimage">
                <img src="./for business images/university-collage.png" alt="college"/>
            </div>
            <div className="besttext">
                <h4>WORLD-CLASS CONTENT</h4>
                <h1>Learn from the best</h1>
                <h5>Lower training costs with in-demand content and trusted credentials<br/> 
                    from 300+ top companies and universities.</h5>
                    <p>
                    <span><FaCheck/></span>Provide expert instruction from 13 of the top 20 business schools in the world<br/>
                    <span><FaCheck/></span>Prepare employees for digital roles with career credentials from industry experts<br/>
                    <span><FaCheck/></span>Drive continuous learning with short videos, lessons, and hands-on projects<br/>
                    <span><FaCheck/></span>Curate your own content experiences or leverage our job-aligned collections<br/>
                    </p>
                    <a href="/">Explore world-class content</a>
            </div>
        </div>
        <div className="searchbar1">
            <h1>Search our catalog of world-class content</h1>
        <a href="/">
        <input type="text" name="search1" placeholder="eg : Data science " >
        </input><div className="search2"><FaSearch/></div></a>
     </div>

        </div>
    )
}
export default Business;