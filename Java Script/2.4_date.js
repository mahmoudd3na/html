const d = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const week = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
function giveMeDate() {
  let today= week[d.getDay()];
  let month= months[d.getMonth()];
  return `Today is ${today} the ${d.getDate()} of ${month} ${d.getFullYear()}`;
}

console.log(giveMeDate());
