
//Conditions

// Somme times we might have to execute a block of code after some conditions

// we have 3 types of conditions

//If
//If else
// Else If 

let age = prompt("what's your age"); 
console.log(age);
 
// prompt
// prompt is an input feild in which we ask a question

//Alert 
// show some message as a popup

// prompt always gives a user answer in string
// we can change this if user prompt is a number 

age = Number.parseInt(age);

//If can run when the condition is true
// when If doesnot run so else is run 

if (age < 18) {
    alert("You are a kid");
}else {
    alert("valid");
}

//Some time we want to check the conditions again and again so we use else if
//Else if is use before an else

if (age < 9) {
    alert("You are a kid");
} else if (age < 18 && age >= 9) {
    alert("You can drive after 18")
}else if (age == 0){
    alert("This is Invalid age");
}else{
    alert("you can drive if you are under 60");
    
}


// Terniary Operator
//It is a short cut of if else statement
//I can used when  we have only 1 condition

console.log("you can " ,( age < 18 ? "not Drive" : "Drive"));


//Switch Statement

// switch statement is the another example or as it as If else 
//switch statement is used when only variable was check

const fruit = "Apple";

switch (fruit) {
    case "orange" :
       console.log("fruit is apple");
       break;
    case "papaya":
    case "mangoes":
        console.log("fruit is " + fruit);
        break;
    default :
      console.log("it's an " + fruit);   
}
