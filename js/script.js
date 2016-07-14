jQuery(document).ready(function () {
  jQuery( "#page-content-wrapper" ).empty();
  jQuery("#page-content-wrapper").load( "index.html");
})
jQuery(document).on('click','#home',function(){
          jQuery( "#page-content-wrapper" ).empty();
          jQuery("#page-content-wrapper").load( "index.html");
  });

  jQuery(document).on('click','#about',function(){

          jQuery( "#page-content-wrapper" ).empty();
          jQuery( "#page-content-wrapper" ).load( "about.html");

  });

  jQuery(document).on('click','#contact',function(){
          jQuery( "#page-content-wrapper" ).empty();
          jQuery( "#page-content-wrapper" ).load( "contact.html");
  });
  jQuery(document).on('click','#services',function(){
      jQuery( "#page-content-wrapper" ).empty();
      jQuery("#page-content-wrapper").load("services.html");
  })

// function index()
// {
//    window.location.href = `file://${__dirname}/home.html`;
// }
// function about()
// {
//    window.location.href = `file://${__dirname}/about.html`;
// }function services()
// {
//    window.location.href = `file://${__dirname}/services.html`;
// }function contact()
// {
//    window.location.href = `file://${__dirname}/contact.html`;
// }


// jQuery(document).on('click','#about',function(){
//          jQuery( "#wrapper" ).load( "./about.html");
//  });
//  jQuery(document).on('click','#services',function(){
//           jQuery( "#wrapper" ).load( "./services.html");
//   });
//   jQuery(document).on('click','#contact',function(){
//            jQuery( "#wrapper" ).load( "./contact.html");
//    });
//    jQuery(document).on('click','#home',function(){
//             jQuery( "#wrapper" ).load( "./index.html");
//     });
