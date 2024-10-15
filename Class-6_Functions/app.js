
//Functions

// function is used to oraganized aprogram
//Function s used for repeated block of code or aprogramme

// A javascript function is a block of code that perform a desired task 
//Syntax
function myFunc () {
    //code
} 
//invoking function without invoking function does'nt execute
myFunc()

// Function With parameter inside the paranthesis
function myFunc (param1 , param2) {
    //code
}
myFunc()

// Function With parameter and argumentsinside the paranthesis
function myFunc (param1 , param2) {
    //code
}
// arguments are the value of parameter
myFunc("Mary" , 89);

//If the 3 parameters are given but arguments are only 2 so the 3rd parameter takes undefined
function myFunc (param1 , param2 , param3) {
    //code
}
// arguments are the value of parameter
myFunc("Mary" , 89);

// in a function we use return that return the value which we return from the function 
// after the return any code doesn't work it shoow an error
//RETURn give only one value

function myFunc (param1 , param2 , param3) {
   return param1 + param2
}
myFunc ("Mary" , 89);

// we can  save the invked value in variable
let functionvalue = myFunc ("Mary" , 89);

//Arrow Function Example 

let arrowFunction = () => {
    console.log('Hello');
}
arrowFunction()