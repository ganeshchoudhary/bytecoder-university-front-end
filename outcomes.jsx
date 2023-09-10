import React from "react";
import './outcomes.css';

function Outcomes(){
    return(
      <div className="learneroutcomes">
        <div className="outcomebg">
        <div className="outcomebg1">
            <img src="./outcomes-Background.png" alt="background"/>
         </div>
         <div className="outcometext">
            <h1>Learner outcomes on Coursera</h1>
        </div>
       
            <div className="outcometext1">
            <p><strong>87% of people learning</strong> for professional development <br/><strong>report career benefits</strong>,
             including outcomes like getting <br/>a promotion,becoming better at their current job, and <br/>
             finding a new job. <a href="/">Coursera Impact Report (2020)</a>
                 </p>
        </div>
        <div className="outcomeclick"><button>Join for Free</button>
        </div>
        </div>

        <div className="courseracommunity">
            <div className="community">
                <h1>From the Coursera community</h1>
                <h4>124+ million people have already joined Coursera</h4>
            </div>
            <div className="communitycolumn">
                <div className="communitycolumn1">
                    <img src="./Chitranshee_Agrawal_380x380.png" alt="ca"/>
                    <h2>Chitranshee Agrawal</h2>
                    <h5>India</h5>
                  <p>"Even more important than<br/> knowledge
                    is confidence, which<br/> i have gained 
                    through my <br/>learning journey.no matter<br/> what you are looking to learn, or <br/>gain
                    confidence in, coursera has <br/>something for you."
                  </p>
                    
                </div>
                <div className="communitycolumn1">
                    <img src="./CarlosC-Coursera-Learner.png" alt="ca"/>
                    <h2>Carlos C</h2>
                    <h5>United States</h5>
                    <p>"Earning my IT certificates<br/> helped me demonstrate my <br/>knowledge to 
                        recruiters and<br/> enhanced my standing as an <br/>applicant.now, I love my new<br/> job in
                        the tech industry;<br/>technology is always evolving,<br/>and I continue to learn<br/>
                        something every day."</p>
                    
                </div>
                <div className="communitycolumn1">
                    <img src="./Anisa_Ray_380x380.png" alt="ca"/>
                    <h2>Anisa Ray</h2>
                    <h5>United States</h5>
                    <p>"The program totally changed<br/> my life. I have this career in<br/> front of me now that
                        wasn't<br/> even in sight before,and it's<br/> what I want to be doing.That's<br/> really powerful."</p>
                    
                </div>
            </div>
        </div>
        <div className="idealsolution">
            <div className="solution1">
                <h1>The ideal solution for your <br/>business</h1>
                <p>Get the world-class learning and development chosen by top organizations<br/> across the globe. 
                    All on Coursera for Business.</p>
                    <button>Discover Coursera for Business</button>
                    <p>Upskill a small team?<a href="/">Check out Coursera for Teams</a></p>
            </div>
            <div className="solutionimages">
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
        <br/>

        <div className="professionalgoals">
        <div className="goalcover">
                <img src="./DPPG-coverimage.png" alt="goal"/>
          
            <div className="goal1">
                <h1>Take the next step<br/> toward your personal<br/> and professional goals <br/>with Coursera.</h1>
                <p>Join now to receive personalized recommendations from the full<br/> Coursera catalog.</p>
                <button>Join for Free</button>
            </div>
            </div>
        </div>
        </div>
     
    );
}
export default Outcomes;