function responder() {
    var resposta = prompt ("Responda da seguinte maneira: \n\n 0 - SIM \n 1 - NÃO")

    while (true) {
        if (resposta == 0) {
            window.location.href = "aporiacebes-2.html";
            break;
     }  else if (resposta == 1) {
             window.location.href = "cebes-4.html";
             break;
     }  else {
            alert("Escolha 0 ou 1")
            prompt ("Responda da seguinte maneira: \n\n 0 - SIM \n 1 - NÃO");
     }

    }
}