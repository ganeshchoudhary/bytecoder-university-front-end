import React from "react";
import Individual from "./forindividuals";
import Individualcourse from "./individualcourse";
import Degreeprograms from "./degreeprograms";
import CourseCertificate from "./coursecertificate";
import Freecourses from "./freecourses";
import Explorecoursera from "./explorecoursera";
import Outcomes from "./outcomes";

function Forindividual(){
    return(
        <div>
            
            <Individual/>
            <Individualcourse/>
            <Degreeprograms/>
            <CourseCertificate/>
            <Freecourses/>
            <Explorecoursera/>
            <Outcomes/>
        </div>
    )
}
export default Forindividual;