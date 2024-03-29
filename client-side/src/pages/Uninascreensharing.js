import React, { useEffect } from 'react';
import Layout from './Layout';

// Pagina che effettua il redirect al back-end
function UniNaScreensharing() {

    useEffect(() => {

        // Effettua il reindirizzamento al caricamento della pagina
        window.location.href = "https://localhost/server/uninascreensharing";
    }, []);  // La dipendenza vuota indica che useEffect deve essere eseguito solo una volta al caricamento

    return (
        <Layout>
            <h1 className=" my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 75%)' }}>

                Attendere...<br></br>Verrai indirizzato ad UniNaScreensharing a breve.

            </h1>
        </Layout>
    );
}

export default UniNaScreensharing;
