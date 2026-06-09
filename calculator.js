let num1, num2 = 0;
let operator = 0;
let solution = 0;

let displayArea = document.querySelector('#display');
let numpad = document.querySelector('#numpad');
let operators = document.querySelector('#operators');

let add = function(num1, num2)
{
    return num1 + num2;
}

let subtract = function(num1, num2)
{
    return num1-num2;
}

let divide = function(num1, num2)
{
    return num1/num2;
}

let multiply = function(num1, num2)
{
    return num1*num2;
}


let operate = function(num1, num2, operator)
{

    switch(operator)
    {
        case '+':
            solution = add(num1, num2);
            break;

        case '-':
            solution = subtract(num1, num2);
            break;

        case '*':
            solution = multiply(num1, num2);
            break;

        case '/':
            solution = divide(num1, num2);
            break;
    }

    return solution;
}

let numberPressed = function(number)
{
    if (solution != 0)
    {
        solution = 0;
        displayArea.textContent = '';
    }

    displayArea.textContent += number.textContent;
}

let operatorPressed = function(operatorBtn)
{
    operator = operatorBtn;                //Set passed operator to global variable
    num1 = displayArea.textContent;     //Store current display in num1 variable
    num1 = Number(num1);                              //Convert string content to number
    displayArea.textContent = '';       //Clear displayArea
}

let equalsPressed = function()
{
    num2 = displayArea.textContent;     //Store current display in num2 variable
    num2 = Number(num2);
    displayArea.textContent = operate(num1, num2, operator);
}

let clearAll = function()
{
    num1 = 0;
    num2 = 0;
    operator = 0;
    displayArea.textContent = '';
}

//Generate 0-9 buttons
for (let i=9; i>=0; i--)
{
    let button = document.createElement('button');
    button.textContent = +i;
    button.addEventListener('click', () =>
        numberPressed(button)
    );

    numpad.appendChild(button);
    
}

for (let i=4; i>0; i--)
{
    let button = document.createElement('button');
    switch (i)
    {
        case 4:
            button.textContent = '/';
            break;

        case 3:
            button.textContent = '*';
            break;
        
        case 2:
            button.textContent = '-';
            break;
        
        case 1:
            button.textContent = '+';
            break;
    }

    button.addEventListener('click', () => operatorPressed(button.textContent));
    operators.appendChild(button);
}

for (let i=2; i>0; i--)
{
    let button = document.createElement('button');
    switch(i)
    {
        case 2:
            button.textContent = '=';
            button.addEventListener('click', equalsPressed);
            break;
            
        // case 2:
        //     button.textContent = '.'
        //     button.addEventListener('click', decimalPressed);
        //     break;

        case 1:
            button.textContent = 'C'
            button.addEventListener('click', clearAll);
            break;
    }

    operators.appendChild(button);
}