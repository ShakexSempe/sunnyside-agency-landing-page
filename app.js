// nav menu toggle
// select toggle element and links
const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.aside-links');
const headerLinks = document.querySelectorAll("header a");
console.log(headerLinks);
// toggle event listener to display menu on click of toggle element by adding class active
toggle.addEventListener("click", () => {
    nav.classList.toggle('active');
});

headerLinks.forEach(link => {
    link.addEventListener('click', () => {
    nav.classList.remove("active");
    })
})

// Date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
