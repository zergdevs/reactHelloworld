import React from 'react'
import logo from "./images/logoname.png"
import backg from "./images/nilea.jpg"
import hellow from "./images/hello.png"
import "./header.css"
function Header() {
  return (
    <div className= "header">

        <div className= "header__menu">
            <a href=""><img src={logo} alt="logo"></img></a>
            <a href=""><img src={backg} alt="logo"></img></a>

            <div className= 'cartel'>
            <a href=""><img src={hellow} alt="logo"></img></a>
            
            </div>
            <div className= "header__nav">
                <nav>
                <a href="/">Contacto</a>
                <a href="/">Portfolio</a>
                <a href="/">Github</a>
                </nav>
                
                </div>    

        </div>
    </div>
  )
}

export default Header