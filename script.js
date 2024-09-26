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

var textTwo = $('#text-two');
$(window).scroll(function() {
    var textTwoTop = textTwo.offset().top;
    var scrollTop = $(window).scrollTop();
  
    if (scrollTop > textTwoTop) {
        $('nav-list').removeClass('nav-tools').addClass('.nav-obj-afterScrl');
        var finalNav = $('nav-obj')
        var newContent =$('<div class="name-logo"><p>Joe Aneto</p></div>')
        finalNav.append(newContent)
    }
});

  