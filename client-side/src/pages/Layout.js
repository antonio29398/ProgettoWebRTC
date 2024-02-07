import logo from '../immagini/logo-uni.png';
import "../App.css"
import React from 'react';

// Implementazione del layout della pagina
function Layout({ children }) {

    return (
        <div className="overflow-hidden layout-design" style={{ backgroundImage: `url(${logo})` }}>

            {children}

        </div>

    );
}



export default Layout;