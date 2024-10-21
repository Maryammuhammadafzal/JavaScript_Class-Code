
let p1 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(1)
    },1000)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(2)
    },2000)
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(3)
    },1000)
})


// Promise APIs
// there are six promise APIs 

// promise.all
// It return error if  reject and baqi ignored 
let promiseAll = Promise.all([p1 , p2, p3]);
promiseAll.then((value) => {
    console.log(value); 
})

// Promise.allSetteled
//If there is any error so it can't be run
// so we run promise.allsetteled
let p4 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(1)
    },1000)
})
let p5 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        reject(new Error ('error'))
    },2000)
})
let p6 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(3)
    },3000)
})

let promiseAllSetteled = Promise.allSettled([p1 , p2, p3]);
promiseAll.then((value) => {
    console.log(value); 
})
// it does'nt return the value of an array it return the state and result

//Promise.race
//It waits for the first promise to settle and it result/error becomes the outcome
let p7 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(1)
    },1000)
})
let p8 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        reject(new Error ('error'))
    },2000)
})
let p9 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(3)
    },3000)
})

let promiseRace = Promise.race([p1 , p2, p3]);
promiseAll.then((value) => {
    console.log(value); 
})


//Promise.any
//It waits for the first promise to fullfill(& not rejected) and it result becomes the outcome.
//Throws aggregate error if all the promises are rejected
let p10 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(1)
    },1000)
})
let p11 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        reject(new Error ('error'))
    },2000)
})
let p12 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(3)
    },3000)
})

let promiseAny = Promise.any([p1 , p2, p3]);
promiseAll.then((value) => {
    console.log(value); 
})

//Promise.resolve
//It waits for the first promise to settle and it result/error becomes the outcome
let p13 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(1)
    },1000)
})
let p14 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        reject(new Error ('error'))
    },2000)
})
let p15 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(3)
    },3000)
})

let promiseResolve = Promise.resolve([p1 , p2, p3]);
promiseAll.then((value) => {
    console.log(value); 
})

//Promise.reject
//It waits for the first promise to settle and it result/error becomes the outcome
let p16 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(1)
    },1000)
})
let p17 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        reject(new Error ('error'))
    },2000)
})
let p18 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(3)
    },3000)
})

let promiseReject = Promise.reject([p1 , p2, p3]);
promiseAll.then((value) => {
    console.log(value); 
})