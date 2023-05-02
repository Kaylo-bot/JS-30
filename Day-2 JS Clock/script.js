const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');


function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minssDegrees = ((mins / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minssDegrees}deg)`;

    const hours = now.getHours();
    const hourssDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourssDegrees}deg)`;

    console.log(seconds);
}

setInterval(setDate,1000);