import React from 'react'
import './Navbar.css'

function navbar() {
    return (
        <div className="navbar">
            <div className="sidebar">></div>
            <h1 className="webname">Movie System</h1>
            <input placeholder="Search Movie..."/>
            <a>User</a>
            <a>Help</a>
            <a>Home</a>
        </div>
    )
}

export default navbar
