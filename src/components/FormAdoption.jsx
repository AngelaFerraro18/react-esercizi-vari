import { useState } from "react";

function FormAdoption() {

    //per lavorare su più input vado a creare un oggetto nello useState per il nome e la razza
    const [catForm, setCatForm] = useState({
        name: '',
        race: ''
    })

    //creo una funzione per creare un nuovo oggetto con i nuovi valori aggiornati 
    function handleChange(event) {
        const { name, value } = event.target;

        setCatForm(prev => ({ ...prev, [name]: value }));
    }

    //creo una funzione per mandare un alert di avviso per l'utente
    function handleFormCat(event) {
        event.preventDefault();
        console.log('ho mandato i dati')

        alert(`Grazie, hai adottato: ${catForm.name}, razza: ${catForm.race}`)

    }
    return <>
        <form onSubmit={handleFormCat}>
            <label htmlFor="name-cat">Nome del gatto:</label>
            <input type="text"
                id="name-cat"
                name="name"
                value={catForm.name}
                onChange={handleChange}
                placeholder="Nome del gatto" />

            <label htmlFor="race-cat">Razza del gatto:</label>
            <input type="text"
                id="race-cat"
                name="race"
                value={catForm.race}
                onChange={handleChange}
                placeholder="Razza del gatto" />
            <button type="submit">Invia i dati</button>
        </form>

        <p>Il nome del gatto è: {catForm.name}.</p>
        <p>La razza del gatto è: {catForm.race}.</p>
    </>
}

export default FormAdoption;