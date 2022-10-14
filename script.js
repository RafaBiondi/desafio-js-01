let firstNumber = Number(prompt("Insira o primeiro número:"))
let secondNumber = Number(prompt("Insira o segundo número:"))

let sum = firstNumber + secondNumber
let sub = firstNumber- secondNumber
let multi = firstNumber * secondNumber
let div = firstNumber / secondNumber
let rest = firstNumber % secondNumber

let result = (sum / 2) % 2 == 0 ? 'par' : 'ímpar'

alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${multi}`)
alert(`A divisão dos dois números é: ${div}`)
alert(`O resto da divisão dos dois números é: ${rest}`)
alert(`A soma dos dois números é ${result}`)


