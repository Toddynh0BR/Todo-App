document.addEventListener("DOMContentLoaded", () => {
  loadItems();

  // Add event listener to save items when the window is closed or refreshed
  window.addEventListener("beforeunload", saveItems);
});

function saveItems() {
  const items = [];
  const listItems = document.getElementById("TODOS").children;
  for (let item of listItems) {
    items.push(item);
  }
  localStorage.setItem("todoItems", JSON.stringify(items));
}

function loadItems() {
  const div = document.createElement("div");
  div.id = "TODO"
  const savedItems = JSON.parse(localStorage.getItem("todoItems"));
  if (savedItems) {
    const list = document.getElementById("TODOS");
    for (let item of savedItems) {
      const listItem = div
      listItem = item;
      list.appendChild(listItem);
    }
  }
}