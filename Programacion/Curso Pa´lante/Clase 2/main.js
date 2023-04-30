const menu = document.querySelector('.menu');
const lista = document.querySelector('.listamenu');



menu.addEventListener('click', () => {

    lista.classList.toggle('activado');
});