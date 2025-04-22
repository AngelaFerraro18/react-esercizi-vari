
import { useEffect, useState } from "react";

function CatHumor() {
    //creo una lista di mood
    const moods = ['happy', 'angry', 'sad', 'grumpy'];

    //creo una variabile di stato per i mood
    const [mood, setMood] = useState('');

    //creo una variabile di stato per le immagini
    const [catHumorImg, setCatHumorImg] = useState('');


    //creo una funzione per generare l'immagine e il mood associato
    function changeMoodCat() {
        //creo una variabile dove viene salvato il valore randomico di un mood
        const randomMood = moods[Math.floor(Math.random() * moods.length)];

        //imposto il valore di mood randomico come mood iniziale
        setMood(randomMood);

        //con l'interpolazione vado ad aggiungere la path per raggiungere l'immagine corrispondente al mood
        const urlCat = `https://cataas.com/cat/${randomMood}`;

        //restituisco l'immagine
        return setCatHumorImg(urlCat);
    }

    useEffect(changeMoodCat, [])


    return <div>
        {catHumorImg && <img src={catHumorImg} alt='gatto' />}
        <p>Hai scelto il gatto: {mood}</p>
        <button onClick={() => changeMoodCat()}>Cambia l'umore del gatto!</button>
    </div>
}

export default CatHumor;