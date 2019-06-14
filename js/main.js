
$(document).ready(function(){


$( '#btn-validate' ).click(function(){
  var $captcha = $( '#recaptcha' ),
      response = grecaptcha.getResponse();
  
  if (response.length === 0) {
    $( '.msg-error').text( "reCAPTCHA is mandatory" );
    if( !$captcha.hasClass( "error" ) ){
      $captcha.addClass( "error" );
    }
  } else {
    $( '.msg-error' ).text('');
    $captcha.removeClass( "error" );
    alert( 'reCAPTCHA marked' );
  }
});





   //caching the scroll top element
        // var scrollButton = $("#scroll-top");
        // $(window).scroll(function()
        // {
        //   if($(this).scrollTop() >= 700){
        //      scrollButton.show();
        //   }
        //   else{
        //     scrollButton.hide();
        //   }
        // });

        // scrollButton.click(function() // 3shan lma kant gowa window w ndos 3la el sehm mknsh byrda ynzl b scroll tany
        //   {
        //      $("html,body").animate({scrollTop : 0},600);
        //   });





          //trigger niceScroll w dh gaybeno mn 3la elnet
   // $('html').niceScroll({
   //  cursorcolor: '#d8262c',
   //  cursorwidth:'10px',
   //  cursorborder:'1px solid #d8262c',
   //  cursorborderradius: '0'
   // });



});