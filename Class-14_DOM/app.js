
//DOM

//dom tree refers to  the html page where all the nodes are objects . 
//There can be 3 main types of nodesin the Dom are:

//text node
//Element node
//comment node

// In an  HTML page <html> is at the root and <head> and <body> are it children

//A text node is always a leaf of the tree Mean it has no children

//Walking to the DOM

console.log(document.documentElement);
console.log(typeof (document.documentElement));

//Note: document .body sometime be null when you write the javascript before a body tag
console.log(document.body);
console.log(document.head);

console.log(typeof(document.body));
console.log(typeof(document.head));

console.log(document.title);
console.log(typeof(document.title));

//Childrens of Html elements
//direct as well asdeeply nested element of an eement are called it's children

//elements that are directly child of a parent is called child
//all nested nodes are children as wel

// Elements that are inside one elements line by line not nested are called siblings

console.log(document.body.firstChild); //It returns first child of elements
console.log(document.body.lastChild);//It returns last child of elements
console.log(document.body.childNodes);//It returns all child of elements

// element.childNodes[0] === element.firstchild
// element.childNodes[element.childNodes.length-1 === element.lastChild]

console.log(document.hasChildNodes());//It check the node has present or not and return boolean

//child nodes look like an array but it is not
//it can convert into an array

let arr = Array.from(document.body.childNodes);
console.log(arr);

//DOM collection
//IT is readonly
// they are live elment.childNodes variable (refrence) will automatically updated if childNodes of elemnt is changed.
// They are iterable using for...of loop

//sibling
// they are same parent children are called siblings
// body is the next sibling of head & head is the previous siblings

console.log(document.head.nextSibling);
console.log(document.body.previousSibling);



// Parents 

console.log(document.parentNode); //it return everything
console.log(document.parentElement); //It return when parent is an element

//element only navigation

let body = document.body;
console.log(body.firstChild);

// IT return when an element is got
console.log(body.firstElementChild);
console.log(body.lastElementChild);
console.log(body.nextElementSibling);
console.log(body.previousElementSibling);
