const toggle = document.getElementById('toggle');
const nav = document.querySelector('.mobile-links');
console.log(nav);

toggle.addEventListener("click", () => {
    nav.classList.toggle('active');
})