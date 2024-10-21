
//Error Handling

//when the javascript got an error so the whole code does'nt run 
// so run the code we use try catch

try {
    console.log(undefined);
    
}
catch(error){
    console.log("got error" + error);
    
}

//it first try to execute the code 
//f there is no error so catch is ignored

//In a try only synchronous code handle
//If we have a schedule code so try code throw an error like an set Timeout
try {
    setTimeout(() => {

        console.log(undefined);
    })
}
catch(error){
    console.log("got error" + error);
    
}
//That because the function itself is executed later , when the engine has already left the try..catch construct


/////Error Object

// for all the built in error there are only two properties

try{
    mary
}
catch(error) {
    console.log(error.name);
    console.log(error.message);
    
}

//Throw Custom Errors
//Custom Error throw to the user if user do some mistake
//WE can throw custom errors by useing the throw


try{
    let age  = prompt("enter age")
    age = Number.parseInt(age)
    
    throw new Error('invalid age')
}
catch(error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    
}
//WE can also throw a particular error by using the bulit in constructor for standard errors

try{
    console.log('mary');
   throw new ReferenceError('mary is not defined')
}
catch(error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    
}
try{
    console.log('mary');
   throw new SyntaxError('mary is not defined')
}
catch(error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    
}