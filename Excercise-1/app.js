
// Q 01
//Guess the number

let randomNum = Math.floor(Math.random()*100);
let userNum;
let chances = 100;

while (userNum != randomNum) {
    chances = chances - 1;
    userNum = prompt("Guess the number between 1 to 100");

    if(userNum == randomNum){
        alert("Congragulations! You guess the correct number");
        alert(`Great! you try  ${100 - chances} time to guess the number`);
    }else if(userNum > randomNum && userNum < 100){
        alert(`${userNum} is greater than actual number`);
    }else if(userNum < randomNum && userNum > 0){
        alert(`${userNum} is smaller than actual number`);
    }else {
        console.log("Enter the number between 1 to 100");
    }    
}
