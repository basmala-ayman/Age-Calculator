let days = "";
for (let i = 1; i <= 31; i++) {
  days += `<option id="${i}">${i}</option>`;
}

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
let showMonths = "";
for (let i = 0; i < 12; i++) {
  showMonths += `<option id="${months[i].toLowerCase()}">${months[i]}</option>`;
}

let years = "";
for (let i = 1990; i <= 2024; i++) {
  years += `<option id="${i}">${i}</option>`;
}

document.getElementById("days").innerHTML +=
  "<option>Select Day</option>" + days;
document.getElementById("months").innerHTML +=
  "<option>Select Month</option>" + showMonths;
document.getElementById("years").innerHTML +=
  "<option>Select Year</option>" + years;

function calcAge(date) {
  let birthDate = new Date(date);
  let today = new Date();

  let diffYears = today.getFullYear() - birthDate.getFullYear();
  let diffMonths = today.getMonth() - birthDate.getMonth();
  let diffDays = today.getDate() - birthDate.getDate();

  if (diffDays < 0) {
    console.log(diffDays);
    let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    diffDays += prevMonth.getDate();
    diffMonths--;
    console.log(diffDays);
  }

  if (diffMonths < 0) {
    diffYears--;
    diffMonths += 12;
  }

  return { diffYears, diffMonths, diffDays };
}

document.getElementById("calc").onclick = function () {
  document.getElementById("result").innerHTML = "";
  let day = document.getElementById("days").value;
  let month = document.getElementById("months").value;
  let year = document.getElementById("years").value;
  let error = "";
  if (day === "Select Day") error += "Invalid Day! ";
  if (month === "Select Month") error += "Invalid Month! ";
  if (year === "Select Year") error += "Invalid Year! ";
  if (error !== "") {
    document.getElementById("result").style.cssText =
      "display: block; background-color: rgba(160, 8, 8, 0.846)";
    document.getElementById("result").innerHTML =
      "Error: " + error + "Please, try again.";
    return;
  }
  console.log(month);
  month = months.indexOf(month);
  const today = new Date();
  const birthDate = new Date();
  birthDate.setFullYear(year, ++month, day);

  let difference = calcAge(birthDate);
  let result = `${difference.diffYears} Years, ${difference.diffMonths} Month/s and ${difference.diffDays} Day/s`;
  document.getElementById("result").style.cssText =
    "display: block; background-color: rgba(0, 139, 139, 0.9)";
  document.getElementById("result").innerHTML = "Your Age: " + result;
};