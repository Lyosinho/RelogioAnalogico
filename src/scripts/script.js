const hoursHand = document.getElementById('hours-hand');
const minutesHand = document.getElementById('minutes-hand');
const secondsHand = document.getElementById('seconds-hand');

function clockTick() {
    const date = new Date();
    const seconds = date.getSeconds() / 60;
    const minutes = (seconds + date.getMinutes()) / 60;
    const hours = (minutes + date.getHours()) / 12;

    rotateClockHands(hoursHand, hours); 
    rotateClockHands(minutesHand, minutes);
    rotateClockHands(secondsHand, seconds);
}
function rotateClockHands(element, rotation) {
    element.style.transform = `translate(-50%, -100%) rotate(${rotation * 360}deg)`;
}
setInterval(clockTick, 1000);
clockTick();
