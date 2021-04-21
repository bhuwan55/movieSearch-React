import React from "react"


export default function Header(){
    return(
        <>
        <div className="header">
            <a href="#default" className="logo">Movie Search</a>
            <div className="header-right">
                <a className="active" href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>
        </>
    )
}