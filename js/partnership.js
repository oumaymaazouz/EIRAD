$(".expand-button-ups").on("click", function () {
    $(".special-text-ups").toggleClass("-expanded");
  
    if ($(".special-text-ups").hasClass("-expanded")) {
      $(".expand-button-ups").html('<i class="fa fa-minus" aria-hidden="true"></i>');
    } else {
      $(".expand-button-ups").html('<i class="fa fa-plus" aria-hidden="true"></i>');
    }
  });


  $(".expand-button-keir").on("click", function () {
    $(".special-text-keir").toggleClass("-expanded");
  
    if ($(".special-text-keir").hasClass("-expanded")) {
      $(".expand-button-keir").html('<i class="fa fa-minus" aria-hidden="true"></i>');
    } else {
      $(".expand-button-keir").html('<i class="fa fa-plus" aria-hidden="true"></i>');
    }
  });
  
  $(".expand-button-sas").on("click", function () {
    $(".special-text-sas").toggleClass("-expanded");
  
    if ($(".special-text-sas").hasClass("-expanded")) {
      $(".expand-button-sas").html('<i class="fa fa-minus" aria-hidden="true"></i>');
    } else {
      $(".expand-button-sas").html('<i class="fa fa-plus" aria-hidden="true"></i>');
    }
  });



let btn_ngmsa = document.querySelector('.read-more-ngmsa');
let card_content_hidden_ngmsa = document.querySelector('.card-content-hidden-ngmsa');

btn_ngmsa.addEventListener('click', function() {
    if (btn_ngmsa.innerHTML === "Read more") {
      btn_ngmsa.innerHTML = "Read less";
    } else {
      btn_ngmsa.innerHTML = "Read more";
    }
    card_content_hidden_ngmsa.classList.toggle('isHiddenContentVisible');
});
  

let btn_eirad_travel = document.querySelector('.rm-eirad-travel');
let card_content_hidden_eirad = document.querySelector('.card-content-hidden-eirad-travel');

btn_eirad_travel.addEventListener('click', function() {
    if (btn_eirad_travel.innerHTML === "Read more") {
      btn_eirad_travel.innerHTML = "Read less";
    } else {
      btn_eirad_travel.innerHTML = "Read more";
    }
    card_content_hidden_eirad.classList.toggle('isHiddenContentVisible');
});



let btn_ups = document.querySelector('.read-more-ups');
let card_content_hidden_ups = document.querySelector('.card-content-hidden-ups');

btn_ups.addEventListener('click', function() {
    if (btn_ups.innerHTML === "Read more") {
      btn_ups.innerHTML = "Read less";
    } else {
      btn_ups.innerHTML = "Read more";
    }
    card_content_hidden_ups.classList.toggle('isHiddenContentVisible');
});


let btn_keir = document.querySelector('.read-more-keir');
let card_content_hidden_keir = document.querySelector('.card-content-hidden-keir');

btn_keir.addEventListener('click', function() {
    if (btn_keir.innerHTML === "Read more") {
      btn_keir.innerHTML = "Read less";
    } else {
      btn_keir.innerHTML = "Read more";
    }
    card_content_hidden_keir.classList.toggle('isHiddenContentVisible');
});
  
let btn_sas = document.querySelector('.read-more-sas');
let card_content_hidden_sas = document.querySelector('.card-content-hidden-sas');

btn_sas.addEventListener('click', function() {
    if (btn_sas.innerHTML === "Read more") {
      btn_sas.innerHTML = "Read less";
    } else {
      btn_sas.innerHTML = "Read more";
    }
    card_content_hidden_sas.classList.toggle('isHiddenContentVisible');
});
