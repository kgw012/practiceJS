const clockContainer = document.querySelector(".js-clock"),
                clock = clockContainer.querySelector("h1");

function printTime(time){
    return `${time < 10 ? `0${time}` : `${time}`}`;
}

function setClock(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clock.innerText = `${printTime(hours)}:${printTime(minutes)}:${printTime(seconds)}`
}

function init(){
    setClock();
    setInterval(setClock, 1000);
}

init();