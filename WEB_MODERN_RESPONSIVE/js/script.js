
window.onscroll = function() {
    let position = window.pageYOffset || document.documentElement.scrollTop;
    let element1 = document.querySelector('.banner__icon:nth-child(1)');
    let element2 = document.querySelector('.banner__icon-fire');

    element1.style.bottom = position * .05 + 'px';
    element2.style.top = position * .1 + 'px';
}



// Controlar menu
document.getElementById('icon_menu').addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('show_menu')
})