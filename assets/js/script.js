/* ========================================================================= */
/*	Page Preloader
/* ========================================================================= */

$(window).on('load', function () {
	$('.preloader').fadeOut(100);
});

jQuery(function ($) {
	"use strict";

	/* ========================================================================= */
	/*	lazy load initialize
	/* ========================================================================= */

	const observer = lozad(); // lazy loads elements with default selector as ".lozad"
	observer.observe();

	/* ========================================================================= */
	/*	Magnific popup
	/* =========================================================================  */
	$('.image-popup').magnificPopup({
		type: 'image',
		removalDelay: 160, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function () {
				// just a hack that adds mfp-anim class to markup
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		closeOnContentClick: true,
		midClick: true,
		fixedContentPos: false,
		fixedBgPos: true
	});

	/* ========================================================================= */
	/*	Portfolio Filtering Hook
	/* =========================================================================  */

	var containerEl = document.querySelector('.shuffle-wrapper');
	if (containerEl) {
		var Shuffle = window.Shuffle;
		var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
			itemSelector: '.shuffle-item',
			buffer: 1
		});

		jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
			var input = evt.currentTarget;
			if (input.checked) {
				myShuffle.filter(input.value);
			}
		});
	}

	/* ========================================================================= */
	/*	Intro Carousel
	/* =========================================================================  */

	$("#capsus-intro").slick({
		infinite: true,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000
	});

	/* ========================================================================= */
	/*	Who Carousel
	/* =========================================================================  */

	$("#capsus-who").slick({
		infinite: true,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed : 9000
	});

	/* ========================================================================= */
	/*	Testimonial Carousel
	/* =========================================================================  */

	$("#testimonials").slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000
	});

	/* ========================================================================= */
	/*	Client Carousel
	/* =========================================================================  */

	$("#clients").slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 600,
		slidesToShow: 5,
		slidesToScroll: 1,
		variableWidth: true,
		centerMode: true,
  		centerPadding: '60px'
	});

	/* ========================================================================= */
	/*	animation scroll js
	/* ========================================================================= */

	var html_body = $('html, body');
	$('nav a, .page-scroll').on('click', function () { //use page-scroll class in any HTML tag for scrolling
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				html_body.animate({
					scrollTop: target.offset().top - 50
				}, 1500, 'easeInOutExpo');
				return false;
			}
		}
	});

	// easeInOutExpo Declaration
	jQuery.extend(jQuery.easing, {
		easeInOutExpo: function (x, t, b, c, d) {
			if (t === 0) {
				return b;
			}
			if (t === d) {
				return b + c;
			}
			if ((t /= d / 2) < 1) {
				return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
			}
			return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
		}
	});

	/* ========================================================================= */
	/*	counter up
	/* ========================================================================= */
	function counter() {
		var oTop;
		if ($('.count').length !== 0) {
			oTop = $('.count').offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$('.count').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 1000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
	}
	$(window).on('scroll', function () {
		counter();
	});

	/* ========================================================================= */
	/*	Modal Our team
	/* ========================================================================= */
	$('#modalTeam').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget); // Button that triggered the modal
		var name = button.data('name'); // Extract info from data-* attribute
		var specialty = button.data('specialty'); // Extract info from data-* attributes
		var title = button.data('title'); // Extract info from data-* attributes
		var picture = button.data('image'); // Extract info from data-* attributes
		var profile = button.data('profile'); // Extract info from data-* attributes
		// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
		// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
		var modal = $(this);
		modal.find('.modal-body #member-name').text(name);
		modal.find('.modal-body #member-specialty').text(specialty);
		modal.find('.modal-body #member-title').text(title);
		modal.find('.modal-body #member-picture').attr('alt',name).attr('src', picture);
		modal.find('.modal-body #member-profile').html(decodeURIComponent(profile));
	  });

	/* ========================================================================= */
	/*	Scrolling text
	/* ========================================================================= */
	$(function(){
		var tickerLength = $('.scroll-titles ul li').length;
		var tickerHeight = $('.scroll-titles ul li').outerHeight();
		$('.scroll-titles ul li:last-child').prependTo('.scroll-titles ul');
		$('.scroll-titles ul').css('marginTop',-tickerHeight);
		function moveTop(){
		  $('.scroll-titles ul').animate({
			top : -tickerHeight
		  },1000, function(){
		   $('.scroll-titles ul li:first-child').appendTo('.scroll-titles ul');
			$('.scroll-titles ul').css('top','').css('color','#28c5b9 !important');
		  });
		 }
		setInterval( function(){
		  moveTop();
		}, 3000);
		});
	
		/* ========================================================================= */
		/*	Scrolling behaviour
		/* ========================================================================= */
	if(document.location.pathname === "/" || document.location.pathname === "/en/") {
		var viewportHeight = $(window).height();
		$(window).scroll(function() {
			if ($(document).scrollTop() > viewportHeight) {
			  $('.navigation').addClass('section-bg');
			} else {
			  $('.navigation').removeClass('section-bg');
			}
		  });
	}
	
	/* ========================================================================= */
	/*	Scrolling text
	/* ========================================================================= */
	$(document).ready(function(){
		$('select').formSelect();
	  });

	/* ========================================================================= */
	/*	Scrolling text
	/* ========================================================================= */
	$("#contact-form").submit(function(e) {
		e.preventDefault();
	  
		var $form = $(this);
		var success = $form.data('success');
		var successContent = $form.data('success-msg');
		var errorTitle = $form.data('error');
		var errorContent = $form.data('error-msg');
		$.post($form.attr("action"), $form.serialize()).then(function() {
		  toastr.success(success + " " + successContent);
		}, function() {
			toastr.error(errorTitle + " " + errorContent);
		});
	  });
});