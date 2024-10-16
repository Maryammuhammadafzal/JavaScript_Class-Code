
//Aray Methods

//to String

let num = [0,1,2,3];
let numtostring = num.toString()
console.log(numtostring);

//to Join

let tojoin = num.join("_");
console.log(typeof tojoin);
console.log(tojoin);

// pop
// it remove the last value of array and it change the origional array
//It return the popped element 

let popElement = num.pop();
console.log(popElement);

//push
// it add the new element from end an array it also change the origional array


let pushElement = num.push(78);
console.log(pushElement);


//shift
// it removesthe  element from start an array it also change the origional array
//It returns shifted element

let shiftElement = num.shift(78);
console.log(shiftElement);

//unshift
// it add the new element from start an array it also change the origional array
//It returns the new array length

let unshiftElement = num.unshift(78);
console.log(unshiftElement);

//delete
//delete is not a method it is an operator
//It is not affected the array length\
// It leaves an empty space

delete num[1];

//Concatenation of an array
//It not change origional array but it makes a new array after concat
let arr1 = [1,2,3];
let arr2 = [4,5,6];

let newArr = arr1.concat(arr2,num);
console.log(newArr);

//Sort 
//It modify the origional array

let MixNum = [23, 98, 54, 1, 70, 100];
MixNum.sort(); // it sort numbers as 1 2 3 dont count the numbers
console.log(MixNum);

// Sort i ascending order
let compare = (a , b)=> {
    return a - b
}

MixNum.sort(compare);

// Sort i descending order
let compared = (a , b)=> {
    return b - a
}

MixNum.sort(compared);

// Reverse

MixNum.reverse();

//Splice
// MOdify the source array //Returns the deleted items

// 1 index where the start
// 2 how many delete
// add elments

MixNum.splice(2, 3, 56, 65, 78);

//Slice
// slice out a peice from an array it create new array
// It doesnot chage the origional array

let wholeNum = MixNum.slice(0)//It slice out a whole array
let desiredNum = MixNum.slice(1,4)//it slice out from 1 number to 2 number se 1 kum


