

//Hacker Man 

let messages = [
    'initializing hack tool...',
    "Connecting to facebook...",
    'connecting to server 1',
    'connecting to server 2',
    'connecting successfully...',
     "username Misbah40",
    '100K Password tried...',
    "Match no found",
    'Another200K Password tried',
    "Match no found",
    "Accessing Acount",
    "Hack successfully"
];


const sleep = async(seconds)=> {
    return new Promise((resolve , reject) => {
        setTimeout (()=> {
            resolve(true)
        }, seconds * 1000)
    })

} 

let text = document.getElementById('text')
const showHack = async(message) => {
    await sleep(2)
    text.innerHTML = text.innerHTML + message + "<br>"
    // console.log(message);
    
}
//IIFE (imidiately invoked function)

(async () => {
    for(let i = 0; i<messages.length; i++){
        await showHack(`Hacker Man <br> $- hacking code of all website-- ${messages[i].toLowerCase()}`)
        if(i == messages.length-1){
            i = 0;
            text.innerHTML = ""
        }
    }

})()
