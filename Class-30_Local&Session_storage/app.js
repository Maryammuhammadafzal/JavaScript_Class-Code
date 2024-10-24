
//Local Storage 
// It is used for stored data in particular domain

// local storage is a web storage object which are not sent to server with each request
//This data servives a full page refresh and even a full browser restart 
//It is saved
//it also has a key value pair as a string

localStorage.setItem('name' , "maryam")
localStorage.getItem('name')
localStorage.removeItem('name')
localStorage.clear()

//Key
localStorage.key('0')
localStorage.key('1')

//length
localStorage.length()

// we can get get and set this is as object
localStorage.name = 'maryam'
alert(localStorage.name)
delete localStorage.name

//Note 
//Both key and bvalue are must be string
//we can use the teo JSON metnde to strore objects in localStorage

JSON.stringify(object) //Convert object to json string
JSON.parse(string) //Convert string to objects(must be a valid JSON)

//Session Storage
//It used very less often then localstorage properties and methods are e same 

//1. session storage only exist in a exsting tab 
// 2. it data present only current tab either remove

sessionStorage.setItem('name' , "mary")
sessionStorage.getItem('name')
sessionStorage.removeItem('name')
sessionStorage.clear()


//Storage Event
// It  is triggered when the user data get updated in local storage or session storage
//it has these events

// 1. key _ the key
// 2. old _ prev value
// 3. newValue _ new value
// 4. url _ page url
// 5.storageArea _ local or Session Storage

window.onstorage = (e) => {
    alert("changed");
    console.log(e);
    
}