
//Table navigation

let t = document.body.firstElementChild.firstElementChild;
console.log(t);
console.log(t.rows); //Colection of tr elements
console.log(t.caption);// refrence of caption
console.log(t.tHead);//refrence of thead
console.log(t.tFoot);// refrence of tfoot
console.log(t.tBodies);// Collection of tbody elements
// console.log(t.tbody.rows); //Collection of tr elements

let tr = t.rows;
console.log(tr);

console.log(tr[0].cells); //Collection of td and th
console.log(tr[2].sectionRowIndex); //Index of tr inside enclosing element
console.log(tr[1].rowIndex); //row number starting from 0

let td = t.rows[1].firstElementChild
console.log(td.cellIndex);



