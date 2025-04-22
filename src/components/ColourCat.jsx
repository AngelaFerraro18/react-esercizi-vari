import { useEffect, useState } from "react";

//creo un'array di stringhe per definire vari colori di gatti
const colours = ['nero', 'rosso', 'bianco', 'tricolore', ' grigio', 'bicolore'];


function ColourCat() {

    //creo una variabile di stato inizialmente definita come stringa vuota
    const [colour, setColour] = useState('');

    //uso useEffect per cambiare il valore di colour ogni volta che esso viene selezionato e lo mostro in console
    useEffect(() => {
        if (colour) {
            console.log('Il colore selezionato è:', colour);
        }

    }, [colour]);

    return (
        <div>
            <h2>Seleziona il colore del gatto che preferisci!</h2>
            <ul>
                {colours.map((colour) => <li key={colour}><button onClick={() => setColour(colour)}>{colour}</button></li>)}
            </ul>
            {colour && <p>Il colore che hai scelto è: <em>{colour}</em></p>}
        </div>)
}

export default ColourCat;