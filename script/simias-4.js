function responder() {
    var resposta = prompt ("Responda da seguinte maneira: \n\n 0 - TEORIA DA AFINIDADE \n 1 - ALMA-HARMONIA")

  while (true) {
        if(resposta == 0){
          window.location.href="simias-5.html"
          break;
        } else if (resposta == 1) {
          window.location.href="aporiasimias-3.html"
          break;
        } else {
          alert("Escolha 0 ou 1") 
          resposta = prompt("Responda da seguinte maneira: \n\n 0 - TEORIA DA AFINIDADE \n 1 - ALMA-HARMONIA")
          
     }
    }
}
