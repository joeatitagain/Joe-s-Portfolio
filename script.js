const slider = document.querySelector('.slider') 
const sections = gsap.utils.toArray(".slider section") 
const words = gsap.utils.toArray("p")



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


const tl = gsap.timeline({
  defaults: {
      ease: "none"
  },
  scrollTrigger: {
      trigger: slider,
      pin: true,
      scrub: 2,
      end: () =>  "+=" + slider.offsetWidth
  }
})

tl.to(slider, {
  xPercent: -66
})


const stackText = $("#stackText")
const firstText = new SplitType (stackText)

gsap.to('.char', {
  y: 0,
  stagger: 0.05,
  delay: 0.2,
  ease: 'back.out',
  duration: .5,
  scrollTrigger: {
    trigger: slider, 
    start: 'top center',
    end: '+=500', 
    scrub: true, 
  }
})


gsap.registerPlugin(ScrollTrigger)

const splitTypes = $('#introText').toArray()
const text = new  SplitType(splitTypes)
const introText = document.getElementById('introText');



  gsap.from('#introText .char', {
  scrollTrigger: {
    trigger: introText,
    start: 'top -3000px',
    end: '+=2000',
    scrub: true,
    delay: 1,
    onLoad:  () => {
      ScrollTrigger.refresh();
    }
  },
  opacity: 0.2,
  stagger: 0.9,

})

gsap.from('.stackLogo', {
  scale: 0.5, // initial scale
  scrollTrigger: {
    trigger: '#stackText', // container element that holds the logos
    start: 'center center', // start of the trigger element
    end: '+=500', // end of the trigger element (optional)
    scrub: true, // enable scrubbing
    onEnter: () => {
      gsap.to('.stackLogo', {
        scale: 1, // scale up to 1
        duration: 1, // animation duration
        ease: 'power2.inOut' // easing function
      });
    },
    onLeave: () => {
      gsap.to('.stackLogo', {
        scale: 0.5, // scale back down to 0.5
        duration: 1, // animation duration
        ease: 'power2.inOut' // easing function
      });
    }
  }
});