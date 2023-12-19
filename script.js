const ul = document.querySelector("ul");
const lists = ul.querySelectorAll("li:not(.dragging)");

lists.forEach((list) => {
  list.addEventListener("dragstart", () => {
    setTimeout(() => list.classList.add("dragging"), 0);
  });

  list.addEventListener("dragend", () => {
    list.classList.remove("dragging");
  });
});

const initSortableList = (e) => {
  e.preventDefault();
  const draggingItem = ul.querySelector(".dragging");
  const siblings = [...ul.querySelectorAll("li:not(.dragging)")];

  let nextSibling = siblings.find((sibling) => {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });

  ul.insertBefore(draggingItem, nextSibling);
};

ul.addEventListener("dragover", initSortableList);
ul.addEventListener("dragenter", (e) => e.preventDefault());
ul.addEventListener("drop", () => {
  const newUl = document.querySelectorAll("li");
  reArray(newUl);
});

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function reArray(obj) {
  toDos = [];
  obj.forEach((item) => {
    const text = item.querySelector("span");
    const newTodoObj = {
      text: text.innerText,
      id: item.id,
    };
    toDos.push(newTodoObj);
    saveToDos();
  });
}
