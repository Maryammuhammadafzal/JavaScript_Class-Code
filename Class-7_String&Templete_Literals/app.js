
// String are  Use to store and manipulate text
// String is immmutabele ,it does not change
//String can be created as

let name = "Maryam";
console.log(name);


//String can also be created using single quotes

let myName = 'Maryam';
console.log(myName);

// we can check the length of string 

let length = name.length;
console.log(length);

//We can get the characters of a string 1 by 1 

let city = "Karachi";
console.log(city[0]);
console.log(city[1]);
console.log(city[2]);


// Tempelate Literals

// Tempelate Literals use backtics instead of quotes to store a string
let gender = `female`;

//With this it is possible to use single quotes or double quotes both
let myPrinciple = `Ma'm Yasmeen`

console.log(myPrinciple);



//We can insert variable directly in a tempelate literals. that's why it is called "string interpalation"
let country = "pakistan";
let district = "sindh";

let sentences = `${country} has a ${district} `;
console.log(sentences);


//Escape Characters

// \' add single quotes '
// \"  add double Quotes "
//  \n add newline
//  \t Tab
// \r Cariage Return

let fruit = "bana\'na";
console.log(fruit);

let animal = "Bana\"na";


// String Properties and Methods 
//String methods are builtin() methods

//Type Of 

console.log(typeof(name));


//Index Of

let indexNum = name.indexOf("r");

//length
//Finding the length of an string

let nameLength = name.length;
console.log(nameLength);

//REtrieving a specific string character
//It is in a square bracket notation
//Computer count from 0 not 1

console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);

//For the last character of an string
console.log(name.length -1);

//Substring
// It returns true if the string contains the substring, and false otherwise.
// This can be done using the includes() method, which takes a single parameter — the substring you want to search for.

if (name.includes("yam")) {
    console.log("Found");
} else {
    console.log("not Found");
    
}

//Strats With

if (name.startsWith("yam")) {
    console.log("Found yam!");
  } else {
    console.log("No yam here!");
  }

//Ends With

if (name.startsWith("yam")) {
    console.log("Found yam!");
  } else {
    console.log("No yam here!");
  }

// to Upper Case

let toUpperCase = name.toUpperCase();
console.log(toUpperCase);

// to LOwer Case

let toLowerCase = name.toLowerCase();
console.log(toLowerCase);

// Slice

console.log(name.slice(0)); //It copy whole from 0 because it has no ending argument
console.log(name.slice(1,3)); //it copy and return "am"


//Replace

console.log(name.replace("mar" , "par"));

//ReplaceAll

console.log(name.replaceAll("mar" , "par"));

//Concat

console.log(name.concat(" is a freind of Asma"));


//Trim
//Remove the space

let space = "     abs    "
console.log(space.trim());


// Quiz
//Use a for loop to print a string

let str = "Alphabets";

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    
}