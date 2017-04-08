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
                //$('[data-textillate-skills]').textillate({ in: { effect: 'rotateIn', sync: false }});
                /* $('#about-item .row .animated').removeClass().addClass('slideInLeft' + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                  $(this).removeClass();
              }); */
              $('[data-textillate-about]').textillate({ in: { effect: 'bounceInLeft', sync: true }});
              $('[data-textillate-skills]').textillate({ in: { effect: 'rotateIn', sync: true }});
            }, 650);
            
            $this.ani1 = true;
        },
        runAnimationsIfVisible : function() {
            if(!$this.ani1 && $('#about-item').offset().top - $this.mainNavHeight - ($('header').outerHeight() / 2) <= $(window).scrollTop()) {
                $this.animateAbout();
            }
            if(!$this.ani2 && $('#work-item').offset().top - $this.mainNavHeight <= $(window).scrollTop()) {
                $('[data-textillate-work]').textillate({ in: { effect: 'bounceInLeft', sync: true }});
                $this.ani2 = true;
            }
            if(!$this.ani3 && $('#contact-item').offset().top - $this.mainNavHeight <= $(window).scrollTop()) {
                $('[data-textillate-contact]').textillate({ in: { effect: 'bounceInLeft', sync: true }});
                $this.ani3 = true;
            }
            if(!$this.ani4 && $('#services-item').offset().top - $this.mainNavHeight <= $(window).scrollTop()) {
                $('[data-textillate-services]').textillate({ in: { effect: 'bounceInLeft', sync: true }});
                $this.ani4 = true;
            }
        },
        init : function() {
            var $this = this;

            window.$this = $this;

            $this.ani1 = false;
            $this.ani2 = false;
            $this.ani3 = false;
            $this.ani4 = false;
            $this.ani5 = false;
            $this.isMobileMenuActive = false;

            $this.mainNavHeight = $('#main-nav-ins').outerHeight();

            /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
            particlesJS.load('particles-js', 'assets/particles.json', function() {
                var element = $('#particles-js').find('canvas');
                element.addClass('canvas-absolute');
            });

            $(window).bind('hashchange', function(e) {
                switch(location.hash) {
                    case '#home':
                        $('html, body').animate({scrollTop: 0}, 600);
                        break;
                    case '#about':
                        $('html, body').animate({scrollTop: $('#about-item').offset().top - $this.mainNavHeight + 2}, 600, function() {
                            if(!$this.ani1 && $('#about-item').offset().top - $this.mainNavHeight - ($('header').outerHeight() / 2) <= $(window).scrollTop()) {
                                $this.animateAbout();
                            }
                        });
                        break
                    case '#work':
                        $('html, body').animate({scrollTop: $('#work-item').offset().top - $this.mainNavHeight + 2}, 600, function() {
                            if(!$this.ani2 && $('#work-item').offset().top - $this.mainNavHeight <= $(window).scrollTop()) {
                                $('[data-textillate-work]').textillate({ in: { effect: 'bounceInLeft', sync: true }});
                                $this.ani2 = true;
                            }
                        });
                        break
                    case '#process':
                        $('html, body').animate({scrollTop: $('#process-item').offset().top - $this.mainNavHeight + 2}, 600);
                        break
                    case '#contact':
                        $('html, body').animate({scrollTop: $('#contact-item').offset().top - $this.mainNavHeight + 2}, 600, function() {
                            if(!$this.ani3 && $('#contact-item').offset().top - $this.mainNavHeight <= $(window).scrollTop()) {
                                $('[data-textillate-contact]').textillate({ in: { effect: 'bounceInLeft', sync: true }});
                                $this.ani3 = true;
                            }
                        });
                        break
                    case '#services':
                        $('html, body').animate({scrollTop: $('#services-item').offset().top - $this.mainNavHeight + 2}, 600, function() {
                            if(!$this.ani4 && $('#services-item').offset().top - $this.mainNavHeight <= $(window).scrollTop()) {
                                $('[data-textillate-services]').textillate({ in: { effect: 'bounceInLeft', sync: true }});
                                $this.ani4 = true;
                            }
                        });
                        break
                    default:
                }
            });

            jQuery(document).ready(function () {

                window.$this.runAnimationsIfVisible();

                $(window).scroll(function() {

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

                /* this fixes the issue to prevent click events from triggering affix */
                $('#main-nav-ins').on('affix.bs.affix', function() {
                    if( !$( window ).scrollTop() ) return false;
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

                /* this closes the mobile menu and animates to the section */
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
                    if(hash == location.hash) {
                        location.hash = '';
                        window.history.back(1);
                    }
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
