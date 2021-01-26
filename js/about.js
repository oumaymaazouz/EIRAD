
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
    // remove visibility from previous paragraph
    if(myobj.get_elemId() !== '' && myobj.get_elemId() !== value+'-description') {
        document.getElementById(myobj.get_elemId()).classList.remove('visible');
        selectedAvatar.classList.remove('selected-director');
    }
    if(document.getElementById(value+'-description').classList.length == 4) {
        document.getElementById(value+'-description').classList.remove('visible');
        selectedAvatar.classList.remove('selected-director');
    } else {
        document.getElementById(value+'-description').classList.add('visible');
        selectedAvatar.classList.add('selected-director');
        myobj.set_elemId(value+'-description');
    }
}

const chairman = document.getElementById("chairman");
chairman.addEventListener('click', function() {
    myobj.set_selected('chairman');
    manageVisibility(chairman);
});

const managing_director = document.getElementById("managing-director");
managing_director.addEventListener('click', function() {
    myobj.set_selected('managing-director');
    manageVisibility(managing_director);
});


const vp_inter_business = document.getElementById("vp-inter-business");
vp_inter_business.addEventListener('click', function() {
    myobj.set_selected('vp-inter-business');
    manageVisibility(vp_inter_business);
});


const vp_business_dev = document.getElementById("vp-business-dev");
vp_business_dev.addEventListener('click', function() {
    myobj.set_selected('vp-business-dev');
    manageVisibility(vp_business_dev);
});



