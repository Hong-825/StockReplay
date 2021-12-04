const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navi_menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
});

