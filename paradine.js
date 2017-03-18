/**
 * Author       : ParadineIns <paradineins@gmail.com>
 * Template Name: Paradine - Creative Portfolio Bootstrap Template
 * Version      : 1.0
 */

(function ($) {
    'use strict';

    $(window).bind('hashchange', function(e) {
        //e.preventDefault();
        //console.log(e);

        switch(location.hash) {
            case '#home':
                $('html, body').animate({scrollTop: $('body').offset().top}, 600);
                break;
            case '#about':
                $('html, body').animate({scrollTop: $('#about-item').offset().top - $('#main-nav-ins').outerHeight() + 2}, 600);
                break
            case '#work':
                $('html, body').animate({scrollTop: $('#work-item').offset().top - $('#main-nav-ins').outerHeight() + 2}, 600, function() {

                });
                break
            case '#process':
                $('html, body').animate({scrollTop: $('#process-item').offset().top - $('#main-nav-ins').outerHeight() + 2}, 600);
                break
            case '#contact':
                $('html, body').animate({scrollTop: $('#contact-item').offset().top - $('#main-nav-ins').outerHeight() + 2}, 600);
                break
            case '#services':
                $('html, body').animate({scrollTop: $('#services-item').offset().top - $('#main-nav-ins').outerHeight() + 2}, 600);
                break
            default:
        }

    });

    jQuery(document).ready(function () {
        var ani1 = false, ani2 = false, ani3 = false, ani4 = false, ani5 = false;
        $(window).scroll(function() {
            if(!ani1 && $('#about-item').offset().top - $('#main-nav-ins').outerHeight() - ($('header').outerHeight() / 2) <= $(window).scrollTop()) {
                $('.progress .progress-bar').css("width",
                    function() {
                        return $(this).attr("aria-valuenow") + "%";
                    }
                );
                setTimeout(function(){
                    $('[data-textillate-skills]').textillate({ in: { effect: 'rotateIn', sync: false }});
                }, 650);
                $('[data-textillate-about]').textillate({ in: { effect: 'rotateIn', sync: true }});

                ani1 = true;
            }
            if(!ani2 && $('#work-item').offset().top - $('#main-nav-ins').outerHeight() <= $(window).scrollTop()) {
                $('[data-textillate-work]').textillate({ in: { effect: 'bounceInLeft', sync: true }});
                ani2 = true;
            }
        });


        $('.introduction h2').textillate({ in: { effect: 'rotateIn', sync: true }});

        $('body').scrollspy({ target: '#main-nav-ins', offset: parseInt($('#main-nav-ins').outerHeight()) });

        $('#main-nav-ins').affix({
          offset: jQuery('header').outerHeight() - jQuery('#main-nav-ins').outerHeight()
        });

        if($('#main-nav-ins').outerHeight() < $(document).scrollTop()) {
            $('#main-nav-ins').removeClass('affix-bottom');
            if(!$('#main-nav-ins').hasClass('affix')) {
                $('#main-nav-ins').addClass('affix');
                $('#main-nav-ins').css('top', 0);
            }
        }

        $('#main-nav-ins').on('affixed.bs.affix', function() {
          //$('.affix-top-item').css("padding-top", parseInt($('.affix-top-item').css("padding-top")) + parseInt($('#main-nav-ins').outerHeight()) + 'px');
        });
        $('#main-nav-ins').on('affix-top.bs.affix', function() {

          //$('.affix-top-item').css("padding-top", '0px');
        });
        $('.hash-triggers a').on("click", function(e) {
            e.preventDefault();
            var hash = $(this).attr('href').replace('-item', '');
            location.hash = '#spacer';
            location.hash = hash;
        });

        //$('html, body').animate({scrollTop: $('#about').offset().top - $('#main-nav-ins').outerHeight()}, 1000);

        /* $('#about').ScrollTo({
            duration: 2000,
            durationMode: 'all'
        }); */
  });



})(jQuery);

/*
var elementPosition = $('#navigation').offset();

$(window).scroll(function(){
        if($(window).scrollTop() > elementPosition.top){
              $('#navigation').css('position','fixed').css('top','0');
        } else {
            $('#navigation').css('position','static');
        }
});
*/
