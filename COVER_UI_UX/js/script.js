window.onscroll = function() {

    let scroll = document.documentElement.scrollTop;
    let header = document.getElementById('header');

    if (scroll > 20) {
        header.classList.add('header_sticky');
    } else {
        header.classList.remove('header_sticky')
    }

}