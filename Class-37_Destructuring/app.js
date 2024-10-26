

//Des
//it is use to unpack the value  iin distinct variable

let arr = [22 , 44 , 4 , 6 ,7, 1 ];
let [a , b] = arr

console.log(a , b);

// if we give the extra value bu no variable

let [c , d  , ...rest] = arr
console.log(c , d , rest);

//We can skip values as
let [x, , , ...arg] = arr
console.log(x,arg);


//Destructuring for objects 

let {o1 , o2} = {o1 :1 , o2 : 2}
console.log(o1 , o2);

//Spread Operator

let arr1 = [22 , 44 , 4 , 6 ,7, 1 ];
let obj = {...arr1}
console.log(obj);

function sum (v1 , v2 , v3){
    return v1 + v2 +v3
}

console.log(sum(...arr1));


//This is use in react
let obj1 = {
    name : "mary",
    age : 20,
    gender : 'female'
}

console.log({...obj1 , name : "azam" , gender: 'male'});
//It override the name and gender then print

console.log({ name : "azam" , gender: 'male' , ...obj1});
//It  print object value it override by object 