import home from '../immagini/home-logo.png'
import "../App.css"
import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomeButton() {

    let navigate = useNavigate();

    function ComeHome(){
        navigate('/', {replace: true});
    }
    
    return (

        <button className="btn btn-light" alt='Home' style={{ margin: '10px', backgroundColor: "hsla(218, 92%, 76%, 0.671)" }} onClick={ComeHome}>

            <img src={home} width="20" />

        </button>

    );
}



export default HomeButton;