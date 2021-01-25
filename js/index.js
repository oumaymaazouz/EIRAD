const leadership_anchor = document.getElementById("menu-item-leadership");


leadership_anchor.addEventListener('mouseover', function() {
    document.getElementById('sub-menu-list-about').classList.add('larger');
});

leadership_anchor.addEventListener('mouseleave', function() {
    document.getElementById('sub-menu-list-about').classList.remove('larger');
});


const leadership_anchor_mobile = document.getElementById("menu-item-leadership-for-mobile");


leadership_anchor_mobile.addEventListener('mouseover', function() {
    document.getElementById('sub-menu-list-about-for-mobile').classList.add('larger-mobile');
});

leadership_anchor_mobile.addEventListener('mouseleave', function() {
    document.getElementById('sub-menu-list-about-for-mobile').classList.remove('larger-mobile');
});

