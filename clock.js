const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date
    .getHours()
    .toString.padStart(2, "0")}:${date.getMinutes()}:${date.getSeconds()}`;
}

setInterval(getClock, 1000);
