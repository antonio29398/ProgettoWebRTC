import '../App.css';
import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";

// Implementazione della homepage
function Home() {

  let navigate = useNavigate();
  return (

    <Layout >

      <div className='text-center text-md-center home-box display-grid' style={{ placeSelf: "center", width: "800px" }}>

        <h1 className=" my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
          UNINA Screensharing <br />
          <span style={{ color: 'hsl(218, 81%, 75%)' }}>WEBRTC Project</span>
        </h1>

        <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
          Webapp sviluppata per il progetto del corso di studi WEB and Real Time Communication Systems a.a. 2023/24.
          Il servizio permette la creazione e la partecipazione a varie stanze in cui ciascun utente può condividere
          il proprio schermo a tutti i partecipanti.
          <br />
          <br />
          È necessaria una registrazione prima di utilizzare il servizio.

          <br />
          <br />

        </p>


        <div className='my-5 bg-glass'>
          <div className='p-5'>

            <MDBBtn className='w-100 mb-4' style={{ backgroundColor: "hsla(218, 92%, 76%, 0.671)" }} size='md' onClick={() => navigate("/accedi")}>Accedi</MDBBtn>
            <MDBBtn className='w-100 mb-4' style={{ backgroundColor: "hsla(218, 92%, 76%, 0.671)" }} size='md' onClick={() => navigate("/register")}>Registrati</MDBBtn>

          </div>
        </div>
      </div>
    </Layout>

  );


}

export default Home;
