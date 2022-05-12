const currentDateSpan = document.querySelector("#Date");

const now = new Date();
currentDateSpan.textContent = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "full",
}).format(now);


/* hamburger toggle menu */
const hambutton = document.querySelector('.hamburger');
const mainnav = document.querySelector('.Navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('respond')}, false);

window.onresize = () => {if (window.innerWidth > 960) mainnav.classList.remove('respond')};


/* last modified */
let nd = new Date();

document.getElementById("currentYear").textContent = nd.getFullYear();

document.querySelector("#modDate").textContent = document.lastModified;