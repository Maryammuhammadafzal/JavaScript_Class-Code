
//IIFE (imidiately invoked functon)

// IIFE is invoked as soon at is defined

let p = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve(56)
    }, 3000)
})
// let f = async () => {
//     let a = await p();
//     console.log(a);
//     let b = await p();
//     console.log(b);
//     let c = await p();
//     console.log(c);
    
// }
// f()
// We are calling these function again and again 
//So we can do this as

(async () => {
    let a = await p();
    console.log(a);
    let b = await p();
    console.log(b);
    let c = await p();
    console.log(c);
    
})()

// It's scope is not variable means it's variable can't access out of this 

// It is use in async function
