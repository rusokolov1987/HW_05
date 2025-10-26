const trafficLight = document.querySelector('#trafficLight');
const greenLamp = document.querySelector('#green');
const yellowLamp = document.querySelector('#yellow');
const redLamp = document.querySelector('#red');

function makeGreen() {
    yellowLamp.style.background = ('black');
    redLamp.style.background = ('black');
    greenLamp.style.background = ('green');
    trafficLight.removeEventListener('click', makeGreen);
    trafficLight.addEventListener('click', makeYellow);
}

function makeYellow() {
    redLamp.style.background = ('black');
    greenLamp.style.background = ('black');
    yellowLamp.style.background = ('yellow');
    trafficLight.removeEventListener('click', makeYellow);
    trafficLight.addEventListener('click', makeRed);
}

function makeRed() {
    greenLamp.style.background = ('black');
    yellowLamp.style.background = ('black');
    redLamp.style.background = ('red');
    trafficLight.removeEventListener('click', makeRed);
    trafficLight.addEventListener('click', makeGreen);
}

trafficLight.addEventListener('click', makeGreen);


