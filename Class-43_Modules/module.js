
/// /////Modules

// mdule has two types 
//common js 
//ES6 modules

//Common js
const hello = require("./module1");
hello();
// //Don't need to do this as
// hello.hello();

const {hello , helloWithParam} = require("./module1.js");
helloWithParam('Maryam')
helloWithParam('Azam')
helloWithParam('Misbah')
helloWithParam('Natiq')
helloWithParam('Ayesha')


//ES6 modules

//It is import default
import hello from "./module2.js";
hello();

// //it is import as object
import {hello , helloWithParam} from "./module2.js";
hello()
helloWithParam()