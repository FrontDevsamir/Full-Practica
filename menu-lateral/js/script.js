

const ICON_MENU = document.getElementById('icon_menu');
const ASIDE = document.getElementById('aside');
const BODY = document.getElementById('body');

ICON_MENU.addEventListener('click', () => {
    ASIDE.classList.toggle('aside_move');
    BODY.classList.toggle('body_move');
})



// ESCUCHAR EL EVENTO RESIZE
window.addEventListener('resize', () => {
    if (window.innerWidth < 760) {
        ASIDE.classList.add('aside_move');
        BODY.classList.add('body_move');
    } else {
        ASIDE.classList.remove('aside_move');
        BODY.classList.remove('body_move');
    }
})