import logo from '../immagini/logo-uni.png';
import home from '../immagini/home-logo.png'
import "../App.css"
import React from 'react';

function Layout({ children }) {

    return (
        <div fluid className="overflow-hidden layout-design" style={{ backgroundImage: `url(${logo})` }}>

            {children}

        </div>

    );
}



export default Layout;