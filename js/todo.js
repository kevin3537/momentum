const toDoForm = document.querySelector("#toDoForm");
const toDoInput = document.querySelector("#toDoForm input");
const toDoList = document.querySelector("#toDoList");

let toDos = [];
const savedToDos = JSON.parse(localStorage.getItem("todos"));

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.id = newToDo.id;
  span.innerText = newToDo.value;
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function deleteToDo(event) {
  const id = parseInt(event.target.parentElement.id);
  event.target.parentElement.remove();
  localStorage.setItem(
    "todos",
    JSON.stringify(
      JSON.parse(localStorage.getItem("todos")).filter((toDo) => toDo.id !== id)
    )
  );
}

function saveToDos(newToDo) {
  toDos.push(newToDo);
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = { id: Date.now(), value: toDoInput.value };
  paintToDo(newToDo);
  toDoInput.value = "";
  saveToDos(newToDo);
}

if (savedToDos !== null) {
  toDos = savedToDos;
  toDos.forEach((toDo) => paintToDo(toDo));
}
toDoForm.addEventListener("submit", handleToDoSubmit);
