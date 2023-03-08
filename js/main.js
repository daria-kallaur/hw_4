let firstNumber = +prompt('Enter first number', 5); 
let secondNumber = +prompt('Enter second number', 5); 
let thirdNumber = +prompt('Enter third number', 5);

console.log(firstNumber,secondNumber,thirdNumber);

let arr = [firstNumber, secondNumber, thirdNumber];
console.log(arr);

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
};
let result = sum / arr.length;
console.log(result);
alert(result);

