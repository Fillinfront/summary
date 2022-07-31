const burgerList = document.querySelector('.burger-list');
const body = document.querySelector('body');

function burgerMenu() {
    burgerList.classList.toggle('hide');
    body.classList.toggle('scroll');
}