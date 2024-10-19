

let div = document.getElementById("mydiv");
console.log(div);

// Classname & Classlist

//If we assign something to element.className , it replace the whole string of classes
div.className = "yellow red";
console.log(div.classList);

// Class list add or remove or toggle
div.classList.remove("red") // it remove the class
div.classList.add("red") //it add the class
div.classList.toggle("red") // it removes if exist if not so add

//contain 
// it check if the class is present in the element 
div.classList.contains('red');