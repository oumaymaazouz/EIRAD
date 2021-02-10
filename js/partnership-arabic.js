let btn_ngmsa = document.querySelector('.read-more-ngmsa');
let card_content_hidden_ngmsa = document.querySelector('.card-content-hidden-ngmsa');

btn_ngmsa.addEventListener('click', function() {
    if (btn_ngmsa.innerHTML === "المزيد") {
      btn_ngmsa.innerHTML = "إغلاق";
    } else {
      btn_ngmsa.innerHTML = "المزيد";
    }
    card_content_hidden_ngmsa.classList.toggle('isHiddenContentVisible');
});
  

let btn_eirad_travel = document.querySelector('.rm-eirad-travel');
let card_content_hidden_eirad = document.querySelector('.card-content-hidden-eirad-travel');

btn_eirad_travel.addEventListener('click', function() {
    if (btn_eirad_travel.innerHTML === "المزيد") {
      btn_eirad_travel.innerHTML = "إغلاق";
    } else {
      btn_eirad_travel.innerHTML = "المزيد";
    }
    card_content_hidden_eirad.classList.toggle('isHiddenContentVisible');
});



let btn_ups = document.querySelector('.read-more-ups');
let card_content_hidden_ups = document.querySelector('.card-content-hidden-ups');

btn_ups.addEventListener('click', function() {
    if (btn_ups.innerHTML === "المزيد") {
      btn_ups.innerHTML = "إغلاق";
    } else {
      btn_ups.innerHTML = "المزيد";
    }
    card_content_hidden_ups.classList.toggle('isHiddenContentVisible');
});


let btn_keir = document.querySelector('.read-more-keir');
let card_content_hidden_keir = document.querySelector('.card-content-hidden-keir');

btn_keir.addEventListener('click', function() {
    if (btn_keir.innerHTML === "المزيد") {
      btn_keir.innerHTML = "إغلاق";
    } else {
      btn_keir.innerHTML = "المزيد";
    }
    card_content_hidden_keir.classList.toggle('isHiddenContentVisible');
});
  
let btn_sas = document.querySelector('.read-more-sas');
let card_content_hidden_sas = document.querySelector('.card-content-hidden-sas');

btn_sas.addEventListener('click', function() {
    if (btn_sas.innerHTML === "المزيد") {
      btn_sas.innerHTML = "إغلاق";
    } else {
      btn_sas.innerHTML = "المزيد";
    }
    card_content_hidden_sas.classList.toggle('isHiddenContentVisible');
});
