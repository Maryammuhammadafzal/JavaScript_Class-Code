
//module 1 .js 
// common js 

const hello = ()=>{
    console.log("hello");
    
}
module.exports = hello;

const helloWithParam = (name)=>{
    console.log(hello + name);
    
}

module.exports = {hello , helloWithParam};
//It is same as the object 
module.exports = {hello : hello, helloWithParam : helloWithParam};
