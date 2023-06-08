let date = new Date();

let dd = date.getDate();
let mm = date.getMonth() + 1;
let yyyy = date.getFullYear();

let today = dd + "/" + mm + "/" + yyyy;

document.getElementById("status").textContent = today;
document.getElementById("year").textContent = yyyy;
