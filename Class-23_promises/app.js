
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

let promise2 = new Promise (function (resolve , reject) {
    console.log("hello in promise");
    reject('error')
});
console.log(promise1);


//Resolve and reject are two callback provided by javascript itself .
// They are called like this

//resolve(value) // if the job is finished successfully
//reject(error) //If the job fails

//The promise return new promse constructor has these properties

//State  // it s initially pending , then changes to either "fullfilled" when resolve is called or "rejected " when rejected s called
//result // It is initially undefinedthen changed to values if resolved"(resolve(value))" or even when rejected"(reject(error))

let p1 = new Promise((resolve, reject) => {
console.log("promise is pending");

    setTimeout(()=>{
        console.log("hello");
        resolve(true)
        
    }, 5000)
})
console.log(p1);


let p2 = new Promise((resolve, reject) => {
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

//Promises Chaining

// we can chan promise and make them pass the returned value to one another 

let p3 = new Promise((resolve, reject) => {
    console.log("promise is pending");
    
        setTimeout(()=>{
            console.log("hello");
            resolve(67)
            // reject(new Error ("i am an error"))
        }, 5000)
    })
    console.log(p2);
    
    p3.then((value) => {
        console.log(value);
        let p4 = new Promise((resolve, reject) => {
            console.log("promise is pending");
             resolve('p2')
                
            })

            return p4
    }).then((value)=>{
        console.log('we are done');
        return 2
    }).then((value) => {
        console.log('we are pakka done');
        
    })


//Whole promise Example

const loadScript = (src)=>{
    return new Promise ((resolve,reject) => {

        let script = document.createElement('script')
        script.src = src
        document.body.appendChild(script);
        script.onload(()=>{
            resolve(1)
        })
        reject(0)
    })
}

let promises = loadScript("https://www.google.com");
promises.then((value) => {return value + loadScript('https://www.yahoo.com')})
.then((value) => {return "second script ready"})
.catch((error) => {return 'Uncaught Error: ' + error})


//Multiple Event Handlers

promises.then((value) => {
    console.log(value + "first");
    
})
promises.then((value) => {
    console.log(value + "second");
    
})
promises.then((value) => {
    console.log(value + "third");
    
})