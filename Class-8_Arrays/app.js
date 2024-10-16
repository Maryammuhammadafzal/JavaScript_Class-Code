
//Arrays 
// It is a collection of multiple type of values. It is Mutable

// it is decleared empty
let arr = [];
console.log(arr);

// It can stored more than 1 value of multiple types
 arr = [1, 2, 3, 4, true, "string" , null]
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]); // It is undefined because index 7 is not defined

//we can check the length of an array same as string
console.log(arr.length);

//WE can add or cassign the new value or existing value of an array 
arr[3] = "myarr"; //change the existing array
arr[7] = false; // add anew value

// type of array is object
console.log(typeof arr);


// Iterate Loop on array

//For
for (var i = 0; I < arr.length; i++) {
    console.log(arr[i]);
}
//For of
for (let i of arr) {
    console.log(arr[i]);
}
//For in
for (let i in arr) {
    console.log(arr[i]);
}
//While
let j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}
//Do while
do{
    console.log(arr[j]);
    j++
} while (j < arr.length);



