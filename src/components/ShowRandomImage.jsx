import axios from "axios";
import { useEffect, useState } from "react";

function ShowRandomImage() {

    //creo una variabile per gestire le immagini dei gatti
    const [image, setImage] = useState('');

    //salvo in una variabile l'endpoint dell'api che voglio usare per le immagini
    const urlApi = 'https://api.thecatapi.com/v1/images/search';

    //creo una funzione per effettuare la chiamata api
    function changeImageCat() {
        axios.get(urlApi)
            .then(response => {
                //essendo un array di oggetti, devo accedere all'oggetto tramite index
                console.log(response.data[0]);
                return setImage(response.data[0]);
            })
            .catch(error => console.error(error));
    }
    //al caricamento della pagina andrò a visualizzare l'immagine del gatto
    useEffect(changeImageCat, [])

    return <>
        <div>
            <img src={image.url} alt="gatti-vari" />
        </div>
        <button onClick={changeImageCat}>Cambia gatto</button>
    </>
}

export default ShowRandomImage;