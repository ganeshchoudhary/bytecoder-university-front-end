import React from "react";
import './individualcourse.css';
import { useState } from "react";
import { FaStar , FaArrowRight} from "react-icons/fa";
function Individualcourse(){
    const [selectedOption,setSelectedOption] = useState("projectmanager");
    const handleChange = (event) => {
    event.preventDefault();
        setSelectedOption(event.target.id);
    }
    
     const Projectmanager = () =>{
        return(
           <div> 
            <div className="tabcontent">
           <div className="manager">
               <h2>Project Manager</h2>
               <p>Oversee the planning and execution of projects to ensure they’re successful</p>
           </div>
           <div className="aboutsalary">
               <h3>Median entry-level salary</h3>
               <div className="occupation">
                <span className="occupation1">All occupations </span>
               <p>$37,960 <sup>*</sup></p>
              </div>
               <div className="project">
                <span className="project1">Project Manager</span>
               <p>$102,800 <sup>**</sup></p>
               </div>
           </div>
           <div className="open">
           <p>Job openings: <span>336,402<sup>**</sup></span></p>
           <p>Projected 10 year growth: <span>+11.1% <sup>***</sup></span></p>
           </div>
          
           <div className="certificates">
               <h3>Recommended Professional Certificates</h3>
           </div>

           <div className="gallery">
           <div className="imagegallery">
               <div className="imagegoogle">
                   <a href="/"><img src="./1200x600_PgM.png" alt="random"/></a>
               </div>
               <div className="imagedescription">
                 <div className="imagegoogle2">
                 <p> <img src="./Google-G_360x360.png" alt="random"/>google</p>
                   <h3>Google Project Management</h3>
                   <p>skills you’ll gain:Organizational Culture,Career Development,Strategic Thinking,Change...</p>
                   <p>4.8 <span><FaStar/></span> (86.3k reviews)</p>
                   <div className="pcm">
                       <p>Beginner </p>
                       <h4>.</h4>
                        <p>Professional certificates</p>
                        <h4>.</h4>
                        <p>6 months</p>
                       </div>
                 </div>
               </div>
           </div>
        <div className="imagegallery">
               <div className="imagegoogle">
                   <a href="/"><img src="./Projects.png" alt="random"/></a>
               </div>
               <div className="imagedescription">
                 <div className="imagegoogle2">
                 <p> <img src="./IBM-Logo-Blk---Square.png" alt="random"/>IBM</p>
                   <h3>IBM Project Management</h3>
                   <p>skills you’ll gain:Project initiation, Risk Management,Leadership,...</p>
                   <p>4.8 <span><FaStar/></span> (96 reviews)</p>
                   <div className="pcm">
                       <p>Beginner </p>
                       <h4>.</h4>
                        <p>Professional certificates</p>
                        <h4>.</h4>
                        <p>3 months</p>
                       </div>
                 </div>
               </div>
           </div>
           </div>
           <div className="explorearrow">
               <a href="/">Explore all certificates <FaArrowRight/></a>
           </div>
           <div className="comment">
           <img src="./adrienne_testimonial_image.png" alt="adrieene"/>
            <p>"Earning my Google Project Management: 
               Professional Certificate is one of the biggest accomplishments I’ve made in my education, and it was a 
               key stepping <br/> stone to my new career." </p>
               <span>– Adrienne</span>
           </div>
           <hr/>
           <div className="comment2">
               <p><sup>*</sup>Employment, Wages, and Projected Change in Employment by Typical Entry-level Education :
                U.S. Bureau of Labor Statistics. Sept. 2022, www.bls.gov/emp/tables/education-summary.htm</p>
               <p><sup>**</sup> Median salary and job opening data are sourced from United States Lightcast™ 
               Job Postings Report. Data for job roles relevant to featured programs (7/1/2022 - 6/30/2023)</p>
               <p><sup>***</sup>Growth rate data is sourced from United States Lightcast™ Job Postings Report. 
               Data for job roles relevant to featured programs (7/1/2022 - 6/30/2023)</p>
           </div>
       </div>
       </div>
        )
     }   
const Dataanalyst=()=>{
    return(
        <div className="tabcontent" >
        <div className="manager">
            <h2>Data Analyst</h2>
            <p>Collect, organize, and transform data to make informed decisions</p>
        </div>
        <div className="aboutsalary">
            <h3>Median entry-level salary</h3>
            <div className="occupation">
            <span className="occupation1">All occupations </span>
            <p>$37,960 <sup>*</sup></p>
            </div>
            <div className="project">
            <span className="project1">Data Analyst</span>
            <p>$90,500 <sup>**</sup></p>
            </div>
            </div>
            <div className="open">
            <p>Job openings: 82,489<sup>**</sup></p>
            <p>Projected 10 year growth:  +13% <sup>***</sup></p>
            </div>
        
        <div className="certificates">
            <h3>Recommended Professional Certificates</h3>
        </div>

        <div className="gallery">
        <div className="imagegallery">
            <div className="imagegoogle">
                <a href="/"><img src="./g-dataanalyst.png" alt="random"/></a>
            </div>
            <div className="imagedescription">
              <div className="imagegoogle2">
              <p> <img src="./Google-G_360x360.png" alt="random"/>google</p>
                <h3>Google Data Analytics</h3>
                <p>skills you’ll gain:Spreadsheet,data cleansing,data analysis,data...</p>
                <p>4.8 <span><FaStar/> </span>(119.2k reviews)</p>
                <div className="pcm">
                    <p>Beginner </p>
                    <h4>.</h4>
                     <p>Professional certificates</p>
                     <h4>.</h4>
                     <p>6 months</p>
                    </div>
              </div>
            </div>
        </div>
     <div className="imagegallery">
            <div className="imagegoogle">
                <a href="/"><img src="./ibm-dataanalyst.png" alt="random"/></a>
            </div>
            <div className="imagedescription">
              <div className="imagegoogle2">
              <p> <img src="./IBM-Logo-Blk---Square.png" alt="random"/>IBM</p>
                <h3>IBM Data Analyst</h3>
                <p>skills you’ll gain:Data science,Spreadsheet,Microsoft Excel,python...</p>
                <p>4.7 <span><FaStar/></span> (14.7k reviews)</p>
                <div className="pcm">
                    <p>Beginner </p>
                    <h4>.</h4>
                     <p>Professional certificates</p>
                     <h4>.</h4>
                     <p>4 months</p>
                    </div>
              </div>
            </div>
        </div>
        </div>
        <div className="explorearrow">
            <a href="/">Explore all certificates <FaArrowRight/></a>
        </div>
        <div className="comment">
        <img src="./Rachel_L Dataanalyst.png" alt="adrieene"/> <p> 
        "For anyone starting out as a data analyst, this is a great introduction
         and is very inspiring. The content was well paced and was accessible to
         people just starting out. I liked the variety of the assignments present in the program. "</p>
            <span>– Rachel L.</span>
        </div>
        <hr/>
        <div className="comment2">
            <p><sup>*</sup>Employment, Wages, and Projected Change in Employment by Typical Entry-level Education :
             U.S. Bureau of Labor Statistics. Sept. 2022, www.bls.gov/emp/tables/education-summary.htm</p>
            <p><sup>**</sup> Median salary and job opening data are sourced from United States Lightcast™ 
            Job Postings Report. Data for job roles relevant to featured programs (7/1/2022 - 6/30/2023)</p>
            <p><sup>***</sup>Growth rate data is sourced from United States Lightcast™ Job Postings Report. 
            Data for job roles relevant to featured programs (7/1/2022 - 6/30/2023)</p>
        </div>
    </div>
    )
}
const Uxdesinger=()=>{
    return(
        <div className="tabcontent"  >
            <div className="manager">
                <h2>UX Designer</h2>
                <p>Make digital and physical products easier and more enjoyable to use</p>
            </div>
            <div className="aboutsalary">
                <h3>Median entry-level salary</h3>
                <div className="occupation">
                <span className="occupation1">All occupations</span>
                <p>$37,960 <sup>*</sup></p>
                </div>
                <div className="project">
                <span className="project1">UX Designer</span>
                <p>$121,200 <sup>**</sup></p>
            </div>
            </div>
            <div className="open">  
            <p>Job openings: 70,778<sup>**</sup></p>
            <p>Projected 10 year growth: +22.2% <sup>***</sup></p>
            </div>
          
            <div className="certificates">
                <h3>Recommended Professional Certificates</h3>
            </div>
            <div className="gallery">
        <div className="imagegallery">
            <div className="imagegoogle">
                <a href="/"><img src="./g-uxdesigns.png" alt="random"/></a>
            </div>
            <div className="imagedescription">
              <div className="imagegoogle2">
              <p> <img src="./Google-G_360x360.png" alt="random"/>google</p>
                <h3>Google UX Design</h3>
                <p>skills you’ll gain:UX Experience(UX),UX Research,Wireframe,prototype,...</p>
                <p>4.8 <span><FaStar/> </span>(66.3k reviews)</p>
                <div className="pcm">
                    <p>Beginner </p>
                    <h4>.</h4>
                     <p>Professional certificates</p>
                     <h4>.</h4>
                     <p>6 months</p>
                    </div>
              </div>
            </div>
        </div>
        </div>
        <div className="explorearrow">
            <a href="/">Explore all certificates <FaArrowRight/></a>
        </div>
            <div className="comment">
            <img src="./Daijah_Reese-uxdesign.png" alt="adrieene"/> <p> "The program really helped me to mold my idea of what a user experience designer's work should be. 
            Being able to share my work through peer feedback, and really see my product come together as the courses 
            progressed was encouraging, and I could directly see my skills improve and my toolkit expand. "</p>
                <span>– Daijah R.</span>
            </div>
            <hr/>
            <div className="comment2">
                <p><sup>*</sup>Employment, Wages, and Projected Change in Employment by Typical Entry-level Education :
                 U.S. Bureau of Labor Statistics. Sept. 2022, www.bls.gov/emp/tables/education-summary.htm</p>
                <p><sup>**</sup> Median salary and job opening data are sourced from United States Lightcast™ 
                Job Postings Report. Data for job roles relevant to featured programs (7/1/2022 - 6/30/2023)</p>
                <p><sup>***</sup>Growth rate data is sourced from United States Lightcast™ Job Postings Report. 
                Data for job roles relevant to featured programs (7/1/2022 - 6/30/2023)</p>
            </div>
        </div>
    )
}
const Itsupport=()=>{
    return(
        <div className="tabcontent"  >
        <div className="manager">
            <h2>IT Support Specialist</h2>
            <p>Evaluate and troubleshoot technology issues so equipment runs smoothly</p>
        </div>
        <div className="aboutsalary">
            <h3>Median entry-level salary</h3>
            <div className="occupation">
            <span className="occupation1">All occupations </span>
            <p>$37,960 <sup>*</sup></p>
            </div>
            <div className="project">
            <span className="project1">IT Support Specialist</span>
            <p>$56,200 <sup>**</sup></p>
            </div>
           </div>

           <div className="open">
           <p>Job openings: 318,249<sup>**</sup></p>
        <p>Projected 10 year growth: +10.6% <sup>***</sup></p>
           </div>
       
        <div className="certificates">
            <h3>Recommended Professional Certificates</h3>
        </div>

        <div className="gallery">
        <div className="imagegallery">
            <div className="imagegoogle">
                <a href="/"><img src="./g-itsupport.png" alt="random"/></a>
            </div>
            <div className="imagedescription">
              <div className="imagegoogle2">
              <p> <img src="./Google-G_360x360.png" alt="random"/>google</p>
                <h3>Google IT Support</h3>
                <p>skills you’ll gain:Debugging,Encryption Algorithms and Technique...</p>
                <p>4.8 <span><FaStar/></span> (163.9k reviews)</p>
                <div className="pcm">
                    <p>Beginner </p>
                    <h4>.</h4>
                     <p>Professional certificates</p>
                     <h4>.</h4>
                     <p>6 months</p>
                    </div>
              </div>
            </div>
        </div>
     <div className="imagegallery">
            <div className="imagegoogle">
                <a href="/"><img src="./IBM-Tech-Support-PC.png" alt="random"/></a>
            </div>
            <div className="imagedescription">
              <div className="imagegoogle2">
              <p> <img src="./IBM-Logo-Blk---Square.png" alt="random"/>IBM</p>
                <h3>IBM IT Support</h3>
                <p>skills you’ll gain:Information Technology,Cybersecurity Essentails,...</p>
                <p>4.8 <span><FaStar/></span> (1k reviews)</p>
                <div className="pcm">
                    <p>Beginner </p>
                    <h4>.</h4>
                     <p>Professional certificates</p>
                     <h4>.</h4>
                     <p>3 months</p>
                    </div>
              </div>
            </div>
        </div>
        </div>
        <div className="explorearrow">
            <a href="/">Explore all certificates <FaArrowRight/></a>
        </div>
        <div className="comment">
        <img src="./chukwuma-itsupport.png" alt="adrieene"/> 
        <p> "I believe the certificate showed my then prospective employer proof of my skills and qualification
         especially coming from a global brand, Google." </p>
            <span>– Chukwuma E.</span>
        </div>
        <hr/>
        <div className="comment2">
            <p><sup>*</sup>Employment, Wages, and Projected Change in Employment by Typical Entry-level Education :
             U.S. Bureau of Labor Statistics. Sept. 2022, www.bls.gov/emp/tables/education-summary.htm</p>
            <p><sup>**</sup> Median salary and job opening data are sourced from United States Lightcast™ 
            Job Postings Report. Data for job roles relevant to featured programs (7/1/2022 - 6/30/2023)</p>
            <p><sup>***</sup>Growth rate data is sourced from United States Lightcast™ Job Postings Report. 
            Data for job roles relevant to featured programs (7/1/2022 - 6/30/2023)</p>
        </div>
    </div>  
    )
}
const Digitalmaketer=()=>{
    return(
         
        <div className="tabcontent"  >
            <div className="manager">
                <h2>Digital Marketer</h2>
                <p>Define and develop digital strategies to deliver business growth through online channels</p>
            </div>
            <div className="aboutsalary">
                <h3>Median entry-level salary</h3>
                <div className="occupation">
                <span className="occupation1">All occupations   </span>
                <p>$37,960 <sup>*</sup></p>
                </div>
                <div className="project">
                <span className="project1">Digital Marketer</span>
                <p>$61,300 <sup>**</sup></p>
                </div>  
            </div>

            <div className="open">
            <p>Job openings: 81,463<sup>**</sup></p>
            <p>Projected 10 year growth: +21% <sup>***</sup></p>
            </div>
          
            <div className="certificates">
                <h3>Recommended Professional Certificates</h3>
            </div>
 
            <div className="gallery">
            <div className="imagegallery">
                <div className="imagegoogle">
                    <a href="/"><img src="./g-digitalmarketer.png" alt="random"/></a>
                </div>
                <div className="imagedescription">
                  <div className="imagegoogle2">
                  <p> <img src="./Google-G_360x360.png" alt="random"/>google</p>
                    <h3>Google Digital Marketing & E-commerce</h3>
                    <p>skills you’ll gain:Marketing,E-commerce,display advertising,Email...</p>
                    <p>4.8 <span><FaStar/></span> (16.3k reviews)</p>
                    <div className="pcm">
                        <p>Beginner </p>
                        <h4>.</h4>
                         <p>Professional certificates</p>
                         <h4>.</h4>
                         <p>6 months</p>
                        </div>
                  </div>
                </div>
            </div>
         <div className="imagegallery">
                <div className="imagegoogle">
                    <a href="/"><img src="./meta-digitalmarketer.png" alt="random"/></a>
                </div>
                <div className="imagedescription">
                  <div className="imagegoogle2">
                  <p> <img src="./360-x-360meta.pngg" alt="random"/>IBM</p>
                    <h3>Meta Social Media Marketing</h3>
                    <p>skills you’ll gain:Performance Advertising,Digital marketing,Brand...</p>
                    <p>4.9 <span><FaStar/></span> (15.4k reviews)</p>
                    <div className="pcm">
                        <p>Beginner </p>
                        <h4>.</h4>
                         <p>Professional certificates</p>
                         <h4>.</h4>
                         <p>3 months</p>
                        </div>
                  </div>
                </div>
            </div>
            </div>
            <div className="explorearrow">
                <a href="/">Explore all certificates <FaArrowRight/></a>
            </div>
            <div className="comment">
            <img src="./hillary_testimonial_image-Dm.png" alt="adrieene"/> 
            <p>"After a year of taking courses on Coursera, I can
             happily say that I have become a confident and aspiring entrepreneur
             and a better marketing and advertising professional."</p>
                <span>– Hillary G.</span>
            </div>
            <hr/>
            <div className="comment2">
                <p><sup>*</sup>Employment, Wages, and Projected Change in Employment by Typical Entry-level Education :
                 U.S. Bureau of Labor Statistics. Sept. 2022, www.bls.gov/emp/tables/education-summary.htm</p>
                <p><sup>**</sup> Median salary and job opening data are sourced from United States Lightcast™ 
                Job Postings Report. Data for job roles relevant to featured programs (7/1/2022 - 6/30/2023)</p>
                <p><sup>***</sup>Growth rate data is sourced from United States Lightcast™ Job Postings Report. 
                Data for job roles relevant to featured programs (7/1/2022 - 6/30/2023)</p>
            </div>
        </div>
    )
}
const Datascientist=()=>{
    return(
        
        <div className="tabcontent"  >
            <div className="manager">
                <h2>Data Scientist</h2>
                <p>Extract and analyze data to make informed business decisions</p>
            </div>
            <div className="aboutsalary">
                <h3>Median entry-level salary</h3>
              <div className="occupation">
              <span className="occupation1">All occupations </span>
                <p>$37,960 <sup>*</sup></p>
              </div>
               
               <div className="project">
               <span className="project1">Data Scientist</span>
                <p>$138,100 <sup>**</sup></p>
               </div>   
            </div>
            <div className="open">
            <p>Job openings: 69,304<sup>**</sup></p>
            <p>Projected 10 year growth: +34.1% <sup>***</sup></p>
            </div>
           
            <div className="certificates">
                <h3>Recommended Professional Certificates</h3>
            </div>
 
            <div className="gallery">
           
         <div className="imagegallery">
                <div className="imagegoogle">
                    <a href="/"><img src="./ibm-data science.png" alt="random"/></a>
                </div>
                <div className="imagedescription">
                  <div className="imagegoogle2">
                  <p> <img src="./IBM-Logo-Blk---Square.png" alt="random"/>IBM</p>
                    <h3>IBM Data Scientist</h3>
                    <p>skills you’ll gain:Data science,Methodology,Deep Learning,machine...</p>
                    <p>4.6 <span><FaStar/> </span>(65.3k reviews)</p>
                    <div className="pcm">
                        <p>Beginner </p>
                        <h4>.</h4>
                         <p>Professional certificates</p>
                         <h4>.</h4>
                         <p>5 months</p>
                        </div>
                  </div>
                </div>
            </div>
            </div>
            <div className="explorearrow">
                <a href="/">Explore all certificates <FaArrowRight/></a>
            </div>
            <div className="comment">
            <img src="./emma_testimonial_image-dS.png" alt="adrieene"/> 
            <p> "Being able to complete it and having done that while also becoming a new mother and being able to
             get the internship made me feel really
             confident and like I could learn absolutely anything."</p>
                <span>– Emma S.</span>
            </div>
            <hr/>
            <div className="comment2">
                <p><sup>*</sup>Employment, Wages, and Projected Change in Employment by Typical Entry-level Education :
                 U.S. Bureau of Labor Statistics. Sept. 2022, www.bls.gov/emp/tables/education-summary.htm</p>
                <p><sup>**</sup> Median salary and job opening data are sourced from United States Lightcast™ 
                Job Postings Report. Data for job roles relevant to featured programs (7/1/2022 - 6/30/2023)</p>
                <p><sup>***</sup>Growth rate data is sourced from United States Lightcast™ Job Postings Report. 
                Data for job roles relevant to featured programs (7/1/2022 - 6/30/2023)</p>
            </div>
        </div>
    )
}
const Developer=()=>{
    return(
        <div className="tabcontent"  >
        <div className="manager">
            <h2>Front-End Developer</h2>
            <p>Design and develop the look, feel, function, and user experience of a website</p>
        </div>
        <div className="aboutsalary">
            <h3>Median entry-level salary</h3>
            <div className="occupation">
            <span className="occupation1">All occupations</span>
            <p>$37,960 <sup>*</sup></p>
            </div>
            <div className="project">
            <span className="project1">Project Manager</span>
            <p>$130,900 <sup>**</sup></p>
            </div>   
        </div>
        <div className="open">
        <p>Job openings:29,258<sup>**</sup></p>
        <p>Projected 10 year growth: +21.8% <sup>***</sup></p>
        </div>
     
        <div className="certificates">
            <h3>Recommended Professional Certificates</h3>
        </div>
        <div className="gallery">
           
           <div className="imagegallery">
                  <div className="imagegoogle">
                      <a href="/"><img src="./Meta Front-end-dev-ProCert.png" alt="random"/></a>
                  </div>
                  <div className="imagedescription">
                    <div className="imagegoogle2">
                    <p> <img src="./360-x-360meta.png" alt="random"/>Meta</p>
                      <h3>Meta Front-End Developer</h3>
                      <p>skills you’ll gain:Cascading style sheets(CSS) , HTML,UI/UX Designs,React,Javascript,...</p>
                      <p>4.7 <span><FaStar/></span>(10.9k reviews)</p>
                      <div className="pcm">
                          <p>Beginner </p>
                          <h4>.</h4>
                           <p>Professional certificates</p>
                           <h4>.</h4>
                           <p>7 months</p>
                          </div>
                    </div>
                  </div>
              </div>
              </div>
              <div className="explorearrow">
                <a href="/">Explore all certificates <FaArrowRight/></a>
            </div>
        <div className="comment">
        <img src="./Julio_Rodriguez-FED.png" alt="adrieene"/>
         <p>"Without a doubt, the web development courses on Coursera were instrumental in helping me 
        build a new career. I’d say that 80% of my current 
        skills were gained on Coursera."</p>
            <span>– Julio R.</span>
        </div>
        <hr/>
        <div className="comment2">
            <p><sup>*</sup>Employment, Wages, and Projected Change in Employment by Typical Entry-level Education :
             U.S. Bureau of Labor Statistics. Sept. 2022, www.bls.gov/emp/tables/education-summary.htm</p>
            <p><sup>**</sup> Median salary and job opening data are sourced from United States Lightcast™ 
            Job Postings Report. Data for job roles relevant to featured programs (7/1/2022 - 6/30/2023)</p>
            <p><sup>***</sup>Growth rate data is sourced from United States Lightcast™ Job Postings Report. 
            Data for job roles relevant to featured programs (7/1/2022 - 6/30/2023)</p>
        </div>
    </div>
    )
}
const Bookkeeper=()=>{
    return(
        <div className="tabcontent"  >
            <div className="manager">
                <h2>Bookkeeper</h2>
                <p>Record financial transactions and manage financial records</p>
            </div>
            <div className="aboutsalary">
                <h3>Median entry-level salary</h3>
                <div className="occupation">
                <span className="occupation1">All occupations</span>
                <p>$37,960 <sup>*</sup></p>
                </div>
            
                <div className="project">
                <span className="project1">Bookkeeper</span>
                <p>$45,700 <sup>**</sup></p>
                </div>   
            </div>
            <div className="open">
            <p>Job openings: 296,935<sup>**</sup></p>
            <p>Projected 10 year growth: +1.3% <sup>***</sup></p>
            </div>
            
            <div className="certificates">
                <h3>Recommended Professional Certificates</h3>
            </div>

            <div className="gallery">
            <div className="imagegallery">
                  <div className="imagegoogle">
                      <a href="/"><img src="./intuit-bookkeeping.png" alt="random"/></a>
                  </div>
                  <div className="imagedescription">
                    <div className="imagegoogle2">
                    <p> <img src="./Intuit_Square_360x360_WhiteonBlue.png" alt="random"/>Intuit</p>
                      <h3>Intuit Academy Bookkeeping</h3>
                      <p>skills you’ll gain:Double-Entry Bookkeping System,Bookkeeping,...</p>
                      <p>4.6 <span><FaStar/></span>(4.3k reviews)</p>
                      <div className="pcm">
                          <p>Beginner </p>
                          <h4>.</h4>
                           <p>Professional certificates</p>
                           <h4>.</h4>
                           <p>4 months</p>
                          </div>
                    </div>
                  </div>
              </div>
              </div>

              <div className="explorearrow">
                <a href="/">Explore all certificates <FaArrowRight/></a>
            </div>

            <div className="comment">
            <img src="./adrienne_testimonial_image.png" alt="adrieene"/>
            <p>"I took this course because my husband and I opened a new business and I wanted to be helpful. 
            This course has helped me understand bookkeeping and also, given me confidence in becoming a bookkeeper. I love how interactive and (although online) 
            Hands on it is. Thank you!"</p>
                <span>– Christina</span>
            </div>
            <hr/>
            <div className="comment2">
                <p><sup>*</sup>Employment, Wages, and Projected Change in Employment by Typical Entry-level Education :
                 U.S. Bureau of Labor Statistics. Sept. 2022, www.bls.gov/emp/tables/education-summary.htm</p>
                <p><sup>**</sup> Median salary and job opening data are sourced from United States Lightcast™ 
                Job Postings Report. Data for job roles relevant to featured programs (7/1/2022 - 6/30/2023)</p>
                <p><sup>***</sup>Growth rate data is sourced from United States Lightcast™ Job Postings Report. 
                Data for job roles relevant to featured programs (7/1/2022 - 6/30/2023)</p>
            </div>
        </div> 
    )
}

    return(
        <div className="launchcareer">
        <h1>Launch a new career in as little as 6 months <a href="/">View all roles <FaArrowRight/></a></h1>
     
        <div className="manage" role="tablist" id={selectedOption} onClick={handleChange}>
           
      
            <button className="projectmanager" id="projectmanager"  >
                Project Manager
            </button>
            <button  className="dataanalyst" id="dataanalyst"  >
                Data Analyst
            </button>
            <button  className="uxdesinger" id="uxdesinger" >
                UX Desinger
            </button>
            <button  className="itspecialist"  id="itspecialist">
                IT Support Specialist
            </button>
       
            <button  className="digitalmaketer"  id="digitalmaketer">
                Digital Marketer
            </button>
            <button  className="datascientist"  id="datascientist">
                Data Scientist
            </button>
            <button  className="developer"  id="developer">
                Front-end Developer
            </button>
            <button  className="bookkeeper" id="bookkeeper" >
                Bookkeeper
            </button>
            </div>
           
            

            {selectedOption ==="projectmanager" && <Projectmanager/> }
            {selectedOption ==="dataanalyst" && <Dataanalyst/> } 
            {selectedOption ==="uxdesinger" && <Uxdesinger/> } 
            {selectedOption ==="itspecialist" && <Itsupport/>} 
            {selectedOption ==="digitalmaketer" && <Digitalmaketer/> } 
            {selectedOption ==="datascientist" && <Datascientist/> } 
            {selectedOption ==="developer" && <Developer/> } 
            {selectedOption ==="bookkeeper" && <Bookkeeper/>}     
       
  <br/>
  <br/>
    </div>

    );
}
export default Individualcourse;