$('.text-one').delay(500).animate({
    opacity: 1,
    top: '0px'
  }, {
    duration: 2000,
    easing: 'swing',
    complete: function() {
      // animation complete
    }
  });

$('.text-two').delay(2000).animate({
    opacity: 1
}, {
    duration: 2000,
    easing: 'swing'
});



var textTwo = $('#textTwo');

$(window).scroll(function() {
    var textTwoTop = textTwo.offset().top;
    var scrollTop = $(window).scrollTop();
    var textTwoHeight = textTwo.height();
  
    if (scrollTop > textTwoTop + textTwoHeight) {
      $('#navBar').addClass('nav-bar-shadownav');
      $('.name-logo').empty().append("<h1>Joe's Portfolio</h1>");
    }else{
      $('#navBar').removeClass('nav-bar-shadownav');
      $('.name-logo').empty();
    }  
});

$('#about').mouseover(function() {
  $('video').get(0).play();
  $('video').addClass('vid-partOverAbout');
  $('#text-part').addClass('text-partOverAbout');
});
$('#about').mouseout(function() {
  $('video').get(0).pause();
  $('video').removeClass('vid-partOverAbout');
  $('#text-part').removeClass('text-partOverAbout');
})