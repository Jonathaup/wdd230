const currentDateSpan = document.querySelector("#Date");

const now = new Date();
currentDateSpan.textContent = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "full",
}).format(now);


/* hamburger toggle menu */
function toggleMenu() {
  document.getElementsByClassName("navigate")[0].classList.toggle("respond");
}

/* last modified */
let nd = new Date();

document.getElementById("currentYear").textContent = nd.getFullYear();

document.querySelector("#modDate").textContent = document.lastModified;