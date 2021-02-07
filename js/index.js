let menu_about_item = document.getElementById('menu-item-about');
let sub_menu_about = document.getElementById('sub-menu-list-about');
let about_text = document.querySelector('.about-text');
menu_about_item.addEventListener('click', function() {
   sub_menu_about.classList.toggle('isVisible');
   about_text.classList.toggle('underlined')
});

let menu_about_item_mobile = document.getElementById('menu-item-about-for-mobile');
let sub_menu_about_mobile = document.getElementById('sub-menu-list-about-for-mobile');
menu_about_item_mobile.addEventListener('click', function() {
   sub_menu_about_mobile.classList.toggle('isVisibleInMobile');
});


let hamburger = document.querySelector('.hamburger');
let menuOverlay = document.querySelector('.mobile-menu-overlay');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('isMenuActive');
    menuOverlay.classList.toggle('isMenuOverlayActive');  
});
  
