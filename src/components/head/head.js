import React from 'react';
import './head.css';
import { Logo } from "./logo/logo"
import { Info } from "./info/info"

export const Head = () => {
    return(
        <div className="navbar">
           <Logo />
           <Info />
        </div>
    )
}