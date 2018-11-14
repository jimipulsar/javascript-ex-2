
var email_access = prompt("Inserisci la tua e-mail");

var notifica = document.getElementById('notifica');

var emails = [ "marchi@gmail.com", "assistenzaboolean@gmail.com", "jimipulsar@gmail.com" ];

var auth = false;

for (var i = 0; i < emails.length; i++) {
  if (emails[i] == email_access) {
    auth = true;
  }
}


if (auth == true) {
  document.writeln("Congratulazioni! Sei presente nella lista.") ;
  console.log("Accesso consentito.");
}

else {
  document.writeln("Non sei presente nella lista!") ;
  console.log("Accesso negato.");
}
