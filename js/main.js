window.onload = function() {
  var scrollbarPosition = $("#navbar").position().top;

  $(document).on("scroll", function() {

    var windowPosition = $(document).scrollTop();
        
    if (windowPosition >= scrollbarPosition) {
      $("#navbar").addClass("sticky");
    }
    else{
      $("#navbar").removeClass("sticky");
    }

  });


  function close_all_but(div_id) {
    _.each(profile_divs, function(element){
      if (div_id != element) {
        $(element).slideUp("slow");
      } else {
        $(element).slideDown("slow");
      }
    });
  }

  function close(div_id) {
    $(div_id).slideUp("slow");
  }

  var profile_divs=new Array("#neil-profile","#luke-profile","#joel-profile", "#sadiq-profile","#bruno-profile","#mathieu-profile","#andres-profile","#sophie-profile","#nina-profile","#lisa-profile","#daniel-profile","#sebastian-profile","#tony-profile","#julia-profile","#ellie-profile","#rabia-profile","#alex-profile","#joanna-profile","#michael-profile","#jarkyn-profile");

  $('#neil-portrait').mouseenter(function() {
    close_all_but('#neil-profile');
  });
  

  $('#luke-portrait').mouseenter(function() {
    close_all_but('#luke-profile');
  });
 

  $('#joel-portrait').mouseenter(function() {
    close_all_but('#joel-profile');
  });
  

  $('#sadiq-portrait').mouseenter(function() {
    close_all_but('#sadiq-profile');
  });
 

  $('#bruno-portrait').mouseenter(function() {
    close_all_but('#bruno-profile');
  });
 

  $('#mathieu-portrait').mouseenter(function() {
    close_all_but('#mathieu-profile');
  });
  

  $('#andres-portrait').mouseenter(function() {
    close_all_but('#andres-profile');
  });
  
  $('#sophie-portrait').mouseenter(function() {
    close_all_but('#sophie-profile');
  });
 

  $('#nina-portrait').mouseenter(function() {
    close_all_but('#nina-profile');
  });
 

  $('#lisa-portrait').mouseenter(function() {
    close_all_but('#lisa-profile');
  });
 
  $('#daniel-portrait').mouseenter(function() {
    close_all_but('#daniel-profile');
  });
  

  $('#sebastian-portrait').mouseenter(function() {
    close_all_but('#sebastian-profile');
  });
  

  $('#tony-portrait').mouseenter(function() {
    close_all_but('#tony-profile');
  });
 

  $('#julia-portrait').mouseenter(function() {
    close_all_but('#julia-profile');
  });
  

  $('#ellie-portrait').mouseenter(function() {
    close_all_but('#ellie-profile');
  });

  $('#rabia-portrait').mouseenter(function() {
    close_all_but('#rabia-profile');
  });
 
 $('#alex-portrait').mouseenter(function() {
   close_all_but('#alex-profile');
 });
 

 $('#joanna-portrait').mouseenter(function() {
   close_all_but('#joanna-profile');
 });
 

 $('#michael-portrait').mouseenter(function() {
   close_all_but('#michael-profile');
 });

 $('#jarkyn-portrait').mouseenter(function() {
   close_all_but('#jarkyn-profile');
 });

};
