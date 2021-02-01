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