const cardTemplate = document.getElementById("card-template").cloneNode(true);
document.getElementById("card-template").remove();
const tableTempalte = document.getElementById("table-0").cloneNode(true);
const editMenuDialog = document.getElementById("dialog-edit-menu");
let selectedCard = null;
tablesArray = [];

InitializeApp();

function InitializeApp() {

    emptyHtmlTableContent();
    newTable();
    createHtmlElements();
    addEvents();
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
    let card = {
        title: "Title",
        description: "Description",
        assignedTo: "Assigned To",
        startDate: "Start Date",
        endDate: "End Date",
        status: "Status",
        priority: "Priority",
        comments: ["Comentarios"],
    }
    table.cards[0] = card
    tablesArray.push(table)
    createHtmlElements()
}

function addCardToTable(table) {
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
    table.cards.push(newCard);
    createHtmlElements();
}

function createHtmltable(table) {
    const tableContainer = document.getElementById("table-container");
    const newTable = tableTempalte.cloneNode(true);
    newTable.display = "flex";
    newTable.id = `table-${table.index}`
    createHtmlCards(table.cards, newTable);
    button = newTable.getElementsByClassName("add-todo-item")[0];
    button.addEventListener('click', () => addCard(table));
    tableContainer.appendChild(newTable);
}
function addCard(table) {
    console.log("add Card")
    addCardToTable(table);
    createHtmlElements();
}

function createHtmlCards(cards, tableHtml) {
    for (let index = 0; index < cards.length; index++) {
        const card = cards[index];
        const cardHtml = cardTemplate.cloneNode(true);
        cardHtml.display = "flex"
        updateCardHtml(cardHtml, card);
        console.log(tableHtml);
        let cardList = tableHtml.getElementsByClassName("card-list")[0];
        cardList.appendChild(cardHtml);
    }
}

function updateCardHtml(cardHtml, cardData) {
    cardHtml.getElementsByClassName("card-title")[0].innerHTML = cardData.title;
    cardHtml.getElementsByClassName("card-text")[0].innerHTML = cardData.description;
    cardHtml.addEventListener('click', () => DialogEditCard(cardData));
}

function DialogEditCard(cardData) {
    console.log("edit card pop up");
    selectedCard = cardData;
    dialogTitle = editMenuDialog.getElementsByClassName("dialog-title")[0];
    dialogTitle.value = cardData.title;
    menuTextArea = editMenuDialog.getElementsByTagName("textarea")[0];
    menuTextArea.value = cardData.description;
    editMenuDialog.showModal();
}

function closeAndSaveData() {
    console.log("close")
    dialogTitle = editMenuDialog.getElementsByClassName("dialog-title")[0];
    selectedCard.title = dialogTitle.value;
    dialogTitle.value = "";
    menuTextArea = editMenuDialog.getElementsByTagName("textarea")[0];
    selectedCard.description = menuTextArea.value;
    menuTextArea.value = "";
    selectedCard = null;

    editMenuDialog.getElementsByTagName("textarea")[0].value = "";
    editMenuDialog.close();
    createHtmlElements();
}

function addEvents() {
    const addTodoButtons = document.getElementsByClassName("add-todo-item");
    for (let index = 0; index < addTodoButtons.length; index++) {
        const button = addTodoButtons[index];
        button.addEventListener('click', () => addCard(button));
    }
    // dialog pop up button 
    const editMenuCloseButton = editMenuDialog.getElementsByClassName("box-menu-Button")[0];
    console.log(editMenuCloseButton);
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