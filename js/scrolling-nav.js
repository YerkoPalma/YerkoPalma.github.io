//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    var servicesTop = $("#services").offset().top;
    var skillsTop = $("#skills").offset().top;
    var projectsTop = $("#projects").offset().top;
    var experienceTop = $("#experience").offset().top;
    var contactTop = $("#contact").offset().top;

    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }

    if ($(".navbar").offset().top < servicesTop) {
      $(".page-scroll.active").removeClass("active");
    }
    if ($(".navbar").offset().top + 50 > servicesTop) {
      $(".page-scroll.active").removeClass("active");
      $(".page-scroll[href='#services']").addClass("active");
    }
    if ($(".navbar").offset().top + 50 > skillsTop) {
      $(".page-scroll.active").removeClass("active");
      $(".page-scroll[href='#skills']").addClass("active");
    }
    if ($(".navbar").offset().top + 50 > projectsTop) {
      $(".page-scroll.active").removeClass("active");
      $(".page-scroll[href='#projects']").addClass("active");
    }
    if ($(".navbar").offset().top + 50 > experienceTop) {
      $(".page-scroll.active").removeClass("active");
      $(".page-scroll[href='#experience']").addClass("active");
    }
    if ($(".navbar").offset().top + 50 > contactTop) {
      $(".page-scroll.active").removeClass("active");
      $(".page-scroll[href='#contact']").addClass("active");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        //$('.active').removeClass('active');
        //$anchor.addClass('active');
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
        event.stopPropagation();
    });
});
