

//Digital Clock

// let body = document.body;
// let div = document.createElement('div');
// body.appendChild('div')

let timeBox = document.getElementsByClassName('time');

let time = setInterval(()=> {
    timeBox[0].innerHTML = new Date().toLocaleTimeString()
}, 1000)