import React from "react"
import world from "../images/world.png"

export default function Navbar() {
    return(
        <div className="nav--container">
            <img src={world} alt="no world found" className="nav--world"/>
            <p className="nav--text">my travel journal</p>
        </div>
    )
}