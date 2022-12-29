



  import React from "react";
  import "./Internship.css";

  import STEG from "../../assets/steg.jpg";
  import ecole from "../../assets/ecole.webp";
  import { AiFillCheckCircle } from "react-icons/ai";
  import { BsCheck } from "react-icons/bs";
  
  
  
  const Internship = () => {
    return (
      <section id="internship">
        <h5> What I have</h5>
        <h2>Experience</h2>
  
       
  
          <div className="card-container">
            <span className="pro"> jan 2020- feb 2022</span>
            <img className="round" src={ecole} alt="user" />
            <h3> Primary School teacher in private school</h3>
           
            </div>

          <div className="card-container">
            <span className="pro">Feb 2018- April 2018</span>
            <img
              className="round"
              src={STEG}
              alt="user"
            />
            <h3> COMPANY STEG Gafsa </h3>
            <h6>Graduation end of study Internship</h6>
            <p> <AiFillCheckCircle style={{ color: "green" }}/>
            development of a web application for managing the monitoring and control of projects for the company STEG
            </p>
          
           
            </div>
     
      </section>
    );
  };
  
  export default Internship;
    
