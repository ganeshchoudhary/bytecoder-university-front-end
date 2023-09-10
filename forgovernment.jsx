import React from "react";
import './forgovernment.css';
function Government(){
    return(
        <div className="foruniversities">
            <div className="businessnavtop">
                <div className="lefthead">
                    <h2><strong>coursera</strong> for government</h2>
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
                </div>
                </div>
                <div className="rightbutton">
                    <button>Contact Sales</button>
                </div>     
            </div>
            <div className="universitytextline">
            <img src="./for government/downloadm.webp" alt="main"/>
            <h1>Equip citizens and government employees with in-demand skills</h1>
            <p>Drive sustainable economic growth and build a competitive workforce with online
                 learning from leading universities and companies.</p>
            
            <div className="textlink">
                <a href="/"> Train your citizen workforce</a>
                <a href="/"> Upskill government employees</a>
            </div>
            <div className="textbutton">
            <button>Contact Sales</button>
            </div>
          </div>
          <div className="citizens">
            <h1>Choose the right career solutions for your citizens and employees</h1>
            <div className="citizengallery">
                <div className="citizen1">
                <img src="./for government/DG-1card_Citizen_Workforce_Development.jpg" alt="citizen"/>
                <h4>CITIZEN WORKFORCE DEVELOPMENT</h4>
                <h1>Train your citizens</h1>
                <p>Enable your workforce to develop job-relevant skills to
                     help reduce unemployment and increase economic competitiveness.</p>
                    <a href="/">Learn more</a> 
                    </div>
                <div className="citizen1">
                <img src="./for government/DG-2GettyImages-1220127449_2.png" alt="citizen"/>
                <h4>GOVERNMENT EMPLOYEE UPSKILLING</h4>
                <h1>Train your government employees</h1>
                <p>Build the skilled workforce needed to improve service
                     efficiency and drive performance results.</p>
                 <a href="/">Learn more</a> 
                </div>
            </div>
          </div>
    </div>
    )
}
export default Government;