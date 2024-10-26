
//Todo List

let submtBtn = document.getElementById('submit')
submtBtn.addEventListener('click' , (e)=>{
  e.preventDefault();
  let input = document.getElementById('todo-input') 
  let deleteBtn = document.createElement('button')
  let editBtn = document.createElement('button')
  deleteBtn.innerText= "Delete"
  editBtn.innerText = "Edit"
  
  let todoList = document.getElementById('list')
  todoList.innerHTML += `<li id="item">${input.value}</li>`
  let tododeleteBtn = todoList.appendChild(deleteBtn)
  let todoeditBtn = todoList.appendChild(editBtn)
 
  localStorage.setItem('Todoitem' , JSON.stringify(input.value));
  localStorage.getItem('Todoitem');
  localStorage.Todoitem += JSON.stringify(input.value)
  input.value = ""

  tododeleteBtn.addEventListener('click' , (e)=>{
    e.preventDefault();
    localStorage.removeItem('Todoitem')
    todoList.innerHTML = ""
  })

  todoeditBtn.addEventListener('click' , (e)=>{
    e.preventDefault();
    input.value = localStorage.getItem('Todoitem')
  })

})