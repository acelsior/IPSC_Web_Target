/** @type HTMLCanvasElement*/
const canvas = document.getElementById("canvas");
const canvas_ctx = canvas.getContext("2d");
const setting_page = document.getElementsByClassName("setting_page")[0];
const abort_area = document.getElementsByClassName("abort_area")[0];
const setting_form = document.forms["setting"];

var random_min = 5000;
var random_max = 10000;
var globalInterval = -1;

var circle_radiu_random_min = 10;
var circle_radiu_random_max = 10;

function startTraining() {
    if (globalInterval !== -1) return;
    drawRandomCircle(true);
    globalInterval = setInterval(() => {
        drawRandomCircle(true);
    }, Math.random() * (random_max - random_min) + random_min);
}

function stopTraining() {
    clearInterval(globalInterval);
    globalInterval = -1;
}

function drawRandomCircle(needsClear) {
    if (needsClear) {
        canvas_ctx.fillStyle = "#FFF";
        canvas_ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    canvas_ctx.beginPath();
    canvas_ctx.arc(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * (circle_radiu_random_max - circle_radiu_random_min) +
            circle_radiu_random_min,
        0,
        2 * Math.PI
    );
    canvas_ctx.stroke();
}

function goToSetting() {
    setting_page.classList.toggle("setting_page_active");
    abort_area.classList.toggle("abort_area_active");
}

function applySetting() {
    event.preventDefault();
    random_min = setting_form["r_min"].value;
    random_max = setting_form["r_max"].value;
    circle_radiu_random_min = setting_form["rr_min"].value;
    circle_radiu_random_max = setting_form["rr_max"].value;
}
