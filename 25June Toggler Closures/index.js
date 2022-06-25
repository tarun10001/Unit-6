function toggler(a, b, c) {

    let counter = document.getElementById("container");
    var displayCounter = function () {
        if (Number(counter.innerText) === a) {
            counter.innerText = b;
        }
        else if (Number(counter.innerText) === b) {
            counter.innerText = c;
        }
        else {
            counter.innerText = a;
        }
    };

    return displayCounter;
}

const toggle = toggler(1, 2, 3);