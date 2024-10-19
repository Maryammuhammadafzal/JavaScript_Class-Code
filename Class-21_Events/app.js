
//Events

// An event is a signal that something has happened
//all the DOM nodes generates such signals.

// some important DOM events are:
//Mouse events
//keyboard events
// form element events 
//Document events

//Handling events
// it can be handle by HTML attributes
//Adding a handler with javascript it can be over write with HTML
let a = document.getElementsByClassName("container");
a[0].onclick = () => {
    console.log("my container");
    
}

  //addEventlistener 

  //add event listener is used to assign multiple handlers an event
  let btn = document.getElementById('btn');
 btn.addEventListener("click" ,() => {
    console.log('hello world1');
    
 })

 btn.addEventListener("click" ,() => {
    console.log('hello world2');
    
 })

// if we don't want to run the fist hello world so we remove it

// let a = prompt("enter your lucky number");
 if (a === '1') {
    btn.removeEventListener('click' ,() => {
       console.log("hello world1");   
    })
 } // it does'nt remove that evet listener because both have it's own different whole function 

 //handlers must be the same function object for this to work

 let x = () => {
   console.log('hello world1');
   
 }
 let y = () => {
   console.log('hello world1');
   
 }

 btn.addEventListener('click' , x);
 btn.addEventListener('click' , y);
 
 btn.removeEventListener('click' , x);

 //Event object

 // when an obbjects happens the browser create an event objects puts details into it and passes it as an argument to the handle
 let eventObj = function (e) {
    console.log(e.target);
    console.log(e);
    
 }
 