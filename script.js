let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;

        if (expression === "") return;

        let result = eval(expression);
        display.value = result;

        addHistory(expression + " = " + result);
    } catch {
        display.value = "Error";
    }
}

function addHistory(item) {
    let li = document.createElement("li");
    li.innerText = item;
    historyList.prepend(li);
}

function toggleHistory() {
    let historyBox = document.getElementById("historyBox");

    if (historyBox.style.display === "block") {
        historyBox.style.display = "none";
    } else {
        historyBox.style.display = "block";
    }
}

function clearHistory() {
    historyList.innerHTML = "";
}

function minimizeCalc() {
    let body = document.getElementById("calcBody");

    if (body.style.display === "none") {
        body.style.display = "block";
    } else {
        body.style.display = "none";
    }
}

function closeCalc() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }

    document.getElementById("calculator").style.display = "none";
    document.getElementById("openBtn").style.display = "block";
}

function openCalc() {
    document.getElementById("calculator").style.display = "block";
    document.getElementById("openBtn").style.display = "none";
}

function fullScreenCalc() {
    let calc = document.getElementById("calculator");

    if (!document.fullscreenElement) {
        calc.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}


document.addEventListener("keydown", function(event) {
    let key = event.key;

    if ((key >= "0" && key <= "9") || key === "." || key === "+" || key === "-" || key === "*" || key === "/") {
        appendValue(key);
    } 
    else if (key === "Enter") {
        calculate();
    } 
    else if (key === "Backspace") {
        deleteLast();
    } 
    else if (key === "Escape") {
        clearDisplay();
    }
});
document.addEventListener("fullscreenchange", function() {
    let calc = document.getElementById("calculator");
    let openBtn = document.getElementById("openBtn");

    if (calc.style.display !== "none") {
        calc.style.display = "block";
        openBtn.style.display = "none";
    }
});
