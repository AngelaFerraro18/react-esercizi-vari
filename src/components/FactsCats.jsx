import axios from "axios";
import { useEffect, useState } from "react";

function FactsCats() {

    //creo uno stato iniziale vuoto per i fatti sui gatti
    const [fact, setFact] = useState('');

    //salvo in una variabile l'api di riferimento
    const urlApiFacts = 'https://catfact.ninja/fact';

    //creo una funzione per fare la chiamata api e ottenere i fatti sui gatti
    function randomFacts() {
        axios.get(urlApiFacts)
            .then(response => setFact(response.data))
            .catch(error => console.error(error))
    }

    //imposto la funzione nello useEffect in modo che avvenga al caricamento della pagina una volta sola
    useEffect(randomFacts, []);

    return <>
        <p>{fact.fact}</p>
        <button onClick={randomFacts}>Scopri altri fatti!</button>
    </>

}

export default FactsCats;