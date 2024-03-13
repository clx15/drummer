document.addEventListener("keydown", function(event) {
    switch (event.key) {
        case "j":
            crash();
            break;
        case "k":
            kick();
            break;
        case "l":
            snare();
            break;
        case "w":
            tom1();
            break;
        case "a":
            tom2();
            break;
        case "s":
            tom3();
            break;
        case "d":
            tom4();
            break;
    }
});

function crash(){
const audio = new Audio ("./sounds/crash.mp3");
audio.play();
let buttz = document.getElementById("crashbutton");
    buttz.classList.add("flash");
    setTimeout(() => buttz.classList.remove("flash"), 100);
}


function kick(){
const audio = new Audio ("./sounds/kick-bass.mp3");
audio.play();
let buttz = document.getElementById("kickbutton");
    buttz.classList.add("flash");
    setTimeout(() => buttz.classList.remove("flash"), 100);
}


function snare(){
const audio = new Audio ("./sounds/snare.mp3");
audio.play();
let buttz = document.getElementById("snarebutton");
    buttz.classList.add("flash");
    setTimeout(() => buttz.classList.remove("flash"), 100);
}


function tom1(){
const audio = new Audio ("./sounds/tom-1.mp3");
audio.play();
let buttz = document.getElementById("tom1button");
    buttz.classList.add("flash");
    setTimeout(() => buttz.classList.remove("flash"), 100);
}


function tom2(){
const audio = new Audio ("./sounds/tom-2.mp3");
audio.play();
let buttz = document.getElementById("tom2button");
    buttz.classList.add("flash");
    setTimeout(() => buttz.classList.remove("flash"), 100);
}

function tom3(){
const audio = new Audio ("./sounds/tom-3.mp3");
audio.play();
let buttz = document.getElementById("tom3button");
    buttz.classList.add("flash");
    setTimeout(() => buttz.classList.remove("flash"), 100);
}

function tom4(){
const audio = new Audio ("./sounds/tom-4.mp3");
audio.play();
let buttz = document.getElementById("tom4button");
    buttz.classList.add("flash");
    setTimeout(() => buttz.classList.remove("flash"), 100);
}