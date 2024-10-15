//Expression 

// A fragment of code that produce a value is called
// is called an expression

//Operators

// In javaScript many operators

//Arithmetic Operators 

// +
// -
// *
// /
// %
//++
//--

let a = 2; //After increament a++ = 3 //After Decreament a-- = 2
let b = 6; // Pre increament ++b = 7 //pre decreament --b  =6

console.log(a + b); //8
console.log(a - b); //4
console.log(a * b); //12
console.log(a / b);//3
console.log(a % b); //0
console.log(a++); //2
console.log(a--); //3
console.log(++b); //7
console.log(--b); //6

//Assignment Operator

// +=
// -=
// *=
// /=
// %=
// **=
let c = 4;

c += 2; //6
c -= 2; //4
c *= 2; //8
c /= 2; //2
c %= 2; //0
c **= 2; //16

//Comparison Operator

//==  //it check only value
//=== //it check type and value both 
//!=
// !==
// <
//>
// <=
// >=

let d = 7;
let e = 5
console.log(d == e); //tfalse
console.log(d != e); //true
console.log(d === e); //false
console.log(d !== e); //true
console.log(d < e); //false
console.log(d > e); //true
console.log(d <= e); //false
console.log(d >= e); //true


//Logical Operator 

//When two condition are operate or check and i return boolean so it is called logical operator

//&&  //It takes both side will be true If first is false it consider both are false if first is true but second is false it consider both false
// || //It takes only one side will be true If first is false and second is true it consider both are true if first is true it consider both true
// ! // It makes the true value Falseor false value true

let f = 2
let g = 8
 
console.log(f<g && g>f); //true
console.log(f<g || g>f); //true
console.log(!true); //false


