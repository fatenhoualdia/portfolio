import React, { useState } from 'react'
import "./nav.css"
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai"
import {BiBook, BiMessageSquareDetail} from "react-icons/bi"
import {RiServerLine} from "react-icons/ri"
import {FaUserGraduate} from "react-icons/fa"

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
  <nav>
    <a href="#home"  onClick={()=>setActiveNav("#home")} className={activeNav=== '#home' ? 'active': ''}> <AiOutlineHome/></a>
    <a href="#about" className={activeNav=== '#about' ? 'active': ''} onClick={()=>setActiveNav("#about")}> <AiOutlineUser/></a>
    <a href="#education" className={activeNav=== '#education' ? 'active': ''} onClick={()=>setActiveNav("#education")}> <FaUserGraduate/></a>
    <a href="#experience" className={activeNav=== '#experience' ? 'active': ''} onClick={()=>setActiveNav("#experience")}> <BiBook/></a>
    <a href="#certification" className={activeNav=== '#certification' ? 'active': ''} onClick={()=>setActiveNav("#certification")}> <RiServerLine/></a>
    <a href="#contact" className={activeNav=== '#contact' ? 'active': ''} onClick={()=>setActiveNav("#contact")}> <BiMessageSquareDetail/></a>

  </nav>
  )
}   

export default Nav