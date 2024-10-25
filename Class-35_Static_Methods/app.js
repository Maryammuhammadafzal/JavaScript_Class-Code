

class Animal {
    constructor(name){
    console.log(`${this.name}`);
      this.name = Animal.capatalize(name);
    //   this.name = this.capatalize(name); //Don't do that it is not support
    }
    walk(){
        console.log('Walking');
        
    }
     capatalize(name){
        return name.charAt(0).toUpperCase() + name.slice(1, name.length);
    }
}

let monkey =  new Animal('jack')
monkey.walk()
// monkey.capatalize('monkey') // don't support
//Always support only wth the name of class


//getter , setter 

class Bird {
    constructor(name){
      this._name = Animal.capatalize(name);
    }
    fly(){
        console.log('Walking');
        
    }
    get name(){
        return this._name
    }
    set name (newName){
        this._name = newName;
    }
}    

let bee =  new Animal('jack')
bee.fly()
console.log(bee.name);
bee.name = 'Queen bee'
console.log(bee.name);

//instanceOf

console.log(bee instanceof Bird);
//it return true if it is the part of a class

class Rabbit extends Bird {
    eatCarrot(){
        console.log("bunny is eating carrot");
        
    }
}

let bee =  new Rabbit('bunny') 
//And also return if it inherit from the class
console.log(bee instanceof Rabbit);

