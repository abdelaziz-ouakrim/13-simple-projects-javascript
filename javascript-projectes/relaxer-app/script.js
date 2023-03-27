const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

circleAnimation();

function circleAnimation() {
  text.innerText = "breathe in ";
  container.className = "container grow";
  setTimeout(() => {
    text.innerText = "hold";
    setTimeout(() => {
      text.innerText = "breathe out ";
      container.className = "container shrinks";
    }, holdTime);
  }, breatheTime);
}
setInterval(circleAnimation, totalTime);
