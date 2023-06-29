const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
const form = document.forms["google-sheet"];
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyVBnQRAiNkjz58yv7Y0sWZhsrq45J-9qPd4L0baKcqh5l9J2Zdv8cZ_cxP2J8RQ2-Z/exec";
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});
function handle() {
  location.assign("././payment.html");
}
function order(e) {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) }).then(
    (response) => location.assign("././success.html")
  );
}
