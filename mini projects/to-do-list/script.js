// to do list

// select all elements
const form = document.querySelector("#new-item-form");
const list = document.querySelector("#list");
const input = document.querySelector("#item-input");

// add new element after form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // create new item
  const item = document.createElement("div");
  item.innerText = input.value;
  item.classList.add("list-item");

  // add item to list
  list.appendChild(item);

  // clear input
  input.value = "";

  // setup event listener to delete item when clicked
  item.addEventListener("click", () => {
    item.remove();
  });
});
