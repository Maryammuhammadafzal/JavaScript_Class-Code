
//synvhronous 
//synchronous action are the acton that initiate and finish one by one

// Example
let a = prompt("Enter name")
let b = prompt("Enter age")
let c = prompt("Enter number")
console.log(a + b + c);

//Asynchronous 
// Asynchronous actions are the action that we initiate now and they finish later e.g: Set timeout.

//Example
console.log("start");

setTimeout(function () {
    console.log("Good");

}, 3000);

console.log("end");


//CallBack functions
//A callback function is a functon passed into another function as an argument , which is then invoked inside the outer function to complete an action.

//example

function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;
    document.appendChild(script);
}
console.log(console.log("https://www.google.com"));

// How we know that the src is appended
//So we run a function onload
function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = function () {
        console.log("loaded scrpt with src " + src);

    }
    document.appendChild(script);
}
console.log(console.log("https://www.google.com"));

//    Now we talk about the callback 
// in a call if we want to show a function which we want on load of our javascript so we use a call back

// example

//first we creatd a fuction which we want to call back
//WE  also give thea argument in callbac
function hello(src) {
    alert("hello");
}

//Now in our old function we give in parameter a callback and in the we invoked it and in the argument we wrote the function which we created for a callback
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = function () {
        console.log("loaded scrpt with src " + src);
        callback(src);
    }
    document.appendChild(script);
}
console.log(console.log("https://www.google.com", hello));

//This is called "callback-based" style of anync programming.A function that does something asynchronously should provide a callback argument where we put the fuction to run after it's complete.    

loadScript('https://www.google.com', (script) => {
    alert('script is loaded');
    alert(script.src);
})

//Handlng Errors

//Some time the scrpt does not load
// so we do 
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = function () {
        console.log("loaded scrpt with src " + src);
        callback(null, src);
    }
    script.onerror = function () {
        console.log("loaded scrpt with src " + src);
        callback(new Error('src got some error'));
    }
    document.body.appendChild(script);
}
console.log(console.log("https://www.google.com", hello));

function hello(error, src) {

    if (error) {
        console.log(error);
        return error
    }
    else {
        alert('hello world ' + src)
    }
}


// WE can do this all by arrow function

let loadScript = (src, callback) => {
    let myScript = document.createElement('script');
    myScript.src = src;
    myScript.onload = () => callback(null, src);
    myScript.onerror = () => callback(new Error('Src is not reached'));
    document.body.appendChild(myScript);

}
loadScript('https://www.abc.com', function (error, src) {
    if (error) {
        console.log("error");
        sendEmergencyMessageToCeo();
        return
    }
    else {
        console.log(src);
    }
});


//Call BAck Hell


//Pyramid of Doom
//when we have call back inside call backs the code get difiicult to manage


// loadScript('https://www.abc.com', function (error, src) {
//     if (error) {
//         console.log("error");
//         sendEmergencyMessageToCeo();
//         return
//     }
//     loadScript('https://www.abc.com', function (error, src) {
//         if (error) {
//             console.log("error");
//             sendEmergencyMessageToCeo();
//             return
//         }
//         loadScript('https://www.abc.com', function (error, src) {
//             if (error) {
//                 console.log("error");
//                 sendEmergencyMessageToCeo();
//                 return
//             }

//             loadScript('https://www.abc.com', function (error, src) {
//                 if (error) {
//                     console.log("error");
//                     sendEmergencyMessageToCeo();
//                     return
//                 }

//                 loadScript('https://www.abc.com', function (error, src) {
//                     if (error) {
//                         console.log("error");
//                         sendEmergencyMessageToCeo();
//                         return
//                     }
//                     loadScript('https://www.abc.com', function (error, src) {
//                         if (error) {
//                             console.log("error");
//                             sendEmergencyMessageToCeo();
//                             return
//                         }
//                         loadScript('https://www.abc.com', function (error, src) {
//                             if (error) {
//                                 console.log("error");
//                                 sendEmergencyMessageToCeo();
//                                 return
//                             }
//                             loadScript('https://www.abc.com', function (error, src) {
//                                 if (error) {
//                                     console.log("error");
//                                     sendEmergencyMessageToCeo();
//                                     return
//                                 }

//                             });
//                         });
//                     });
//                 });
//             });
//         });

//     });

// });

//As call become more nested, the code become deeper and increasingly more dffivult to manage espacially if we have real code.
// This is some tme called "callback hell" or "pyramid of Doom"

// The Pyramid of these calls grows towards the right with every "asynchronous action" .
//Soon it spral out of control .So this way of codng is not very good! 