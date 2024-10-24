
//* ******OOP (object oriented language)

// Object-oriented programming is a programming paradigm 
// based on the concept of objects, which can contain 
// data and code: data in the form of fields, and code 
// in the form of procedures. In OOP, computer programs 
// are designed by making them out of objects that interact with one another.

//oop has 4 pillars

//Abstraction _ hiding of internal details
//Encapsulation _
//nheritance _ features inherit like parent to sibling
//Polymorphism _ 1 thimg has many features or forms is polymorphism

//  [[Prototypes]] 

// javascript objects have a special property called prototype that is either null or references another object

let obj= {
    name: 'maryam',
    fname:'afzal'
}
console.log(obj);


//when we try to read a property from an object and t's missing.
//JavaScript automatically takes it from the prototype. This is called "prototype inheritence".

//Setting prototype

//We can set prototype by setting  __proto__ .Now if we read a prototype from the object which is not in object and is present in the prototype.Javascript will take it from prototype.

//If we have a method n object , it will called from the object. If it's missing in onject and present in prototype, it's called from the prototype

let prototype = {
    run : ()=> {
        alert("run")
    }
}

obj.__proto__ = prototype

// We can property in prototype chaining
prototype.__proto__ = {
    name2 : 'Mary'
}

console.log(obj.name2);
