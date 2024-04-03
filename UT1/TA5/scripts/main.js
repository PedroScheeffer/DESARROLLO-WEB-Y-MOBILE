const addTodoButtons = document.getElementsByClassName("add-todo-item");
let tables = document.getElementsByClassName("table");

for (let index = 0; index < addTodoButtons.length; index++) {
    const button = addTodoButtons[index];
    button.addEventListener('click', () => addCard(button));
}


function addCard(button) {
    console.log("add Card")
    let box = button.parentNode.parentNode;
    // crate the task
    let card = document.createElement("div");
    card.className = "card";
    card.addEventListener('click', editCardPopUp());
    let cardlist = box.getElementsByClassName("card-list")[0];
    cardlist.appendChild(card);
}

function editCardPopUp(){
    console.log("edit card pop up")
    
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