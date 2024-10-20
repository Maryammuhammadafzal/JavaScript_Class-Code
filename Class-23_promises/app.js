
//Promises

//The solution to th ecallback hell is promises
//Promise is a promise of code of execution. the code either execute or fails n both cases the subscriber will be notified

//Syntax

let promise = new Promise (function (resolve , reject) {
    console.log("hello in promise");
    
});


let promise1 = new Promise (function (resolve , reject) {
    console.log("hello in promise");
    resolve (54)
    
});
console.log(promise1);
console.log(resolve(76));
console.log(reject("error"));

let promise2 = new Promise (function (resolve , reject) {
    console.log("hello in promise");
    reject('error')
});
console.log(promise1);
console.log(resolve(76));
console.log(reject("error"));


//Resolve and reject are two callback provided by javascript itself .
// They are called like this

resolve(value) // if the job is finished successfully
reject(error) //If the job fails

//The promise return two thngs

//State  // it s initially pending , then changes to either "fullfilled" when resolve is called or "rejected " when rejected s called
//result // It is initially undefinedthen changed to values if resolved"(resolve(value))" or even when rejected"(reject(error))

let p1 = new promise((resolve, reject) => {
console.log("promise is pending");

    setTimeout(()=>{
        console.log("hello");
        resolve(true)
        
    }, 5000)
})
console.log(p1);


let p2 = new promise((resolve, reject) => {
console.log("promise is pending");

    setTimeout(()=>{
        console.log("hello");
        // resolve(true)
        reject(new Error ("i am an error"))
    }, 5000)
})
console.log(p2);

p1.then((value) => {
    console.log(value);
    
})
p2.catch((error) => {
    console.log("some error occured in p2");
    
})