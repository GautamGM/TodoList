let input = document.querySelector("input");
const ul = document.querySelector("#todo-list");
const addbutton = document.querySelector("#addTask");

// Object to store todo tasks
let myTodo = [];

window.onload = () => {
  const data=getFromLocalStorage()
  if (data) {
    myTodo = data
    showList();  // Show the existing todos
  }
};

// Add todo task when the add button is clicked
addbutton.addEventListener("click", (e) => {
  e.preventDefault()
  const text = input.value;
  if (text) {
    // id++;
    addTodo(text);
    input.value = "";
  } else {
    alert("Please enter a todo");
  }
});

// Function to add a todo
function addTodo(text) {
  let id = Math.floor(Math.random()*100);
  console.log(id)
  myTodo.push({ id: id, task: text, complete: false });

// setolocalstorage
  setTolocalStorage(myTodo)
  showList();
}

// Show todo list by rendering it into the DOM
function showList() {
  // Clear existing list items
  ul.innerHTML = ""
  
  // Loop through todos and display them
  myTodo.forEach((todo) => {
    const div = document.createElement("div");
    div.id = todo.id;
    div.className = "task";

    const span = document.createElement("span");
    span.className = "text";
    span.textContent = todo.task;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "check";
    checkbox.id = todo.id;
    checkbox.checked = todo.complete;
    checkbox.addEventListener("click", toggleComplete);

    const delbtn = document.createElement("button");
    delbtn.id = todo.id;
    delbtn.textContent = "remove";
    delbtn.className = "remove-btn";
    delbtn.addEventListener("click", removeTodo);

    div.append(checkbox, span, delbtn);
    ul.append(div);

    // If the task is complete, add strike-through
    if (todo.complete) {
      span.style.textDecorationLine = "line-through";
      span.style.color="black"
      div.style.backgroundColor = "#dcdcdc";
    }
  });
}

// Remove a todo from the list
function removeTodo(e) {
  const id = Number(e.target.id);
  filterData(id,myTodo)
  showList();  // Re-render the updated list
}

// Toggle completion of a todo
function toggleComplete(e) {
  const id = Number(e.target.id);
  const checked = e.target.checked;
  myTodo = myTodo.map((todo) => {
    if (todo.id === id) {
      todo.complete = checked;
    }
    return todo;
  });
  setTolocalStorage(myTodo)
  showList();  // Re-render the updated list
}

// set function for the localstorage.setItem()
function setTolocalStorage(myTodo){
  localStorage.setItem("data", JSON.stringify(myTodo));
}

// function for getData from localstorage.getItem
function getFromLocalStorage(){
  return  JSON.parse( localStorage.getItem("data"))
}

// function for filterData//Remove Data
function filterData(id,data){
  myTodo = data.filter((todo) => todo.id !== id);
  setTolocalStorage(myTodo)
}

// function getLocalStorage(key) {
//   const localData = localStorage.getItem(key);
//   if (!localData) {
//     return null;
//   }
//   return JSON.parse(localData);
// }

// function setLocalStorage(key, data) {
//   JSON.stringify(key, data);
//   return data;
// }

// function getRandomId() {
//   //
// }