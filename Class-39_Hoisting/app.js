
//Function expression and class expression are not hoisted
greet()
function greet(){
    console.log("Hellon");
    
}
greet()
let greet=()=>{
    console.log("Hellon");
    
}
greet()
const greet = ()=>{
    console.log("Hellon");
    
}

//It is hoisted

// Javascript only host decleareation not intialzation . The variable will be undefined until the line wher it's initialized is reached

console.log(a);
var a ;
//It is hoisted

console.log(c);
var c = 3;
console.log(c);

/////////////////////
console.log(a);
let a ;
//It is not hoisted it show error

console.log(c);
var c = 3;
console.log(c);

// const also not hoisted

