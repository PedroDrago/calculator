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


const display = document.querySelector("#display")
const numbers = document.querySelectorAll(".number")
const operations = document.querySelectorAll(".operations")
const allMath = document.querySelectorAll(".math")
const clearButton = document.querySelector("#clear")
const equalButton = document.querySelector("#equal")

