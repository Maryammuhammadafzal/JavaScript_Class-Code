
//Loops
//We use loops to perform repeated actions

// types 
 
// for
// for in 
//for of 
//While
//Do While

// For loop

// loop can Write as

// for keyword
//parenthesis ()
//initialize let i = 0;
// Condition i < 5;
// Updattion i++
// Block of code { inside code ...}

for (let i = 0; i < 5; i++) {
    console.log(i);
}
for (let i = 0; i < 5; i++) {
    console.log(i+1);
}

let sum = 0;
let n = prompt("enter the number");
n = Number.parseInt(n);
for (let i = 0; i < n; i++){
    sum += (i+1)
    console.log(sum); // 2 , 3 , 4 , 5 , ... n
}
console.log(sum); // last updation of sum


// For In Loop
//for in loop is used for objects and arrays

//How to write for in loop

//for keyword
//Paranthesis ()
// Checking the key is present in that object
//block of code {inside code ...}

const fruits = {
   name : "apple",
   color : "red",
   numbers : 12
}

for (let a in fruits) {
    console.log(a);
    console.log(fruits[a]);
    
}

// For of Loop
//for of loop is used for String and arrays and through values of an object

//How to write for in loop

//for keyword
//Paranthesis ()
// Checking the variable of  that array
//block of code {inside code ...}

// const items = {
//     name : "apple",
//     color : "red",
//     numbers : 12
//  }
 
//  for (let a of items) {
//      console.log(a);
//      console.log(items[a]); // not Iterable
     
//  }

//Array
let num = [1,2,3,4]; 

for (let numbers of num){
    console.log(numbers);
    
}

for (let a of "maryam") {
    console.log(a);
    
}


//While loop

//How To write

//initialized outside the while loop let i = 0;
// While keyword 
// paranthesis ()
// Condition inside it (i<n)
//block of code {code ... + increament i++}

let i = 0;
while (i<2) {
    console.log(i);
    i++;
}

// let i = 0;
// while (i<7) {
//     console.log(i);
// }

//If we dont stop loop so it crash the run time


// do while loop 
// Executed atleast 1 time

//How to Write 
//initialized outside the do  while loop let i = 0;
// do keyword 
//block of code {code ... + increament i++}
// While keyword
// paranthesis ()
// Condition inside it (i<n)

let j = 0;
do {
    console.log(j);
    j++;
} while (j<2);
