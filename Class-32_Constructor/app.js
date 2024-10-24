
//Constructor

class Railwayform {
    constructor{
        console.log("constructor");
        
    }
    submit(){
        alert(this.name + "Your Form is submitted for train no" + this.trainNumber)
    }
    cancel(){
        alert(this.name + "Your form is cancelled for train no" + this.trainNumber)     
    }
    fill(userName , trainNumber){
        this.name = userName;
        this.trainNumber = trainNumber;
    }
}

let maryamform = new Railwayform();
let azamform = new Railwayform();

maryamform.fill('maryam' , 1234567);
azamform.fill('maryam', 1111);

console.log(maryamform.submit());
console.log(azamform.submit());
console.log(maryamform.cancel());
