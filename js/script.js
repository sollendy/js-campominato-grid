//voglio creare una griglia di gioco numerata da 1 a 100 che spunta non appena l'utente preme il bottone
//creo gli elementi html del contenitore del contenitore della griglia e del bottone
//creo le variabili del contenitore e del bottone
//creo le variabili del numero di celle nella griglia
//creo gli elementi div uno alla volta in un ciclo for presi dalla funzione
//creo la funzione in cui redigere le istruzioni da dare al click del bottone
//--> nel click voglio che:
    //si crei un nuovo elemento che sarà un div
    //codesto elemento venga appeso nel contenitore generale
    //creo la funzione che fa si che vengano generati dei numeri all'interno delle celle
//do le ultime modifiche con CSS

//creo gli elementi html del contenitore del contenitore della griglia e del bottone
const contEl = document.getElementById('general-cnt');
const btnEl = document.getElementById('grid-on');

//creo le variabili del numero di celle nella griglia
let celle = 100;

//creo gli elementi div uno alla volta in un ciclo for presi dalla funzione
for (i = 0; i < celle; i++) {
 //creo la funzione in cui redigere le istruzioni da dare al click del bottone 
 //--> dopo aver creato la funzione la appccico qua in una variabile



}

function SquareSpawn(text) {
    //--> nel click voglio che:
    //si crei un nuovo elemento che sarà un div
    //codesto elemento venga appeso nel contenitore generale
    let newElement = document.createElement('div');
    newElement.classList.add('square');
    newElement.innerText = text;
    return newElement;
}