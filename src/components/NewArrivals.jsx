import { useState, useEffect } from "react";

function NewArrivals() {

    //salvo in una variabile il numero di gatti già presenti nel rifugio
    const [newCat, setNewCat] = useState(1);

    useEffect(() => {
        //salvo nella variabile il valore di setInterval, impostato ogni 5 sec
        const timerCats = setInterval(() => {
            //in questa variabile vado a salvare un numero randomico di gatti
            const cats = Math.floor(Math.random() * 3) + 1;
            //vado ad aggiungere al numero iniziale il nuovo numero di gatti presenti
            setNewCat(prev => prev + cats);
        }, 5000)

        //pulisco il timer impostato
        return () => clearInterval(timerCats);

    }, []);


    return <>
        <p>Numero dei gatti presenti nel rifugio: {newCat}</p>
        <button onClick={() => setNewCat(0)}>Azzera il contatore!</button>
    </>
}
export default NewArrivals;