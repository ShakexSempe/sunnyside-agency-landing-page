// nav menu toggle
// select toggle element and links
const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.aside-links');
const headerLinks = document.querySelectorAll("header a");
const container = document.querySelector('.container');
console.log(headerLinks);
// toggle event listener to display menu on click of toggle element by adding class active
toggle.addEventListener("click", () => {
    nav.classList.toggle('active');
    container.classList.toggle("overlay");
});

headerLinks.forEach(link => {
    link.addEventListener('click', () => {
    nav.classList.remove("active");
    container.classList.remove("overlay");
    })
})

// Date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
