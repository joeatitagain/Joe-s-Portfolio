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
    trigger: '#introText .word',
    start: '300px top',
    end: '+=2000',
    scrub: true,
    
    onLoad:  () => {
      ScrollTrigger.refresh();
    }
  },
  opacity: 0.01,
  stagger: 0.9,

})



const objCollection = document.getElementsByClassName('trn');



Array.prototype.forEach.call(objCollection, function(obj) {

  function isObjectInMiddle() {
    const rect = obj.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
  
    const objCenter = rect.left + (rect.width / 2);
    const viewportCenter = viewportWidth / 2;
  
    const threshold = 100; // adjust this value to change the sensitivity
  
    if (Math.abs(objCenter - viewportCenter) < threshold && rect.right > 0 && rect.left < viewportWidth) {
      obj.classList.add('in-view');
    } else {
      // Remove the class from the object
      obj.classList.remove('in-view');
    }
  }
  
  // Call the function on scroll
  window.addEventListener('scroll', isObjectInMiddle);
  
  // Call the function on load
  isObjectInMiddle();
});




const endSplitTypes = $('#endText').toArray()
const endtext = new  SplitType(endSplitTypes)
const endText = $('#endText');

gsap.from('#endText .char', {
  scrollTrigger: {
    trigger: '#endText .char',
    start: '10700px top',
    end: '11800px top',
    scrub: true,
    onLoad: ()  => {
      ScrollTrigger.refresh();
    }
  },
    scaleY: 0,
    y: -20,
    transformOrigin: 'top',
    stagger: 0.1
})

gsap.set(".photo:not(:first-child)", { yPercent:101})

const animation = gsap.to(".photo:not(:first-child)", {
	yPercent:0, duration:1, stagger:1
})

ScrollTrigger.create({
	trigger:".gallery",
	start:"top 5%",
	end:"65% top",
	pin:".right",
	animation: animation,
	scrub:true,

})

$(window).scroll(function() {
  if ($("#find-me").offset().top <= $(window).scrollTop()) {
    $(".nav-bar-shadownav").hide();
  } else {
    $(".nav-bar-shadownav").show();
  }
});

gsap.registerPlugin(ScrollTrigger);


gsap.to(".panel:not(:last-child)", {
  yPercent: -100, 
  ease: "none",
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#container",
    start: "top 9%",
    end: "top",
    scrub: true,
    pin: true
  }
}).set(".panel:first-child", { zIndex: 1 });