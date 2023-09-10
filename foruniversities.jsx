import React from "react";
import './foruniversities.css';
import { FaCheck} from "react-icons/fa";
function Universities(){
    return(
        <div className="foruniversities">
            <div className="businessnavtop">
                <div className="lefthead">
                    <h2><strong>coursera</strong> for campus</h2>
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
                   <a href="/">Compare Plans</a>
               </div>
                </div>
               <div className="rightbutton">
                    <button>Contact Sales</button>
                </div>     
            </div>
          <div className="universitytextline">
            <img src="./for university/download (1).webp" alt="main"/>
            <div className="universitytextline1">
            <h1>Strengthen <br/>employability to <br/>attract more <br/>students</h1>
            <p>Equip students with the most in-demand skills and <br/>prepare them for job success.</p>
            <div className="textbutton">
            <button>Contact Sales</button>
            </div>
            <div className="textlink">
                <p>See your options,<a href="/"> compare plans</a></p>
            </div>
            </div>
          </div>
          <div className="collegeuniversity">
            <img src="./for university/university-collage (1).png" alt="college"/>
            <h1>Offer students 5,400 courses<br/> from 275+ leading <br/> universities and industry<br/>  partners</h1>
          </div>
          <div className="careeracademy">
           
            <img src="./for university/c4c-image-home-career-academy.jpg" alt="career"/>
            <div className="careeracademy1">
            <h3>CAREER ACADEMY</h3>
            <h1>Prepare your students for<br/> in-demand jobs</h1>
            <h5>Strengthen student employability with skills training from the<br/> world's leading companies.</h5>
            <h7>  With Career Academy, enable your students to:</h7>
            <p>
            <span><FaCheck/></span> Earn a Professional Certificate designed to get them job-ready<br/>
            <span><FaCheck/></span> Gain common job skills employers demand<br/>
            <span><FaCheck/></span> Showcase skill mastery with a portfolio of work<br/>
            <span><FaCheck/></span> Explore a range of in-demand roles across industries<br/>
            </p>
            <a href="/">Learn more about Career Academy</a>
          </div>
          </div>
          <div className="videoplayer">
            <video width="600" controls>
            <source src="./for university/courseramicrocred_09may23__720p_.mp4" type="video/mp4"/>
            </video>
            <div className="videoplayer1">
            <h3>PROFESSIONAL CERTIFICATES</h3>
            <h1>Learn why students and<br/> employers value <br/>Professional Certificates</h1>
            <p>A survey of 5,000 students and employers in 11 countries finds that  <br/>the
             majority value Professional Certificates for driving employment<br/> outcomes.
              Professional Certificates help students demonstrate to <br/>employers that
              they are qualified and job-ready.<br/></p>
              <p>Use these insights to enhance your curriculum, and strengthen<br/>
                  employment outcomes.</p>
                <a href="/">Get Report</a>
             </div>
          </div>
        </div>
    )
}
export default Universities;