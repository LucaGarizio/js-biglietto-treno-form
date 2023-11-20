// Descrizione:**
// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.



const generaBiglietto = document.getElementById("generaBiglietto");
console.log("biglietto generato" ,generaBiglietto);

generaBiglietto.addEventListener("click" ,

    function() {
        
    const userDistance = document.getElementById("userDistance").value;
    const userEta = document.getElementById("userEta").value;
    // il prezzo del biglietto è definito in base ai km (0.21 € al km)
    const prezzoKm = 0.21;
    console.log("euro per km", prezzoKm);


    let totalPrice = userDistance * prezzoKm;
    console.log("prezzo totale per distanza", totalPrice);


    // va applicato uno sconto del 20% per i minorenni
    let sconto = 0;
    let risultato = 0

    if (userEta <17){
        sconto = ((totalPrice * 20) / 100);
        console.log("sconto minorenne", sconto);
    }
    // va applicato uno sconto del 40% per gli over 65.
    if (userEta >=65){
        sconto = ((totalPrice * 40) / 100);
        console.log("sconto over65", sconto);
    }

    risultato = totalPrice - sconto;
    console.log(risultato);
    
    }
);

