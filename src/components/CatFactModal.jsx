import { useEffect, useState } from "react";

function CatFactModal() {
    //creo una variabile di stato dove imposto a false la sua condizione iniziale
    const [isOpen, setIsOpen] = useState(false);

    //creo una funzione dove faccio un'istruzione condizionale --> se isOpen è true allora cambio il title del documento, altrimenti lo imposto come era all'inizio
    function isOpenFn() {
        if (isOpen) {
            console.log('Modale del gatto aperto');
            document.title = 'Curiosità sul gatto!'
        } else {
            document.title = 'React App'
        }
    }

    //uso useEffect per cambiare lo stato quando isOpen cambia
    useEffect(isOpenFn, [isOpen]);

    return <div>
        <h3>Scopri di più sui gatti!</h3>
        <button onClick={() => setIsOpen(true)}>Mostra</button>
        {isOpen && (<div><p>I gatti hanno 9 vite</p><button onClick={() => setIsOpen(false)}>Chiudi</button></div>)}
    </div>
}

export default CatFactModal;