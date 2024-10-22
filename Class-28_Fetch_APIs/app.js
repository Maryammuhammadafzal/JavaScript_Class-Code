
// javaScript can be used to send and return information from the network when needed(AJAX)asynchronous javascript and Xml it is an umbrella term 
// now used s JSON and fetch APIs

//Fetch APIs
//It is used to get data over the network t return the promise


let p = fetch("...")
p.then((responce1) => {
    return responce1.json
}).then((responce2) => {
    console.log(responce2);
    
})

//Getting a response is a 2 stage process //Thats why we use 2 .then value

// 1.an object of responce class containing "status" & "ok" properties

//Status _ the https atatus code eg : 200
//Ok     _ boolean , true if the https status code s 200 - 299

let p1 = fetch("...")
p1.then((responce1) => {
    console.log(responce1.status);
    console.log(responce1.ok);
    return responce1.json
}).then((responce2) => {
    console.log(responce2);
    
})

// 2.After that we need to call another method to access the body in different formats             

//response.text () _ Read & return the text
//response.Json () _ Parse the response to json
let p3 = fetch("...")
p.then((responce1) => {

    // return responce1.text
    return responce1.json
}).then((responce2) => {
    console.log(responce2);
    
})

//Other methods include response.formData() , response.blob() , response.arrayBuffer()etc.
let p4 = fetch("...")
p.then((responce1) => {
    // return responce1.formData()
    // return responce1.blob()
    // return responce1.arrayBuffer()
    // return responce1.clone

}).then((responce2) => {
    console.log(responce2);
    
})
//Note : We can use only one body.reading method.example if we have already got the response with response.text() then response.json wont work

//Response headers 
// they are availble in response hesders

p.then((responce) => {
    console.log(responce.headers);
    
})

//request headers 
//to set a request header in fetch , we can use the headers option
let a = fetch (url , {
    headers:{
      Authentication : 'secret'
    }
})


//POst REquest

//Using JSON PLaceholder
//to make a post request we need to use fetch option
//method _ HTTP-method eg: post
// body  _ the request body

let optons = {
    method : "POST",
    headers : {
        "Content-type": "application/json"
    },
    body :JSON.stringify({

        title:'Maryam',
        body: "bibi",
        userId : 1100
    }),

}

fetch('...' , optons)
    .then((response) => response.json())
    .then((json) => console.log(json));

//Now wrap all these in an async function    
const abc = async () =>{
    
    let optons = {
        method : "POST",
        headers : {
            "Content-type": "application/json"
        },
        body :JSON.stringify({
    
            title:'Maryam',
            body: "bibi",
            userId : 1100
        }),
    
    }
    let p = await fetch('...' , optons)
    let response = await p.json() 
    return response 
}

const mainFunc = async () => {
    let func = await abc()
    console.log(func);
    
}
mainFunc()

// If we want to pass data in body object by self so, we do this
const todo = async (todo) =>{
    
    let optons = {
        method : "POST",
        headers : {
            "Content-type": "application/json"
        },
        body :JSON.stringify(todo),
    
    }
    let p = await fetch('...' , optons)
    let response = await p.json() 
    return response 
}

const createTodo = async () => {
    let todo = {
        title:'Maryam',
        body: "bibi",
        userId : 1100
    }
    let todor = await todo(todo)
    console.log(todor);
    
}
createTodo()

//Now we get the todo by async function which takes an id
const todo2 = async (todo) =>{
    
    let optons = {
        method : "POST",
        headers : {
            "Content-type": "application/json"
        },
        body :JSON.stringify(todo),
    
    }
    let p = await fetch('...' , optons)
    let response = await p.json() 
    return response 
}

const getTodo = async (id) => {
    let r = await fetch('url' + id )
    let response = await r.json() 
    return response 
}            


const createTodo2 = async () => {
    let todo = {
        title:'Maryam',
        body: "bibi",
        userId : 1100
    }
    let todor = await todo2(todo)
    console.log(todor);
    console.log(await getTodo(5));
    
    
}
createTodo2()
