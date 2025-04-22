import { useState } from "react";

function CatsCount() {
    //definisco lo useState con 5 gatti inizialmente
    const [cats, setCats] = useState(5);

    //creo una funzione per l'aggiunta di gatti tramite il pulsante
    function addCats() {
        return setCats(cats + 1);
    }

    //creo una funzione per settare lo stato iniziale a 0 per azzerare il contatore
    function zeroCats() {
        return setCats(0);
    }

    return <>
        <h2>I gatti nel rifugio sono:</h2>
        <p>{cats}</p>
        <button onClick={addCats}>Aggiungi gatti</button>
        <button onClick={zeroCats}>Azzera i gatti</button>
    </>
}

export default CatsCount;