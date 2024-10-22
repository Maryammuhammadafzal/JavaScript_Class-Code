
//Cookies
//Cookies are small thing of data stored drectly in the browser

//In jscript , documnent.cookie provde access to cookies
alert(document.cookie);
//it return the key value pairsand are seperated by semicolon

// Cookies are  set by web server using the Set-cookie HTTP-header. Next time when the request is sent to same doman , the browrser send the cookie using the cookie HTTp-header .
//That way the server knows who sent the request.

//We can also access cookies 


//Writing cookie
// An assignment to document.cookie is treated specially ina way that a write operation does'nt touch other cookies

document.cookie = "name=maryam123"
//It update only cookie name donot replace all cookes 

document.cookie = "user=01"
document.cookie = "user=02"
//it updated by 02

//Encode URI Component
let key = prompt('enter key')
let value = prompt('enter value')

document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
document.cookie = `${decodeURIComponent(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)}`
//Cookie option 
// Cookies have several options which can be provided after key=value to a set call like this:

document.cookie= "user=xyz; path=/dashboard; expires=Tue,29 March 2011 05:17:33 GMT"
//Path option makes the cookie visible at /dashboard
// expires set the cookie expiration time
//they all are optional

// note
//1.The name=value pair after encodeuricomponent, should not encode4kb
//2.Total num of cookies per domain is limited to around 20+(exect num is browser dependent)