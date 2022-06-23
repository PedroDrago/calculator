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

function operate(firstNumber, secondNumber, operator){
    number1=Number(firstNumber)
    number2=Number(secondNumber)
    

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


//variables
const numberButtons = document.querySelectorAll('.number')
const operationButtons = document.querySelectorAll('.operations')
const equalButton = document.querySelector('#equal')
const currentOperationDisplay = document.querySelector('#currentOperationDisplay')
const lastOperationDisplay = document.querySelector('#lastOperationDisplay')
const clearButton = document.querySelector('#clear')


let firstNumber = ""
let secondNumber = ""
let currentOperator = null


//eventlisteners
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        addNumber(button.textContent)
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        addOperator(button.textContent)
    })
})

equalButton.addEventListener('click', () => calculate())

clearButton.addEventListener('click', () => clearDisplay(currentOperationDisplay) )



//functions

function addNumber(number){
    if(currentOperationDisplay.textContent === "0"){
        currentOperationDisplay.textContent = ""
    }
    currentOperationDisplay.textContent += number
    if(currentOperator=== null){
        firstNumber+=number
        console.log(`first number = ${firstNumber}`)
    }else{
        secondNumber+=number
        console.log(`second number = ${secondNumber}`)
    }

}

function addOperator(operator){
    currentOperationDisplay.textContent +=operator
    currentOperator=operator
    console.log(`current operator = ${currentOperator}`)

}

function calculate(){
    currentOperationDisplay.textContent=operate(firstNumber, secondNumber, currentOperator)
}

function clearDisplay(display){
    if(display.textContent==="0"){
        display.textContent=""
    }else if(display.textContent===""){
        return
    }else{
        display.textContent="0"
    }
}
