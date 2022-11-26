// variáveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector(`#btnTry`)
const btnReset = document.querySelector(`#btnReset`)
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1


// Eventos

btnTry.addEventListener(`click`, handleTryClick)
btnReset.addEventListener(`click`, handleResetClick)
document.addEventListener('keydown', enterKey)

//funções callback

function handleTryClick(event) {
  event.preventDefault() // nao faca o padrao

  const inputNumber = document.querySelector("#inputNumber")

 if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas`
  
  }else if (Number(inputNumber.value) < 0 || (Number(inputNumber.value) > 10)){alert("número invalido")
  xAttempts--}
  else if (inputNumber.value == ""){alert("insira um número valido") 
  xAttempts--}

  inputNumber.value= ""
  xAttempts++
}


function handleResetClick () {
  toggleScreen ()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen () {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}


function enterKey(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}