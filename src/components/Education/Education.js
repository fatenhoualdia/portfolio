import React from 'react'
import "./Education.css"
import GOMYCODE from "../../assets/gomycode.png"
import fsgf from "../../assets/fsgf.png"
import BAC from "../../assets/bac.jpg"
import {AiFillCheckCircle} from "react-icons/ai"

const Education = () => {
    
  return (
   <section id="education">
    <h5> Look At My Cursus</h5>
    <h2>Education</h2>

    {/* <div className="container education__container"> 
  <div className="card-container">
  <span className="pro">2022</span>
  <img className="round" src={GOMYCODE} alt="user" />
  <h4>Gomycode Tunisia</h4>
  <h6>Full stack JavaScript Bootcamp</h6>
</div>
  
  <div className="card-container">
  <span className="pro">2016 - 2019</span>
  <img className="round" src={ISIMM} alt="user" />
  <h4>ISIM Monastir-Tunisia</h4>
  <h6>Electronic & Embedded System Enginner</h6>
  <p> <strong style={{color:"blue"}}> Specialty:</strong><br /> Microelectronic</p>
</div>



<div className="card-container">
  <span className="pro">2013-2016</span>
  <img className="round" src={ISSAT} alt="user" />
  <h4>ISSAT Sousse-Tunisia</h4>
  <h6>Applied Degree in Electronics, Electrotechnical & automatisme</h6>
  <p> <strong style={{color:"blue"}}> Specialty:</strong><br /> Industrial Electronic</p>
</div>





<div className="card-container">
  <span className="pro">2013</span>
  <img className="round" src={BAC} alt="user" />
  <h4> High School of Elguettar-Gafsa-Tunisia</h4>
  <h6>Baccalaureate Degree</h6>
  <p><strong style={{color:"blue"}}> Grade:</strong> <br /> Good </p>

</div>
</div> */}



<div className="timeline">
  <div className="cont left">
    <div className="date">2022</div>
    <img src={GOMYCODE} className="icon" alt="icon" />
    <div className="content">
      <h2> Gomycode Tunisia </h2>
      <p>
      <AiFillCheckCircle style={{ color:"green" }}/> Full stack JavaScript Bootcamp
      </p>
    </div>
  </div>
  <div className="cont right">
    <div className="date">2018</div>
    <img src={fsgf} className="icon" alt="icon" />
    <div className="content">
    <h2> faculté des sciences de gafsa</h2>
    <p> <AiFillCheckCircle style={{ color:"green" }}/> applied degree in computer science </p>
    <p> <span style={{color:"blue", fontSize:"20px", fontWeight:"bold"}}> Specialty:</span> software engineering
</p>
    </div>
  </div>
  


  <div className="cont right">
    <div className="date">2013</div>
    <img src={BAC} className="icon" alt="icon" />
    <div className="content">
      <h2>High School of Mdhilla Gafsa</h2>
      <p> <AiFillCheckCircle style={{ color:"green" }}/>Baccalaureate Degree</p>
    <p> <span style={{color:"blue", fontSize:"20px", fontWeight:"bold"}}> Grade:</span> Good </p>
    </div>
  </div>

</div>
   </section>
  )
}

export default Education