var myobj = (function() { 
    var selected = '';
    var elemId = '';
    return {
        get_selected : function() { return selected; },
        set_selected : function(val) { selected = val; },
        
        get_elemId : function() { return elemId; },
        set_elemId : function(val) { elemId = val; },
    };
})();

function manageVisibility(selectedAvatar) {
    const value = myobj.get_selected();
    const a = myobj.get_elemId()+'-description';
    // remove visibility from previous paragraph
    if(!a.startsWith('-') && a !== value+'-description') {
        document.getElementById(a).classList.remove('visible');
        document.getElementById(myobj.get_elemId()).classList.remove('selected-director');
    }
    if(document.getElementById(value+'-description').classList.length == 4) {
        document.getElementById(value+'-description').classList.remove('visible');
        selectedAvatar.classList.remove('selected-director');
    } else {
        document.getElementById(value+'-description').classList.add('visible');
        selectedAvatar.classList.add('selected-director');
        myobj.set_elemId(value);
    }
}




function manageVisibilityForMobile(selectedAvatar) {
    const value = myobj.get_selected();
    const a = myobj.get_elemId()+'-description-mobile';
    if(!a.startsWith('-') && a !== value+'-description-mobile') {
        document.getElementById(a).classList.remove('visible');
        document.getElementById(myobj.get_elemId()).classList.remove('selected-director');
    }
    if(document.getElementById(value+'-description-mobile').classList.length == 4) {
        document.getElementById(value+'-description-mobile').classList.remove('visible');
        selectedAvatar.classList.remove('selected-director');
    } else {
        document.getElementById(value+'-description-mobile').classList.add('visible');
        selectedAvatar.classList.add('selected-director');
        myobj.set_elemId(value);
    }
}

let isMobile = window.matchMedia('(max-width: 775px)').matches;

const chairman = document.getElementById("chairman");
chairman.addEventListener('click', function(e) {
    e.preventDefault();
    myobj.set_selected('chairman');
    if(isMobile) {
        console.log('mobile');
        manageVisibilityForMobile(chairman)
    } else {
        console.log('desktop')
        manageVisibility(chairman);
    }
});

const managing_director = document.getElementById("managing-director");
managing_director.addEventListener('click', function(e) {
    e.preventDefault();
    myobj.set_selected('managing-director');
    if(isMobile) {
        manageVisibilityForMobile(managing_director)
    } else {
        manageVisibility(managing_director);
    }
});


const vp_inter_business = document.getElementById("vp-inter-business");
vp_inter_business.addEventListener('click', function(e) {
    e.preventDefault();
    myobj.set_selected('vp-inter-business');
    if(isMobile) {
        manageVisibilityForMobile(vp_inter_business)
    } else {
        manageVisibility(vp_inter_business);
    }
});


const vp_business_dev = document.getElementById("vp-business-dev");
vp_business_dev.addEventListener('click', function(e) {
    e.preventDefault();
    myobj.set_selected('vp-business-dev');
    if(isMobile) {
        manageVisibilityForMobile(vp_business_dev)
    } else {
        manageVisibility(vp_business_dev);
    }
});


function closeMobileMenu() {
    let hamburger = document.querySelector('.hamburger');
    let menuOverlay = document.querySelector('.mobile-menu-overlay');
    hamburger.classList.remove('isMenuActive');
    menuOverlay.classList.remove('isMenuOverlayActive');  
}
