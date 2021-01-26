const chairman = document.getElementById("chairman");


chairman.addEventListener('click', function() {
    if(document.getElementById('chairman-description').classList.length == 4) {
        document.getElementById('chairman-description').classList.remove('visible');
        chairman.classList.remove('selected-director');
    } else {
        document.getElementById('chairman-description').classList.add('visible');
        chairman.classList.add('selected-director');
    }
    
});