const inputBox = document.querySelector(".date");
inputBox.max = new Date().toISOString().split("T")[0];
const result = document.getElementById("result")


function calculateAge() {
  const birthDay = new Date(inputBox.value);

  const d1 = birthDay.getDate();
  const m1 = birthDay.getMonth() + 1;
  const y1 = birthDay.getFullYear();

  const today = new Date();

  const d2 = today.getDate();
  const m2 = today.getMonth() + 1;
  const y2 = today.getFullYear();

  let d3, m3, y3;

  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonths(y1,m1) + d2 - d1
  }
  if(m3 < 0) {
    m3 = 11;
    y3--;
  }
  result.innerHTML = `You are <span>${y3}</span> years , <span>${m3}</span> months and <span>${d3}</span> day old `
}

function getDaysInMonths(year, month) {
  return new Date(year, month, 0).getDate()
}