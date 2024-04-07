let tables = document.getElementsByClassName("table");
const cardTemplate = document.getElementById("card-container");

console.log(cardTemplate);

addEvents();
function addEvents(){
    const addTodoButtons = document.getElementsByClassName("add-todo-item");
    for (let index = 0; index < addTodoButtons.length; index++) {
        const button = addTodoButtons[index];
        button.addEventListener('click', () => addCard(button));
    }
    const addEditButtons = document.getElementsByClassName("edit-card");
    for (let index = 0; index < addEditButtons.length; index++) {
        const button = addEditButtons[index];
        button.addEventListener('click', () => editCardPopUp(button.parentElement));
    }
}


function addCard(button) {
    console.log("add Card")
    let box = button.parentNode.parentNode;
    // crate the box
    let cardlist = box.getElementsByClassName("card-list")[0];
    const cardClone = cardTemplate.cloneNode(true);
    cardClone.removeAttribute("id");
    console.log(cardClone);
    cardClone.addEventListener('click', () => editCardPopUp(cardClone));
    cardlist.appendChild(cardClone);
}

function editCardPopUp(card){
    console.log("edit card pop up")
    let text = prompt('Enter new text', 'New task');
    while(text.length > 320){
        text = prompt("The text was to long, max sizes is 320 characters", "New task");
    }
    if(text == null || text == ""){
        return;
    }
    let p = card.getElementsByClassName("card-text")[0];
    p.innerHTML = text;

    console.log(card);
}

// transform the input to a p and then create a new li with it input
// function addTodo(button) {
//     // console.log("ejecuto")   
//     const card = button.parentNode.parentNode;
//     cardChilds = card.childNodes;
//     // TODO: arreglar esto 
//     for (const child of cardChilds) {
//         if (child.className === "todo-list") {
//             const todoList = child;
//             console.log("ol", todoList);

//             const todoListItems = todoList.childNodes;
//             console.log("todoListItems", todoListItems);
//             let todoListItem = todoListItems[todoListItems.length - 2];
//             /*
//             for (const li of todoListItems) {
//                 if (li.id === "todo-input") {
//                     todoListItem = li;
//                     break;
//                 }
//             }
//             */
//             console.log("li", todoListItem);
            
//             const listItemInput = todoListItem.innerHTML;
//             console.log("input", listItemInput);

//             let newPToReplaceLi = document.createElement("p");
//             newPToReplaceLi.value = listItemInput.value;

//             todoList.appendChild(todoListItem);
//             todoListItem.replaceChild(newPToReplaceLi, listItemInput)
//         }
//     }
// }

// agregar funcion para agregar un nuevo item y otra para editar