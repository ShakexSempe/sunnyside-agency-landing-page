// nav menu toggle
// select toggle element and links
const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.aside-links');
// toggle event listener to display menu on click of toggle element by adding class active
toggle.addEventListener("click", () => {
    nav.classList.toggle('active');
})

// Date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
