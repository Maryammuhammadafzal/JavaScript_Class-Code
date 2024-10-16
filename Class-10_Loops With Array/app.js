
// Array with for loop

let num = [1, 2, 3, 4, 5];

for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
    
}

// Array with for ach loop
//it takes 3 arguments value , index, array
//It is used only for performing operations
num.forEach((element) => {
    console.log(element);
    console.log(element*element); 
});

//Array from
// it make the array of Html collection

Array.from(a);
let name = "mary"
let arr = Array.from(name);
console.log(arr);

//Array with for of loop

for (let i of num) {
    console.log(i);
    
}

//Array with for in loop
//It is not use in array

for (let i in num) {
    console.log(i); //It return array keys which is it's index number
}

//Higher order array method of es6

//1 map
// We use map when makes a new array
//It Creates a new array by performiming some operations on each array elements
//it takes 3 arguments value , index, array

num.map((value) => {
    console.log(value);
    
})

let mapArr = num.map((value) => {
    console.log(value);
    return value+1;
    
})
let mapFullArr = num.map((value , index , array) => {
    console.log(value, index , array);
    return value +index;
    
})

//Array filter
//It returns a new array which pass a tests
//it is not modify origional array

let filterArr = num.map((value) => {
    console.log(value);
    return value > 5;
    
})
console.log(filterArr);

//Reduce
//It reduce an array to a single value
// It takes the first value and second value in an argument and sum it then sum it's ans with other value ...
// it doesnot perform any operation on 1st value that's why it start with 0
let reduceArr = num.map((accumulator, index) => {
    console.log(accumulator , index);
    return accumulator + index;
    
},0)
console.log(reduceArr);

