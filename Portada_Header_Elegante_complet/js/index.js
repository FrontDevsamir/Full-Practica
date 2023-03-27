

window.onscroll = function() {

    let scroll = document.documentElement.scrollTop;
    let header = document.getElementById('header');

    if (scroll > 20) {
        header.classList.add('nav_mod');
    } else {
        header.classList.remove('nav_mod')
    }

}


let header = document.getElementById('header');
let nav = document.getElementById('nav');
let container__all = document.getElementById('container__all')

function mostrar_menu() {
    header.classList.toggle('move__header')
    nav.classList.toggle('move__nav');
    container__all.classList.toggle('move__all');
}

document.getElementById('btn__menu').addEventListener('click', mostrar_menu);


window.addEventListener('resize', function() {
    if (window.innerWidth > 760) {
        header.classList.remove('move__header');
        nav.classList.remove('move__nav');
        container__all.classList.remove('move__all');
    }
})