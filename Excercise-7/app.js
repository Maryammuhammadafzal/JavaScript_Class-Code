
//Generate a Password
class Password {
    constructor() {
        console.log('welcome to password generator');
        this.pass = ""
    }
    generatePassword(length) {
        let chars = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()'
        // let numbers = ""
        // let specials = ""

        if (length < 8) {
            console.log("password must be contain 8 character");

        }
        else {
            for (let i = 0; i < length; i++){
                this.pass += chars[Math.floor(Math.random()*chars.length)]
                // this.pass += numbers[Math.floor(Math.random()*numbers.length)]
                // this.pass += specials[Math.floor(Math.random()*specials.length)]
            }
        return this.pass
}
    }
}
let p = new Password()
console.log(p.generatePassword(8));
