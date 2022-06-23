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
const numberButtons = document.querySelectorAll(".number")
const operationButtons = document.querySelectorAll(".operations")
const allMathButtons = document.querySelectorAll(".math")
const clearButton = document.querySelector("#clear")
const equalButton = document.querySelector("#equal")

let op = ""
let characters = ""
let number = ""

//populate display with inputs -> assign all characters to character variable
//assign operator to op variable
allMathButtons.forEach(button  => {
    button.addEventListener('click', () => {
        display.textContent += button.id
        characters += button.id
        if(button.classList.contains('operations')){
            op = button.id
        } else if(button.classList.contains('number')){
            number += button.id
        }
        console.log(op)
        console.log(characters)
        console.log(number)
    })
})

equalButton.addEventListener('click', () => {
    alert("test")

})



//separete characters with op -> get left number -> get right number -> proceed with
//operations