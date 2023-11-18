var maximoTentativas = 10
var numeroTentativas = 1
var numeroSecreto = parseInt(Math.random()*1001)
var chute = 0

var iniciarJogo =  prompt(`Deseja iniciar o jogo? (s/n)`)
    if(iniciarJogo =="s") {
      while (numeroTentativas <= maximoTentativas && chute != numeroSecreto) {
        chute = prompt("Digite um número entre 0 e 1000")

        if(chute == numeroSecreto) {
          alert(`${numeroTentativas}ª tentativa: Acertou Mizeravi :) ${chute} é o número correto!`)

          var reiniciar =  prompt(`Deseja recomeçar o jogo? (s/n)`)
          if(reiniciar =="s") {
            numeroTentativas = 1
            numeroSecreto = parseInt(Math.random()*1001)
          }
        } else if (numeroTentativas == maximoTentativas){
          alert(`${numeroTentativas}ª tentativa: Você perdeu... O número secreto era ${numeroSecreto} :(`)

          var reiniciar =  prompt(`Deseja recomeçar o jogo? (s/n)`)
          if(reiniciar =="s") {
            numeroTentativas = 1
            numeroSecreto = parseInt(Math.random()*1001)
          }

        } else if(chute < numeroSecreto) {
          alert(`${numeroTentativas}ª tentativa: Errow! O número é maior do que ${chute}.`)
        } else if(chute > numeroSecreto) {
          alert(`${numeroTentativas}ª tentativa: Errow! O número é menor do que ${chute}.`)
        }
        numeroTentativas +=1
      }
}

