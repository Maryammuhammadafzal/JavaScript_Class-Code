

//set timeout
// if we want to delay in any code to run we use set timeout 

let a =setTimeout (function () {
  console.log("Hello");
  
} ,5000);
// we can clear the time
clearTimeout(a);

// We can give the set timout the 
//function nqme
// delay time 
// function arguments
const sum =(a,b) => {
    console.log(a + b);
    a + b
}

setTimeout(sum , 1000 , 1 , 2)
//set timeout also return an id 1

// Set Interval
//it is like a infinite loop it run after every given time

let b = setInterval (function () {
    console.log("Hello");
    
  } ,5000);
  // we can clear the time
  clearInterval(b);

