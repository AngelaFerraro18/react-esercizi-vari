import { useState, useEffect } from "react";

function SetTimerMin() {
    //salvo nella variabile di stato un valore iniziale casuale
    const [min, setMin] = useState(10);

    //creo una funzione per andare a scalare nel tempo il numero dei gatti
    function minCats() {

        //se il valore iniziale sarà 0 allora interrompo tutto
        if (min === 0) return;

        //salvo nella variabile il valore del conto alla rovescia
        const minTimer = setInterval(() => {
            setMin(min - 1);
        }, 1000);

        //pulisco il timer
        return () => clearInterval(minTimer);
    }

    useEffect(minCats, [min]);

    return <p>Numero dei gatti:{min}</p>
}

export default SetTimerMin;