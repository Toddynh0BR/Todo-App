document.addEventListener("DOMContentLoaded", () => {
  loadItems();

  // Add event listener to save items when the window is closed or refreshed
  window.addEventListener("beforeunload", saveItems);
});

function saveItems() {
  const items = [];
  const listItems = document.getElementById("todo-list").children;
  for (let item of listItems) {
    items.push(item.textContent);
  }
  localStorage.setItem("todoItems", JSON.stringify(items));
}

function loadItems() {
  const savedItems = JSON.parse(localStorage.getItem("todoItems"));
  if (savedItems) {
    const list = document.getElementById("todo-list");
    for (let item of savedItems) {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      list.appendChild(listItem);
    }
  }
}