/**
 * Author       : Brandon Sanders <brandon95547@gmail.com>
 * Template Name: Paradine - Creative Portfolio Bootstrap Template
 * Version      : 2.2
 */

(function ($) {
    'use strict';

    var paradine = {
        animateAbout : function() {
            var $this = this;
            $('.progress .progress-bar').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
            );
            setTimeout(function(){
                $('[data-textillate-skills]').textillate({ in: { effect: 'rotateIn', sync: false }});
            }, 650);
            $('[data-textillate-about]').textillate({ in: { effect: 'rotateIn', sync: true }});
            $this.ani1 = true;
        },
        init : function() {
            var $this = this;

            $this.ani1 = false;
            $this.ani2 = false;
            $this.ani3 = false;
            $this.ani4 = false;
            $this.ani5 = false;

            $this.isMobileMenuActive = false;

            $this.slogans = ["A cool dude", "A expert at programming", "sentence three"];

            $this.mainNavHeight = $('#main-nav-ins').outerHeight();

            $(window).bind('hashchange', function(e) {
                //e.preventDefault();
                //console.log(e);

                switch(location.hash) {
                    case '#home':
                        $('html, body').animate({scrollTop: 0}, 600);
                        break;
                    case '#about':
                        $('html, body').animate({scrollTop: $('#about-item').offset().top - $this.mainNavHeight + 2}, 600);
                        break
                    case '#work':
                        $('html, body').animate({scrollTop: $('#work-item').offset().top - $this.mainNavHeight + 2}, 600, function() {

                        });
                        break
                    case '#process':
                        $('html, body').animate({scrollTop: $('#process-item').offset().top - $this.mainNavHeight + 2}, 600);
                        break
                    case '#contact':
                        $('html, body').animate({scrollTop: $('#contact-item').offset().top - $this.mainNavHeight + 2}, 600);
                        break
                    case '#services':
                        $('html, body').animate({scrollTop: $('#services-item').offset().top - $this.mainNavHeight + 2}, 600, function() {

                        });
                        break
                    default:
                }

            });

            jQuery(document).ready(function () {
                // init animations on page load
                if(!$this.ani1 && $('#about-item').offset().top - $this.mainNavHeight - ($('header').outerHeight() / 2) <= $(window).scrollTop()) {
                    $this.animateAbout();
                }
                if(!$this.ani2 && $('#work-item').offset().top - $this.mainNavHeight <= $(window).scrollTop()) {
                    $('[data-textillate-work]').textillate({ in: { effect: 'bounceInLeft', sync: true }});
                    $this.ani2 = true;
                }
                // init animations on scroll
                $(window).scroll(function() {
                    if(!$this.ani1 && $('#about-item').offset().top - $this.mainNavHeight - ($('header').outerHeight() / 2) <= $(window).scrollTop()) {
                        $this.animateAbout();
                    }
                    if(!$this.ani2 && $('#work-item').offset().top - $this.mainNavHeight <= $(window).scrollTop()) {
                        $('[data-textillate-work]').textillate({ in: { effect: 'bounceInLeft', sync: true }});
                        $this.ani2 = true;
                    }
                });


                $('.introduction h2').textillate({ in: { effect: 'rotateIn', sync: true }});

                $('.slogans').textillate({
                    in: { effect: 'rollIn', sync: false },
                    out: { effect: 'rollOut', sync: false },
                    minDisplayTime : 500,
                    loop: true
                });

                $('body').scrollspy({ target: '#main-nav-ins', offset: parseInt($this.mainNavHeight) });

                $('#main-nav-ins').affix({});

                if($this.mainNavHeight < $(document).scrollTop()) {
                    $('#main-nav-ins').removeClass('affix-bottom');
                    if(!$('#main-nav-ins').hasClass('affix')) {
                        $('#main-nav-ins').addClass('affix');
                        $('#main-nav-ins').css('top', 0);
                    }
                }

                $('#main-nav-ins').on('affixed.bs.affix', function() {

                });

                $('.navbar-default .navbar-toggle').on("click", function() {
                    $('#main-nav-ins').toggleClass('nav-active');
                    if(!$this.isMobileMenuActive) {
                        $this.isMobileMenuActive = true;
                    }
                    else {
                        $this.isMobileMenuActive = false;
                    }
                });

                $('.navbar-default .navbar-nav>li>a').on("click", function() {
                    if($this.isMobileMenuActive) {
                        $('.navbar-default .navbar-toggle').click();
                    }
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

                $('#proposal-form').submit(function() {

                    var postData = $(this).serialize();

                    var submit = $(this).find('button[type="submit"]');
                    var spinner = $(this).find('.formSpinner');

                    submit.hide();
                    spinner.show();

                    $.ajax({
                      url: 'process.php',
                      type: 'post',
                      data: postData,
                      success: function(data, status) {
                          spinner.hide();
                          submit.show();
                          alert('Message sent!');
                      },
                      error: function(xhr, desc, err) {
                          spinner.hide();
                          submit.show();
                      }
                    });

                    return false;
                })

            });
        }
    }

    paradine.init();

})(jQuery);
