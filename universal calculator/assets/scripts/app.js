const defaultResult = 0;
let currentResult = defaultResult;
// let current1Result =  1;
let logEntries = [];

function getUserInput(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator,resultBeforeCalc,calcNumber){
    const clacDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult,clacDescription);
}
// function createAndWriteOutput1(operator,resultBeforeCalc,calcNumber){
//     const clacDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
//     outputResult(current1Result,clacDescription);
// }
function writeToLog(operationIdentifier,prevResult,operationNumber,newResult){
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry)
    console.log(logEntries);
}
function calculateResult(calculationType){
    const enteredNumber = getUserInput();
    if(
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE' ||
        !enteredNumber
    ){
        return;
    }
    let initialResult= currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    }
    else if (calculationType === 'SUBTRACT'){
        currentResult -= enteredNumber;
        mathOperator ='-'
    }
    else if (calculationType === 'MULTIPLY'){
        currentResult *= enteredNumber;
        mathOperator ='*'
    }
    else if (calculationType === 'DIVIDE'){
        currentResult /= enteredNumber;
        mathOperator ='-'
    }
    createAndWriteOutput(mathOperator,initialResult,enteredNumber);
    writeToLog(calculationType,initialResult,enteredNumber,currentResult);
  
}



// function add(){
//     calculateResult('ADD');
// }

// function subtract(){
//     calculateResult('SUBTRACT');
// }

// function multiply(){
//     calculateResult('MULTIPLY')
// }

// function divide(){
//     calculateResult('DIVIDE')
// }

// addBtn.addEventListener('click', add);
// subtractBtn.addEventListener('click', subtract);
// multiplyBtn.addEventListener('click', multiply);
// divideBtn.addEventListener('click', divide);

addBtn.addEventListener('click', calculateResult.bind(this,'ADD'));
subtractBtn.addEventListener('click', calculateResult.bind(this,'SUBTRACT'));
multiplyBtn.addEventListener('click', calculateResult.bind(this,'MULTIPLY'));
divideBtn.addEventListener('click', calculateResult.bind(this,'DIVIDE'));











// function double(a){
//     return a*2;
// }
// function transform(a,b){
//     return b(a);
// }
// transform(10, double);
// let calculationDescription = `(${ defaultResult} + 10) * 3 / 2 - 1`
// currentResult = add(54,23);
// currentResult = (currentResult + 10) * 3 / 2 - 1;
// let errorMessage = 'An error \\  \'  \n' +
//                 'occurred!';
// function subtract (num1,num2){
//     result = num1 - num2;
//     return result;
// }
// function stringify(num){
//     result = num;
//     return `"Result : ${result}"`;
// }
// const result1 = subtract(12, 10);
// const result2 = stringify(10);
// console.log(result1);
// console.log(result2);


