function sum(number1, number2){
    return number1 + number2
}

function subtract(number1, number2){
    return number1 - number2
}

function multiply(number1, number2){
    return number1 * number2
}

function divide(number1, number2){
    return number1 / number2
}

function operate(number1, number2, operator){
    if(operator==="+"){
        return sum(number1, number2)
    }
    else if(operator==="-"){
        return subtract(number1, number2)

    }else if(operator==="*"){
        return multiply(number1, number2)
        
    }else if(operator==="/"){
        return divide(number1, number2)
    }
}

function clear(){
    op = ''
    firstNumber = ''
    secondNumber = ''
    currentOperation = null
    display.textContent=""
}


const display = document.querySelector("#display")
const numberButtons = document.querySelectorAll(".number")
const operationButtons = document.querySelectorAll(".operations")
const allMathButtons = document.querySelectorAll(".math")
const clearButton = document.querySelector("#clear")
const equalButton = document.querySelector("#equal")

let op = ""
let characters = ""
let numberOne = ""
let numberTwo = ""
let currentOperation = []
let nextOperation = ""
let holdResult = 0
ops = ["+", "-", "*", "/"]


// red numb 1 -> read operator -> read number two -> assign to currentOperation -> read operator -> read number two -> assign to nextOperation -> concatenate with current operationButtons

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += button.id
        if(op===""){
            numberOne+=button.id
            console.log(`number one = ${numberOne}`)

        }else if(op!==""){
            numberTwo+=button.id
            console.log(`number two = ${numberTwo}`)

        };

    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent = button.id
        op=button.id

        console.log(`op = ${button.id}`)
    })
})

equalButton.addEventListener('click', () => {
    currentOperation+=numberOne
    currentOperation+=op
    currentOperation+=numberTwo
    console.log(`current operation = ${currentOperation}`)
    
    
})



//OPCAO -> MUDAR FUNCOES PRA RECEBER STRING E DENTRO DA FUNCAO FAZER O PROCESSO DE SPLIT E PARSEINT