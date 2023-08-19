
// All variable
let hours = 0;
let minutes = 0;
let seconds = 0;
let append_tens = document.getElementById("seconds");
let append_seconds = document.getElementById("minutes");
let append_minutes = document.getElementById("hours")
let button_start = document.getElementById("Button-start");
let button_stop = document.getElementById("Button-stop");
let button_reset = document.getElementById("Button-reset");
let interval;
let text_box = document.getElementById("toggle-text");
let seconds_display = document.getElementById("seconds");
let colon2 = document.getElementById("colon2");
let toggle_sw = document.getElementById("toggle-switch");

// All funtions

// Button funtions

button_start.onclick = function () {
    clearInterval(interval);
    interval = setInterval(startTimer, 1000);
}

button_stop.onclick = function () {
    clearInterval(interval);
}

button_reset.onclick = function () {
    clearInterval(interval);
    seconds = "00";
    minutes = "00";
    hours = "00";
    append_tens.innerHTML = seconds;
    append_seconds.innerHTML = minutes;
    append_minutes.innerHTML = hours;
}

// time conditions

function startTimer() {
    seconds++;
    if (seconds <= 9) {
        append_tens.innerHTML = "0" + seconds;
    }
    if (seconds >= 10) {
        append_tens.innerHTML = seconds;
    }
    if (seconds > 59) {
        minutes++;
        append_seconds.innerHTML = "0" + minutes;
        seconds = 0;
        append_tens.innerHTML = "0" + 0;

    }
    if (minutes > 9) {
        append_seconds.innerHTML = minutes;
    }
    if (minutes > 59) {
        hours++;
        append_minutes.innerHTML = "0" + hours;
        minutes = 0;
        append_seconds.innerHTML = "0" + 0;
    }
}

// toggle_obj = {
//     seconds:function toggle() {
//     text_box.innerHTML = "show seconds";
//     seconds_display.style.display = "none";
//     colon2.style.display = "none";
//     }
// }

seconds_display.style.display = "block";

toggle_sw.onclick = function () {
    if ((seconds_display.style.display === "block")) {
        text_box.innerHTML = "Show Seconds";
        seconds_display.style.display = "none";
        colon2.style.display = "none";
    }
    else if (seconds_display.style.display === "none") {
        text_box.innerHTML = "Hide Seconds";
        seconds_display.style.display = "block";
        colon2.style.display = "block";
    }
}

// Change theme
let indexTheme = 0;
let styleName = ["style.css", "pink.css"];
let prevButton = document.getElementsByClassName("prev");
let nextButton = document.getElementsByClassName("next");

let plusTheme = (n) => {
    nextTheme(indexTheme += n);
}

let nextTheme = (n) => {

    if (n > 1) {
        n = 0;
    } else if (n < 0) {
        n = styleName.length - 1;
    }
    document.getElementsByClassName("linkStyle")[0].href = styleName[n];

}
nextTheme(indexTheme);

