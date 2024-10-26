

let a = 3;
//Global scope

{
    let a = 7;
    //It can't access from outside of block
}

console.log(a);


// var is access every wher but not outsde the function 


function scope (){
    var b = 12;
console.log(b);
//it is access here 

}
 console.log(b);
 
//but not here