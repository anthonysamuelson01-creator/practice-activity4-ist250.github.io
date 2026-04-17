function updateWebpage() {
    //Update the user greeting
    let name = document.getElementById("name").value;
    let updateUserGreeting = document.getElementById("updateUserGreeting");
    updateUserGreeting.textContent = name;
    //Update the brief message
    let briefMessage = document.getElementById("briefMessage").value;
    let updateBriefMessage = document.getElementById("updateBriefMessage");
    updateBriefMessage.textContent = briefMessage;
    //Update the background color of the page based on the options that the user selects when the button is clicked
    let color = document.getElementById("color");
    let wholePage = document.getElementById("wholePage");
    wholePage.style.backgroundColor = color.value;
    //extra credit
}
function addToDoItems() {
    let item = document.getElementById("toDoList").value;
    let updateToDoList = document.getElementById("updateToDoList");
    updateToDoList.textContent = item;
}

