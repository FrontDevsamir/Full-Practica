

window.onscroll = function() {

    let scroll = document.documentElement.scrollTop;
    let header = document.getElementById('header');

    if (scroll > 20) {
        header.classList.add('nav_mod');
    } else {
        header.classList.remove('nav_mod')
    }

}


let menu = document.getElementById('header');
let nav = document.getElementById('nav');
let body = document.getElementById('container_all')

function mostrar_menu() {
    menu.classList.toggle('move_content');
    nav.classList.toggle('move_nav');
    body.classList.toggle('move_body');
}

document.getElementById('btn__menu').addEventListener('click', mostrar_menu);


window.addEventListener('resize', function() {
    if (window.innerWidth > 760) {
        menu.classList.remove('move_content');
        nav.classList.remove('move_nav');
        body.classList.remove('move_body');
    }
})