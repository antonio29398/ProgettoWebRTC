import Layout from "./Layout";
import HomeButton from "./HomeButton";
import { useState } from "react";
import React from "react";

import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';


function Login() {

    const [inputs, setInputs] = useState({});
    const [postId, setPostId] = useState();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value }))
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputs)
        };

       
        const response = await fetch('http://localhost:8080/login', requestOptions);
       
        // const data = await response.json();
        
        
        // if(data.body.lenght === 0){
            alert("vuoto");
            window.location.reload();
        // }
        // setPostId(data.id);
    }

    return (

        <Layout>
            <HomeButton />

            <div className='text-center text-md-center home-box display-grid' style={{ placeSelf: "center", width: "500px" }}>
                <h1 className=" my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 75%)' }}>
                    LOGIN <br />
                </h1>
                <p style={{ color: 'hsl(0, 0%, 100%)' }}>Inserisci le tue credenziali di accesso ad UniNa Screensharing.</p>
                <br />
                <form onSubmit={handleSubmit}>
                    <MDBInput className='mb-4' type='text' name='username' label='Username' value={inputs.username || ""} onChange={handleChange} contrast />
                    <MDBInput className='mb-4' type='password' name='password' label='Password' value={inputs.password || ""} onChange={handleChange} contrast />

                    <MDBBtn type='submit' style={{ backgroundColor: "hsla(218, 92%, 76%, 0.671)" }}>
                        ACCEDI
                    </MDBBtn>
                </form>
            </div>

        </Layout>
    )

}

export default Login;
