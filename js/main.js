const header = document.querySelector('header');
const nav = document.querySelector('.nav');
const navlist = document.querySelector('.navlist');
const menu = document.querySelector('.menu');
const menu_box = document.querySelector('.menu-box');
const x = document.querySelector('.x');
const navitems = document.querySelectorAll('.nav-item');

menu_box.addEventListener('click', () => {
    menu.classList.toggle('hide-menu');
    x.classList.toggle('show-x');
    nav.classList.toggle('show-navlist');
    if (nav.classList.contains('show-navlist')) {
        header.style.gap = '81px';
    }else {
        header.style.gap = '0px';
    }
    navitems.forEach(li => {
        li.classList.replace('nav-item', 'cap');
    });


})