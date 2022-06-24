//variables
const numberButtons = document.querySelectorAll('.number')
const operationButtons = document.querySelectorAll('.operations')
const equalButton = document.querySelector('#equal')
const currentOperationDisplay = document.querySelector('#currentOperationDisplay')
const lastOperationDisplay = document.querySelector('#lastOperationDisplay')
const clearButton = document.querySelector('#clear')
const pointButton = document.querySelector('#point')
const eraseButton = document.querySelector('#erase')

let firstNumber = ""
let secondNumber = ""
let currentOperator = null
let currentOPeration = ""
let lastOperation = ""
let result
let hasPoint = false


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

equalButton.addEventListener('click', showFinalResult)

clearButton.addEventListener('click', reset)

pointButton.addEventListener('click', addPoint)

window.addEventListener('keydown', keyboardFunction )

eraseButton.addEventListener('click', eraseCharacter)


//Calculator functions
function addNumber(number){
    if(currentOperationDisplay.textContent === "0" || currentOperationDisplay.textContent === "can't divide by 0" || currentOperationDisplay.textContent === "NaN"){
        currentOperationDisplay.textContent = ""
    }
    if(currentOperator=== null){
        currentOperationDisplay.textContent += number
        firstNumber+=number
        currentOPeration+=number
        console.log(`first number = ${firstNumber}`)

    }else if(currentOperationDisplay.textContent === `${result}`){
        currentOperationDisplay.textContent += number
        secondNumber+=number
        currentOPeration+=number
        console.log(`second number = ${secondNumber}`)
    }
    else if (currentOperator!== null){
        currentOperationDisplay.textContent += number
        secondNumber+=number
        currentOPeration+=number
        console.log(`second number = ${secondNumber}`)

    }
}

function addOperator(operator){
    if (currentOperator===null){
    currentOperationDisplay.textContent +=operator
    currentOperator=operator
    currentOPeration+=operator

} else{
    calculate(firstNumber, secondNumber, currentOperator)
    if(currentOperator === "/" && secondNumber === "0"){
        currentOperationDisplay.textContent = "can't divide by 0"
        resetVariables()
    } else{
    currentOperationDisplay.textContent = result
    firstNumber=result
    secondNumber=""
    currentOperator=operator
    currentOperationDisplay.textContent+=currentOperator
    currentOPeration=`${result}${currentOperator}`

    }
}
}

function addPoint() {
    if(currentOperator === null && hasPoint === false){
        firstNumberPointCheck = firstNumber.includes(".")
        if (firstNumberPointCheck === false){
            addNumber(pointButton.textContent)
        }
    } else if (currentOperator !==null && secondNumber !== ""){
        secondNumberPointCheck = secondNumber.includes(".")
        if(secondNumberPointCheck === false){
            addNumber(pointButton.textContent)
        }
    }  
}

function eraseCharacter() {
    currentOPerationLastCharSlice =  currentOPeration.slice(0, -1)
    currentOPeration = currentOPerationLastCharSlice
    currentOperationDisplay.textContent = currentOPeration

    if(currentOperator === null){
        firstNumberLastCharSlice = firstNumber.slice(0, -1)
        firstNumber = firstNumberLastCharSlice

    }else if (currentOperator !== null && secondNumber === ""){
        currentOperator= null
    } else if (currentOperator !==null && secondNumber !== ""){
        secondNumberSlice = secondNumber.slice(0, -1)
        secondNumber = secondNumberSlice
    } 
}

function reset() {
    clearDisplay(currentOperationDisplay)
    resetVariables()
}

function resetVariables(){
    firstNumber = ""
    secondNumber = ""
    currentOperator = null
    currentOPeration = ""
    lastOperation = ""
    result = ""
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

function keyboardFunction(e) {
    if(e.key >= 0 && e.key <= 9) addNumber(e.key)
    if(e.key === ".") addPoint()
    if(e.key === "=" || e.key === "Enter") showFinalResult()
    if(e.key === "+") addOperator("+")
    if(e.key === "-") addOperator("-")
    if(e.key === "/") addOperator("/")
    if(e.key === "*") addOperator("*")
    if(e.key === "Backspace") eraseCharacter()
    if(e.key === "Escape") reset()
}

function showFinalResult() {
    calculate(firstNumber, secondNumber, currentOperator)
    if(currentOperator === "/" && secondNumber === "0"){
        currentOperationDisplay.textContent = "can't divide by 0"
    }else{
        currentOperationDisplay.textContent = result
    }
    resetVariables()
}



//Mathematical Funcions

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

    }else if(operator==="x"){
        return multiply(number1, number2)
        
    }else if(operator==="/"){
        return divide(number1, number2)
    }
}

function calculate(){
        OperationResult =  operate(firstNumber, secondNumber, currentOperator)
        resultNumber =  result = Math.round(OperationResult * 100) / 100
        result = resultNumber.toString()
}
