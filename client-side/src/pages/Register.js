import Layout from "./Layout";
import HomeButton from "./HomeButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';


function Register() {

    const [inputs, setInputs] = useState({});
    let navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        alert("Registrazione completata!\nPremi OK per andare alla schermata di login.");
        navigate('/login', { replace: true });
    }

    return (

        <Layout>
            <HomeButton />

            <div className='text-center text-md-center home-box display-grid' style={{ placeSelf: "center", width: "500px" }}>

                <h1 className=" my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 75%)' }}>
                    REGISTRAZIONE <br />
                </h1>

                <p style={{ color: 'hsl(0, 0%, 100%)' }}>Compila il form per registrarti ed accedere ad UniNa Screensharing.</p>
                <br />

                <form onSubmit={handleSubmit}>
                    <MDBInput className='mb-4' type='text' name='nome' label='Nome' value={inputs.nome || ""} onChange={handleChange} contrast />
                    <MDBInput className='mb-4' type='text' name='cognome' label='Cognome' value={inputs.cognome || ""} onChange={handleChange} contrast />
                    <MDBInput className='mb-4' type='email' name='email' label='Email' value={inputs.email || ""} onChange={handleChange} contrast />
                    <MDBInput className='mb-4' type='text' name='username' label='Username' value={inputs.username || ""} onChange={handleChange} contrast />
                    <MDBInput className='mb-4' type='password' name='password' label='Password' value={inputs.password || ""} onChange={handleChange} contrast />

                    <MDBBtn type='submit' style={{ backgroundColor: "hsla(218, 92%, 76%, 0.671)" }}>
                        REGISTRATI
                    </MDBBtn>
                    
                </form>
            </div>
        </Layout>
    )

}

export default Register;