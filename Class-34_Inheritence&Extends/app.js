

//Inheritance

//Inherit the things from parents

class Animal {
    constructor (name , color) {
        this.name = name;
        this.color = color;
    }

    run(){
        console.log(`${this.name} is running`);
        
    }
    shout(){
        console.log(`${this.name} is shout`);
        
    }
}

class Monkey extends Animal{
    hide(){
        console.log(`${this.name} is hide`);
        
    }
    eat(){
        console.log(`${this.name} is eating banana`);
        
    }
}

let animal = new Animal("chiku" , "brown");
let monkey = new Monkey("bonti" , 'white')
animal.run();
animal.shout();
monkey.hide();
monkey.eat()


// Method Overriding

class Employees {
    login(){
        console.log('login');
        
    }
    logout(){
        console.log('logout');
        
    }
    leaves(leaves){
        console.log(`request for ${leaves}`);
        
    }
    
}

class Programmer extends Employees {
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffees`);
        
    }
    leaves(leaves){
      super.leaves(5)
      console.log("1 extra leave");
      
    }
}
let e = new Employees()
let p = new Programmer()

e.login();
e.leaves