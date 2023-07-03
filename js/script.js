const myButton = document.getElementById("btn-title");
myButton.addEventListener("click", addFunction);

function addFunction() {
  const myInput =
    document.getElementById("input-title").value; /*-buscando valor do input-*/

  const resultList = document.getElementById("to-do-list"); /*-referenciação-*/
  const newItem =
    document.createElement(
      "li"
    ); /*-criando novo elemento html dinamicamente na lista-*/
  newItem.textContent = myInput; /*--*/
  resultList.appendChild(
    newItem
  ); /*-vinculando newItem como filho da div pai resultList-*/

  const verifyButton = document.createElement("button"); /*-referenciação-*/
  verifyButton.classList.add(
    "verify-button",
    "button-spacing"
  ); /*-adicionando classe dinamicamente-*/

  const deleteButton =
    document.createElement("button"); /*-criando elemento HTML dinamicamente-*/
  deleteButton.classList.add(
    "delete-button",
    "button-spacing"
  ); /*-adicionando classe dinamicamente-*/

  resultList.appendChild(verifyButton); /*-vinculando a uma div pai-*/
  verifyButton.innerHTML =
    "Verificar"; /*-fazendo alteração direta no html pelo método innerHTML-*/
  resultList.appendChild(deleteButton); /*-vinculando a uma div pai-*/
  deleteButton.innerHTML =
    "Deletar"; /*-fazendo alteração direta no html pelo método innerHTML-*/

  deleteButton.addEventListener("click", deleteItem);

  function deleteItem(event) {
    const listItem = event.target.parentNode;
    listItem.remove();
  }

  newItem.appendChild(verifyButton);
  newItem.appendChild(deleteButton);
  resultList.appendChild(newItem);

  verifyButton.addEventListener("click", verifyItem);

  function verifyItem(event) {
    const button = event.target;
    const currentText = button.textContent;
    if (button.style.backgroundColor === "green") {
      button.style.backgroundColor = "";
    } else {
      button.style.backgroundColor = "green";
    }

    if (currentText === "verificado") {
      button.textContent = "verificar";
    } else {
      button.textContent = "verificado";
    }
  }

  if (myInput === "") {
    alert("Por favor, insira uma tarefa antes de adicionar à lista.");
    return;
  }
}

const reset = document.querySelector(".reset-btn");
reset.addEventListener("click", resetFunction);

function resetFunction() {
  const resultList = document.getElementById("to-do-list");

  while (resultList.firstChild) {
    resultList.removeChild(resultList.firstChild);
  }
}
