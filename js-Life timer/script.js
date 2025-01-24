const buttons = document.getElementById("btn");
const initial = document.getElementsByClassName("initial")[0];
const final = document.getElementsByClassName("final")[0];
const Dob = document.getElementById("date");
let year = document.querySelector("#year");
let month = document.querySelector("#month");
let day = document.querySelector("#day");
let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");

buttons.addEventListener("click", () => {
  let date = Dob.value;
  console.log("Date selected : ", date);
  if (date == "") {
    alert("Please Enter Your Date of Birth");
  } else {
    initial.classList.add("hide");
    final.classList.remove("hide");
    setInterval(() => updateAge(), 1000);
  }
});

const updateAge = () => {
  const currentDate = new Date();
  const dateDiff = currentDate - new Date(Dob.value);

  //ab sb nikalo
  const year1 = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
  const month1 = Math.floor((dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12);
  const day1 = Math.floor((dateDiff / (1000 * 60 * 60 * 24)) % 30);
  const hour1 = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
  const minute1 = Math.floor(dateDiff / (1000 * 60)) % 60;
  const second1 = Math.floor(dateDiff / 1000) % 60;

  year.innerText = year1;
  month.innerText = month1;
  day.innerText = day1;
  hour.innerText = hour1;
  minute.innerText = minute1;
  second.innerText = second1;
};
