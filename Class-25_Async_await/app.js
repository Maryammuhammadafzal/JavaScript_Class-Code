
//ASync Await
//  ther is a special syntax to work with promises 
//A function can be made async and then await promise in it

async function abc() {
    return 7
}
// async always return a prromise Other values are wrapped in a promise automatically

abc().then(alert);

//So async insures that a function returns a promise and wrap non promose init.

//The await keyword 
// there is a keyword of await that works only inside an async functon
// this make a function wait until the promise are resolve

async function weather() {

    let p1 = new Promise ( (resolve , reject ) => {
        setTimeout (() => {
            resolve('21 deg');
        }, 3000)
    })
    let p2 = new Promise ( (resolve , reject ) => {
        setTimeout (() => {
            resolve('21 deg');
        }, 5000)
    })

    console.log("wait");
    let myp1 = await p1
    console.log("done" + myp1);

    
    console.log("wait");
    let myp2 = await p2
    console.log("done" + myp2);
    return[myp1 , myp2]

}
console.log("welcome to control room");
let w = weather()
w.then ((value) => {
    console.log(value);
    
})
console.log(w);
