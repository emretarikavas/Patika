const name = prompt("Adınızı Giriniz");
const myName = document.querySelector("#myName");
const myClock = document.querySelector("#myClock");

myName.innerHTML = name;

function clock() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let d = new Date();
  let days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  myClock.innerHTML = `${hours}:${minutes}:${seconds} ${days[d.getDay()]}`;
}

setInterval(clock, 1000);
