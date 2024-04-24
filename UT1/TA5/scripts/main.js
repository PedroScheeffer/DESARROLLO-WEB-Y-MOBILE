const CardTemplate = document.getElementById("card-template").cloneNode(true);
document.getElementById("card-template").remove();
const TableTempalte = document.getElementById("table-0").cloneNode(true);
const EditMenuDialog = document.getElementById("dialog-edit-menu");
let selectedTask = null;
let tablesArray = [];
const serverIp = "http://localhost:3000/api/tasks";
let editedTaskId = null;
InitializeApp();

async function InitializeApp() {
    tablesArray[0] = await getTableFromServer(serverIp);
    console.log("Table from server: \n", tablesArray);
    tablesArray.forEach(element => {
        console.log("Elements", element)
    });

    emptyHtmlTableContent();
    createHtmlElements();
    addEvents();
}

async function getTableFromServer(serverIp) {
    try {
        let response = await fetch(serverIp);
        let data = await response.json();
        let table = {
            index: tablesArray.length,
            cards: data,
        }
        return table;
    } catch (error) {
        return [];
    }
}
async function getTaskFromServer(serverIp, taskId) {
    try {
        let response = await fetch(serverIp + "/" + taskId);
        let data = await response.json();
        return data;
    } catch (error) {
        return [];
    }
}
async function postTaskToServer(serverIp, task) {
    try {
        let response = await fetch(serverIp,
            {
                method: "POST",
                headers: {
                    "Content-Type": "aplication/json",
                },
                body: JSON.stringify(task)
            }
        );
        if (!response.ok) {
            console.log(response.statusText);
            return;
        }
        if (response.ok) {
            let task = await response.json();
            return task;
        }
    } catch (error) {
        return [];
    }
}
async function putTaskToServer(serverIp, task) {
    let serverIpPlusId = serverIp + "/" + task.id
    console.log(serverIpPlusId)
    try {
        let response = await fetch(serverIpPlusId,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(task)
            }
        );
        if (!response.ok) {
            console.log(response.statusText);
            return;
        }
        if (response.ok) {
            let task = await response.json();
            return task;
        }

    } catch (error) {
        return [];
    }
}

async function deletTaskFromServer(serverIp, taskId) {
    try {
        let response = await fetch(serverIp + "/" + taskId,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "aplication/json",
                },
            }
        );
        if (!response.ok) {
            console.log(response.statusText);
            return;
        }
        if (response.ok) {
            let task = await response.json();
            return task;
        }
    } catch (error) {
        return [];
    }
}

function createHtmlElements() {
    // creates all the tables from tablesArray
    emptyHtmlTableContent();

    for (let index = 0; index < tablesArray.length; index++) {
        const table = tablesArray[index];
        createHtmltable(table)
    }
}

function emptyHtmlTableContent() {
    tableContainer = document.getElementById("table-container");
    while (tableContainer.firstChild) {
        tableContainer.removeChild(tableContainer.firstChild);
    }
}

function newTable() {
    let table = {
        index: tablesArray.length,
        cards: [],
    }
    tablesArray.push(table)
    createHtmlElements()
}

async function addNewCardToTable(table) {
    let newCard = {
        title: "Title",
        description: "Description",
        assignedTo: "Assigned To",
        startDate: "Start Date",
        endDate: "End Date",
        status: "Status",
        priority: "Priority",
        comments: ["Comentarios"],
    }
    let newTask = await postTaskToServer(serverIp, newCard);
    table = getTableFromServer(serverIp);
    return newTask;
}

function createHtmltable(table) {

    const tableContainer = document.getElementById("table-container");
    const newTable = TableTempalte.cloneNode(true);
    newTable.display = "flex";
    newTable.id = `table-${table.index}`
    createHtmlCards(table.cards, newTable);
    button = newTable.getElementsByClassName("add-todo-item")[0];
    button.addEventListener('click', () => addCard(table));
    tableContainer.appendChild(newTable);
}

async function addCard(table) {
    try {
        let newCard = await addNewCardToTable(table);
        if (!newCard.id) {
            console.error('Failed to add new card:', newCard);
            return;
        }
        await createHtmlElements();

        let newCardHTML = document.querySelector(`#id-${newCard.id}`);
        console.log(newCardHTML);
        if (newCardHTML) {
            newCardHTML.addEventListener('click', () => dialogPopUp(newCard));
        } else {
            console.error('New card element not found in the DOM:', newCard.id);
        }
    } catch (error) {
        console.error('Error in addCard function:', error);
    }
}



