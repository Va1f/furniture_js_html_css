const catalog_nav = document.getElementById('catalog-nav-menu');
const nav_catalog_btn = document.getElementById('nav-catalog');
const item_nav_catalog = document.getElementById('catalog-item-nav');
const body_ = document.querySelector('.body');
const img_switch_first = document.getElementById('item-switching-first');
const img_switch_second = document.getElementById('item-switching-second');
const img_switch_third = document.getElementById('item-switching-third');
const btn_lan = document.getElementById('choose-lan');
const choose_lan = document.getElementById('container-choose-lan');
const UA_LAN = document.getElementById('item-lan-second');
const EN_LAN = document.getElementById('item-lan-third');
const RU_LAN = document.getElementById('item-lan-first');

UA_LAN.addEventListener('click',() => {
    document.getElementById('lenguage-text').textContent = 'UA';
    window.location.href = 'mainua.html'
})

RU_LAN.addEventListener('click',() => {
    document.getElementById('lenguage-text').textContent = 'RU';
    window.location.href = 'mainru.html'
})

EN_LAN.addEventListener('click',() => {
    document.getElementById('lenguage-text').textContent = 'EN';
    window.location.href = 'mainen.html'
})

btn_lan.addEventListener('mouseover',()  => {
    choose_lan.classList.add('active');
})

choose_lan.addEventListener('mouseleave',()  => {
    choose_lan.classList.remove('active');
})

catalog_nav.addEventListener('mouseover',()  => {
    nav_catalog_btn.classList.add('active');
})

nav_catalog_btn.addEventListener('mouseleave',()  => {
    nav_catalog_btn.classList.remove('active');
})

img_switch_first.addEventListener('click',() => {
    document.getElementById('item-switching-first').src="img/orange-punkt.png";
    document.getElementById('item-switching-second').src="img/white-punkt.png";
    document.getElementById('item-switching-third').src="img/white-punkt.png";
    document.getElementById('photo-mebel').src="img/photo-mebel.png";
})

img_switch_second.addEventListener('click',() => {
    document.getElementById('item-switching-second').src="img/orange-punkt.png";
    document.getElementById('item-switching-first').src="img/white-punkt.png";
    document.getElementById('item-switching-third').src="img/white-punkt.png";
    document.getElementById('photo-mebel').src="img/mebel-second.jpg";
})

img_switch_third.addEventListener('click',() => {
    document.getElementById('item-switching-third').src="img/orange-punkt.png";
    document.getElementById('item-switching-first').src="img/white-punkt.png";
    document.getElementById('item-switching-second').src="img/white-punkt.png";
    document.getElementById('photo-mebel').src="img/mebel-third.jpg";
})






