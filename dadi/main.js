//giocatore 1 lancia dadi

var primogiocatore = Math.floor(Math.random() * 6 + 1);
console.log(primogiocatore);

//giocatore 2 lancia dadi

var secondogiocatore = Math.floor(Math.random() * 6 + 1);
console.log(secondogiocatore);


// il più alto vince
if (primogiocatore > secondogiocatore) {
  console.log("Giocatore 1: Hai vinto!");
  document.writeln("Giocatore 1: Hai vinto!");
}
else if (primogiocatore < secondogiocatore){
  console.log("Giocatore 2: Hai vinto!");
  document.writeln("Giocatore 2: Hai vinto!");
}
else if (primogiocatore == secondogiocatore){
  console.log("Parità");
  document.writeln("Parità");
}
