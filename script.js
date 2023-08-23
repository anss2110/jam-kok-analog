// let clockSound = new Audio(".\\resources\\clock-sound.mp3");

const time = document.querySelector(".hours");

for (let i = 1; i <= 60; i++) {
  if (i % 5 == 0) {
    time.innerHTML += "<div class='hour-number'><div>" + i / 5 + "</div></div>";
    let hours = document.getElementsByClassName("hour-number");
    hours[hours.length - 1].style.transform = `rotate(${i * 6}deg)`;
    hours[hours.length - 1].firstChild.style.transform = `rotate(${i * -6}deg)`;
  } else {
    time.innerHTML += "<div class='minute-bar'></div>";
    let bars = document.getElementsByClassName("minute-bar");
    bars[bars.length - 1].style.transform = `rotate(${i * 6}deg)`;
  }
}

setInterval(() => {
  const date = new Date();
  const hrTime = date.getHours();
  const minTime = date.getMinutes();
  const secTime = date.getSeconds() + date.getMilliseconds() / 1000;

  let handHr = document.getElementById("hand-hours");
  let handMin = document.getElementById("hand-minute");
  let handSec = document.getElementById("hand-second");

  const hRotation = 30 * hrTime + minTime / 2;
  const mRotation = 6 * minTime;
  const sRotation = 6 * secTime;

  handHr.style.transform = `rotate(${hRotation}deg)`;
  handMin.style.transform = `rotate(${mRotation}deg)`;
  handSec.style.transform = `rotate(${sRotation}deg)`;
  // clockSound.play();
}, 50);
