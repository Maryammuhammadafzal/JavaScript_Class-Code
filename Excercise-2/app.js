

//Game

let user= prompt("Enter Snake Water or Gun").toLowerCase();
let cpuI = Math.floor(Math.random()*3);
let cpu = ["snake" , "water", "gun"][cpuI];
console.log(cpu);
console.log(user);


const match = (cpu , user) => {
    if (user === cpu) {
        return("Match is tied");
    }
    else if (user === "snake" && cpu === "water"){
        return(`User Won: ${user.toUpperCase()}`);   
    }
    else if (user === "snake" && cpu === "gun"){
        return(`Computer Won: ${cpu.toUpperCase()}`); 
    }
    else if (user === "water" && cpu === "snake"){
        return(`Computer Won: ${cpu.toUpperCase()}`);   
    }
    else if (user === "water" && cpu === "gun"){
        return(`User Won: ${user.toUpperCase()}`); 
    }
    else if (user === "gun" && cpu === "water"){
        return(`Computer Won: ${cpu.toUpperCase()}`);   
    }
    else if (user === "gun" && cpu === "snake"){
        return(`User Won: ${user.toUpperCase()}`); 
    }
}
let result = match(cpu , user)
alert(result);
