// let clockSound = new Audio(".\\resources\\clock-sound.mp3");

setInterval(() => {
  const date = new Date();
  const hrTime = date.getHours();
  const minTime = date.getMinutes();
  const secTime = date.getSeconds() + date.getMilliseconds() / 1000;

  const hRotation = 30 * hrTime + minTime / 2;
  const mRotation = 6 * minTime;
  const sRotation = 6 * secTime;

  hour.style.transform = `rotate(${hRotation}deg)`;
  minute.style.transform = `rotate(${mRotation}deg)`;
  second.style.transform = `rotate(${sRotation}deg)`;
  // clockSound.play();
}, 50);
