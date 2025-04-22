import { useState } from "react";

function formAdoption() {

    const [nameCat, setNameCat] = useState('');
    const [raceCat, setRaceCat] = useState('');

    function handleFormCat(event) {
        event.preventDefault();
        console.log('ho mandato i dati')

        alert(`Grazie, hai adottato: ${nameCat}, di razza: ${raceCat}`)

    }
    return <>
        <form onSubmit={handleFormCat}>
            <label htmlFor="name-cat">Nome del gatto:</label>
            <input type="text"
                id="name-cat"
                value={nameCat}
                onChange={(e) => setNameCat(e.target.value)}
                placeholder="Nome del gatto" />

            <label htmlFor="race-cat">Razza del gatto:</label>
            <input type="text"
                id="race-cat"
                value={raceCat}
                onChange={(e) => setRaceCat(e.target.value)}
                placeholder="Razza del gatto" />
            <button type="submit">Invia i dati</button>
        </form>

        <p>Il nome del gatto è: {nameCat}.</p>
        <p>La razza del gatto è: {raceCat}.</p>
    </>
}

export default formAdoption;