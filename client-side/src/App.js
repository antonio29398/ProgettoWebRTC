
import './App.css';
import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
            UNINA Screensharing <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}>WEBRTC Project</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
            Webapp sviluppata per il progetto del corso di studi WEBRTC and real time communication anno 2023/24.
            Il servizio permette la creazione e la partecipazione a varie stanze in cui è possibile condividere 
            il proprio display fra gli ospiti in maniera contemporanea.
            <br/>
            <br/>
            È necessario registrarsi per utilizzare il servizio.


          </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>

              {/* <MDBInput wrapperClass='mb-4' label='Nome' id='form1' type='text'/>
              <MDBInput wrapperClass='mb-4' label='Cognome' id='form2' type='text'/>
              <MDBInput wrapperClass='mb-4' label='Username' id='form3' type='text'/>
              <MDBInput wrapperClass='mb-4' label='Email' id='form4' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form5' type='password'/> */}


              <MDBBtn className='w-100 mb-4' size='md'>Accedi</MDBBtn>

              <MDBBtn className='w-100 mb-4' size='md'>Registrati</MDBBtn>


            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default App;
