

// dom navigation properties are very helpful when the elements are close to each other

// we have some methoed 

document.getElementById("form")
document.getElementsByClassName("form")
document.querySelector("form")
document.querySelectorAll("form")
document.getElementsByName("form")
document.getElementsByTagName("form")


document.querySelector("form").getElementsByTagName("a")


// MAtches Closet Contain methods

let id1 = document.getElementById("id1");
console.log(id1.matches(".class"));
console.log(id1.matches(".box"));
// To check if element matches the given css selesctor

document.getElementById("sp1")
console.log(sp1.closest("#sp1"));

//To look for the nearest ancestor that matches the given css selector .the element itself is also checked


console.log(sp1.contains(id1));
console.log(id1.contains(sp1));

// Return true if elementB is inside elementA (a decsendent of elementA) or when elementA === elementB



