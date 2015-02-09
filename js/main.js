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


  $('#nav-icon').on('click', function(e){
    e.preventDefault();
    $('nav ul li').slideToggle();
    console.log("working");
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

  var profile_divs=new Array("#neil-profile","#luke-profile","#joel-profile", "#sadiq-profile","#bruno-profile","#mathieu-profile","#andres-profile","#sophie-profile","#nina-profile","#lisa-profile","#daniel-profile","#sebastian-profile","#tony-profile","#julia-profile","#ellie-profile","#rabea-profile","#alex-profile","#joanna-profile","#michael-profile","#jarkyn-profile");

  $('#neil-portrait').mouseenter(function() {
    close_all_but('#neil-profile');
  });
  $('#neil-portrait').mouseleave(function() {
    close('#neil-profile');
  });
  

  $('#luke-portrait').mouseenter(function() {
    close_all_but('#luke-profile');
  });
  $('#luke-portrait').mouseleave(function() {
    close('#luke-profile');
  });
 

  $('#joel-portrait').mouseenter(function() {
    close_all_but('#joel-profile');
  });
  $('#joel-portrait').mouseleave(function() {
    close('#joel-profile');
  });
  

  $('#sadiq-portrait').mouseenter(function() {
    close_all_but('#sadiq-profile');
  });
  $('#sadiq-portrait').mouseleave(function() {
    close('#sadiq-profile');
  });
 

  $('#bruno-portrait').mouseenter(function() {
    close_all_but('#bruno-profile');
  });
  $('#bruno-portrait').mouseleave(function() {
    close('#bruno-profile');
  });
 

  $('#mathieu-portrait').mouseenter(function() {
    close_all_but('#mathieu-profile');
  });
  $('#mathieu-portrait').mouseleave(function() {
    close('#mathieu-profile');
  });
  

  $('#andres-portrait').mouseenter(function() {
    close_all_but('#andres-profile');
  });
  $('#andres-portrait').mouseleave(function() {
    close('#andres-profile');
  });
  
  $('#sophie-portrait').mouseenter(function() {
    close_all_but('#sophie-profile');
  });
  $('#sophie-portrait').mouseleave(function() {
    close('#sophie-profile');
  });
 

  $('#nina-portrait').mouseenter(function() {
    close_all_but('#nina-profile');
  });
  $('#nina-portrait').mouseleave(function() {
    close('#nina-profile');
  });
 

  $('#lisa-portrait').mouseenter(function() {
    close_all_but('#lisa-profile');
  });
  $('#lisa-portrait').mouseleave(function() {
    close('#lisa-profile');
  });
 
  $('#daniel-portrait').mouseenter(function() {
    close_all_but('#daniel-profile');
  });
  $('#daniel-portrait').mouseleave(function() {
    close('#daniel-profile');
  });
  

  $('#sebastian-portrait').mouseenter(function() {
    close_all_but('#sebastian-profile');
  });
  $('#sebastian-portrait').mouseleave(function() {
    close('#sebastian-profile');
  });
  

  $('#tony-portrait').mouseenter(function() {
    close_all_but('#tony-profile');
  });
  $('#tony-portrait').mouseleave(function() {
    close('#tony-profile');
  });
 

  $('#julia-portrait').mouseenter(function() {
    close_all_but('#julia-profile');
  });
  $('#julia-portrait').mouseleave(function() {
    close('#julia-profile');
  });
  

  $('#ellie-portrait').mouseenter(function() {
    close_all_but('#ellie-profile');
  });
  $('#ellie-portrait').mouseleave(function() {
    close('#ellie-profile');
  });

  $('#rabea-portrait').mouseenter(function() {
    close_all_but('#rabea-profile');
  });
  $('#rabea-portrait').mouseleave(function() {
    close('#rabea-profile');
  });
 
 $('#alex-portrait').mouseenter(function() {
   close_all_but('#alex-profile');
 });
 $('#alex-portrait').mouseleave(function() {
   close('#alex-profile');
 });
 

 $('#joanna-portrait').mouseenter(function() {
   close_all_but('#joanna-profile');
 });
 $('#joanna-portrait').mouseleave(function() {
   close('#joanna-profile');
 });
 

 $('#michael-portrait').mouseenter(function() {
   close_all_but('#michael-profile');
 });
 $('#michael-portrait').mouseleave(function() {
   close('#michael-profile');
 });

 $('#jarkyn-portrait').mouseenter(function() {
   close_all_but('#jarkyn-profile');
 });

};
