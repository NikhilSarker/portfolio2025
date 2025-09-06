// Preloader part Start
$(window).on('load', function(){
  $(".preloader").delay(0).fadeOut(0)
})
// Preloader part End
// Wow in Banner part start
new WOW().init();
// Wow in Banner part start

// Back2top Part Start
$(".back2top").click(function(){
  $("html, body").animate({
    scrollTop:0
  },1000)
})

$(window).scroll(function(){
  var scrolling = $(window).scrollTop() 
  if (scrolling > 20){ $(".back2top").fadeIn()}
  else { $(".back2top").fadeOut()}
})

// Back2top Part End
// Menubar Part start
$(window).scroll(function(){
  var scrolling = $(window).scrollTop();
  if (scrolling > 20){
    $(".menu-bg").addClass("bg")
  }
  else{
    $(".menu-bg").removeClass("bg")
  }
})
// Menubar Part End
//Form Part start

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // stop page reload

    const form = e.target;
    const data = new FormData(form);

    fetch("https://formspree.io/f/movlrqgj", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            document.getElementById("status").innerText = "✅ Message sent successfully!";
            form.reset();
        } else {
            document.getElementById("status").innerText = "❌ Something went wrong.";
        }
    }).catch(() => {
        document.getElementById("status").innerText = "❌ Network error.";
    });
});

// Form part end


// Side-menu Part Start
// $(".close").click(function(){
//   $(".side-menu").toggleClass("bg")
// })
// Side-menu Part End

// Typed js in Banner part

//  new Typed(".typed",{
//   stringsElement: $('.typed-strings'),
//   typeSpeed: 150,
//   delaySpeed: 90,
//   loop: true,
  
// });

  
$('.benefit-slick').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


// About Me page Start

$(window).on("load", function(){
  win.loopFun($('.percent1')[0],95,'#ccc','#53cdda','#53cdda','20px',20,60,1000,'bounce');
  win.loopFun($('.percent2')[0],90,'#ccc','#53cdda','#53cdda','20px',20,60,1000,'bounce');
  win.loopFun($('.percent3')[0],85,'#ccc','#53cdda','#53cdda','20px',20,60,1000,'bounce');
 
})

// About Me page End