function createHtmlCards(cards, tableHtml) {
    for (let index = 0; index < cards.length; index++) {
        const card = cards[index];
        let cardHtml = CardTemplate.cloneNode(true);
        cardHtml.display = "flex"
        updateCardHtml(cardHtml, card);
        // console.log("card", cardHtml);
        let cardList = tableHtml.querySelector(".card-list");
        cardList.appendChild(cardHtml);
    }
}

function updateCardHtml(cardHtml, cardData) {
    // console.log("update card", cardData)
    cardHtml.id = "id-" + cardData.id;
    cardHtml.querySelector(".card-title").innerHTML = cardData.title;
    cardHtml.querySelector(".card-assigned").innerHTML = cardData.assignedTo;
    cardHtml.querySelector(".card-description").innerHTML = cardData.description;
    cardHtml.querySelector(".card-start-date").innerHTML = cardData.startDate;
    cardHtml.querySelector(".card-end-date").innerHTML = cardData.endDate;
    cardHtml.querySelector(".card-status").innerHTML = cardData.status;
    cardHtml.querySelector(".card-priority").innerHTML = cardData.priority;
    // addComments(cardHtml.querySelector(".card-comments"), cardData.priority);  
    cardHtml.addEventListener('click', () => dialogPopUp(cardData));
    return cardHtml;
}

function dialogPopUp(cardData) {
    // console.log("edit card pop up");
    editedTaskId = cardData;
    EditMenuDialog.querySelector(".dialog-title").innerHTML = cardData.title;
    EditMenuDialog.querySelector(".dialog-assigned").innerHTML = cardData.assignedTo;
    EditMenuDialog.querySelector(".dialog-menu-description").innerHTML = cardData.description;
    let shortStartDate = formatDate(cardData.startDate);
    EditMenuDialog.querySelector(".dialog-start-date").value = shortStartDate;
    let shortEndDate = formatDate(cardData.endDate);
    EditMenuDialog.querySelector(".dialog-end-date").value = shortEndDate;
    EditMenuDialog.querySelector(".dialog-status").innerHTML = cardData.status;
    EditMenuDialog.querySelector(".dialog-priority").innerHTML = cardData.priority;
    EditMenuDialog.showModal();
}
function formatDate(dateString) {
    if (dateString == null || dateString == undefined) {
        return "01/01/2000";
    }
    dateParts = dateString.split("/");
    return dateShort = dateParts[2] + "-" + dateParts[1] + "-" + dateParts[0];
}

async function closeAndSaveData() {
    let taskFromDialog = {
        id: editedTaskId.id,
        title: EditMenuDialog.querySelector(".dialog-title").innerHTML,
        assignedTo: document.querySelector(".dialog-assigned").innerHTML,
        description: document.querySelector(".dialog-menu-description").innerHTML,
        startDate: EditMenuDialog.querySelector(".dialog-start-date").innerHTML,
        endDate: EditMenuDialog.querySelector(".dialog-end-date").innerHTML,
        status: EditMenuDialog.querySelector(".dialog-status").innerHTML,
        priority: EditMenuDialog.querySelector(".dialog-priority").innerHTML,
    }
    let newTask = await putTaskToServer(serverIp, taskFromDialog);
    console.log(newTask);
    let taskHtml = document.querySelector("#id-" + newTask.id);
    if (taskHtml) {
        updateCardHtml(taskHtml, newTask);
    } else {
        console.error("No se encontró el elemento con ID:", newTask.id);
    }
    EditMenuDialog.close();
}

function addEvents() {
    const addTodoButtons = document.getElementsByClassName("add-todo-item");
    for (let index = 0; index < addTodoButtons.length; index++) {
        const button = addTodoButtons[index];
        button.addEventListener('click', () => addCard(button));
    }
    // dialog pop up button 
    const editMenuCloseButton = EditMenuDialog.getElementsByClassName("box-menu-Button")[0];
    // console.log(editMenuCloseButton);
    editMenuCloseButton.addEventListener('click', () => closeAndSaveData());
    // add table button 
    const addTableButton = document.getElementById("add-new-table");
    addTableButton.addEventListener('click', () => newTable());
    // Dark mode button 
    const darkModeButton = document.getElementById("dark-mode");
    darkModeButton.addEventListener('click', () => toggleDarkMode());
}

function toggleDarkMode() {
    bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor == "var(--dark)") {
        bodyStyle.backgroundColor = "var(--light)";
    } else {
        bodyStyle.backgroundColor = "var(--dark)";
    }
}

