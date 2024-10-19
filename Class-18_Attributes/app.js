

// console.dir 

//It show the element as an object with it's properties
console.dir 

// tag name/ node name

// node name only  define the node name 
// while tag name defined the tag name
document.body.nodeName // #text
document.body.tagName //body


// Node removal

box.remove();

// innerHtml

// the inner html property alllows to get the html inside the document as a string 
// It is only valid for element nodes 
document.body.innerHTML; //text
//for other doc type we can use node value or .data
document.body.nodeValue;
document.body.firstChild.data;

//we can set the property of inner html as a string
document.body.innerHTML = `<b>hey it's a body</b>`;

// outerHtml

// it get the outer element of target
document.body.outerHTML;

//we can also set the outer html of an element
document.body.outerHTML = `<a  href="https://www.facebook.com">Facebook</a>`;

//text content
// provide accesss to the text inside the element :only text, minus all tags
 
document.body.textContent;

// hidden property 
// Yhe hidden attribute and the DOM property specifies weather the element is visible or not

document.body.firstChild.hidden = true;

//HTML Attributes methods

// get attribute(name) : method used to get the value of an attribute 
//set attribute(name) : mmethod to check for existance of an attribute 
//has attribute("name" , "value") : method used to set the value of an attribute 
//remove attribute(name) : method to remove the attribute from element
// .attributes : method to get the collection of all attributes

let box = document.getElementById("box")
console.log(box.getAttribute('class'));
console.log(box.hasAttribute('class'));
console.log(box.setAttribute("hidden" , "true display"));
console.log(box.removeAttribute("class"));
console.log(box.attributes);

//data - * attributes
//we can also create custom attributes but start with "data-" are reserved for programmers use they are available as the name dataset

//if an ekements has an attribute name "data-one" it is avalable element.dataset.one
console.log(box.dataset);
console.log(box.dataset.one);
console.log(box.dataset.two);


//Insertion Methods

// first method is inner html 

//create element
let div = document.createElement("div");

//append child
document.body.appendChild(div)
document.body.append(div)//it is end of container (inner)
document.body.prepend(div)//it is start of container (inner)
document.body.before(div)//it is start of container (outer)
document.body.after(div)//it is end of container (outer)

document.body.replaceWith('div');

// Insert Adjacent Element and text

// this metho d is used to insert HTML. The first parameter is acode  word, specifying where to insert.THe second is an HTML string
//Most one of the following

// "beforebegin"  // it add text before the start of target element 
// "beforeend"  // it add text before the end of target element
// "afterbegin" // it add text after the start of target element
// "afterend" // it add text after the end of target element.

box.insertAdjacentElement('beforebegin' ," <div>beforebegin</div>")
box.insertAdjacentElement('beforeend' , "<div>beforeend</div>")
box.insertAdjacentElement('afterbegin' , "<div>afterbegin</div>")
box.insertAdjacentElement('afterend' , "<div>afterend</div>");
