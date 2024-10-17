
// Alert 
// It show a message as apopup onn a broweser

alert('Welcome')

// prompt
//it takes a user input and return in a string

let a = prompt("Enter a number");
a = Number.parseInt(a);

//We can give a default value in a prompt

let b = prompt("Enter your name" , 'mary');

//Confirm
// show the user message and if user click ok so write or not

let write = confirm("do you to write this on a page");
if (write){
    document.write("Hello");
}else{
    document.write("please allow me to write");
}