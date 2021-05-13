const userForm = document.querySelector(".js-userForm"),
    userInput = userForm.querySelector("input"),
    greetings = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = userInput.value;
    paintGreetings(currentValue);
    saveName(currentValue);
}

function paintGreetings(currentUser){
    userForm.classList.remove(SHOWING);
    greetings.classList.add(SHOWING);
    greetings.innerText = `Hello ${currentUser}`;
}

function askForName(){
    userForm.classList.add(SHOWING);
    userForm.addEventListener("submit", handleSubmit);
}

function checkUser(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        paintGreetings(currentUser);
    }
}

function init(){
    checkUser();
}

init();