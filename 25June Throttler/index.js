let timerID;
let eventCount = 0;
let counter=0;

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    let event = document.getElementById("event");
    event.innerText = `No. of times event triggered...${++eventCount}`
    throttler(main, 3000);
})

const makeCall = () => {
    let parent = document.getElementById("container");
    parent.innerText = `No. of times Debounce triggered... ${++counter}`
}

const main = () => {
    makeCall();
}

const throttler = (func, delay) => {
    if (timerID) {
        clearTimeout(timerID);
    }
    timerID = setTimeout(() => {
        func()
    }, delay)
}