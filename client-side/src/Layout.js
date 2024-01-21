import logo from './immagini/logo-uni.png'; 
import "./App.css"
import React from 'react';

function Layout({children}){
    return (
<div fluid className="overflow-hidden top-level-box" style = {{backgroundColor: "black", backgroundImage: `url(${logo})`}}>
    {children}</div>

    );
}



export default Layout;