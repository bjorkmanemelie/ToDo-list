const container = document.querySelector("#div");
const inputField = document.querySelector("#input");
const addButton = document.querySelector("#button");

console.log(container, inputField, addButton);

addButton.addEventListener("click", function () {
  console.log("You clicked");
  console.log("input value:", inputField.value);
});

function addTodo() {
  //skapar en funktion som lägger till todos
  const todoText = inputField.value;

  if (todoText === "") {
    //checkar om input är tom
    alert("This field cant be empty");
    return;
  }

  const todoItem = document.createElement("div"); //skapar ett nytt div element
  todoItem.className = "todo-item";

  todoItem.textContent = todoText; //lägger till texten

  const btnDone = document.createElement.apply("button"); //skapar knapp med variabel namn btndone
  btnDone.textContent = "Done";

  btnDone.addEventListener("click", function () {
    console.log("this", this); //this refererar till knappen som klickades på

    const divItem = this.parentElement; //på så sätt kommer vi åt parent elementet
    divItem.classList.toggle("Done");
  });

  todoItem.appendChild(btnDone);
  todoList.appendChild(todoItem);

  inputField.value = ""; //rensar input fältet
}

btnDone.addEventListener("click", todoText);

inputField.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTodo();
  }
});
