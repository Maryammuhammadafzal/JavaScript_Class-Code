
//Constructor
//Constructor are a function which is invoked always automatically no need to call this

class Railwayform {

    //We can use a constructor function intead of fill because it is easy to fiill those value 
    //In a paranthess of constructor function we give parameters and in block we use these parameter with "this" keyword and without "this" also
    constructor(userName , trainNumber, seatno){
        console.log("constructor");
        this.name = userName;
        this.trainNumber = trainNumber;
        this.seatno = seatno;
        
    }
    submit(){
        alert(this.name + "Your Form is submitted for train no" + this.trainNumber)
    }
    cancel(){
        alert(this.name + "Your form is cancelled for train no" + this.trainNumber)     
    }
    // fill(userName , trainNumber){
    //     this.name = userName;
    //     this.trainNumber = trainNumber;
    // }
}

//In a constructor we don't need to use fill property we give the value as an arguments
let maryamform = new Railwayform('maryam' , 1234567 , 43);
let azamform = new Railwayform('maryam', 1111, 12);

// maryamform.fill('maryam' , 1234567);
// azamform.fill('maryam', 1111);

console.log(maryamform.submit());
console.log(azamform.submit());
console.log(maryamform.cancel());
