import home from '../immagini/home-logo.png'
import "../App.css"
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Implementazione del bottone che permette di tornare alla homepage
function HomeButton() {

    let navigate = useNavigate();

    return (

        <button className="btn btn-light" alt="Home" style={{ margin: '10px', backgroundColor: "hsla(218, 92%, 76%, 0.671)" }} onClick={() => navigate('/', { replace: true })}>

            <img src={home} alt="HomeButton" width="20" />

        </button>

    );
}



export default HomeButton;