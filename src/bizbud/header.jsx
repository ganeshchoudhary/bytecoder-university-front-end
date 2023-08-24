import React from "react";
import './header.css';
function Header(){
    return(
         <div class="heading">
         <div class="bizbud" >BizBud
         </div>
         <div class="bar-item">
           <div><a href="/home">Home</a></div>
           <div><a href="/service">Services</a></div>
           <div><a href="/about">About</a></div>
           <div> <a href="/testimonials">Testimonials</a></div>
         <div><a href="/clients">Clients</a></div>
         <div><a href="/Contact">Contact</a></div>
         <button onClick="hello">Call Now</button>
           </div>
     </div>
    );
    
}
export default Header;