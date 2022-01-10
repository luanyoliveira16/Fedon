function responder() {
    var resposta = prompt (`Responda da seguinte maneira: 
    0 - SIM
    1 - NÃO `)

    while (true) {
        if(resposta == 0) {
            window.location.href="aporiasimias-2.html"
            break;
      } else if (resposta == 1) {
             window.location.href="simias-4.html"
             break;
      } else {
             alert("Escolha 0 ou 1")
             resposta = prompt (`Responda da seguinte maneira:
              0 - SIM
              1 - NÃO`)
              break;
      }
    }

}