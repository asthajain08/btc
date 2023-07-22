$(function() {

	var siteSticky = function() {
		   $(".js-sticky-header").sticky({topSpacing:0});
	   };
	   siteSticky();
   
	   var siteMenuClone = function() {
   
		   $('.js-clone-nav').each(function() {
			   var $this = $(this);
			   $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		   });
   
   
		   setTimeout(function() {
			   
			   var counter = 0;
	    $('.site-mobile-menu .has-children').each(function(){
		 var $this = $(this);
		 
		 $this.prepend('<span class="arrow-collapse collapsed">');
   
		 $this.find('.arrow-collapse').attr({
		   'data-toggle' : 'collapse',
		   'data-target' : '#collapseItem' + counter,
		 });
   
		 $this.find('> ul').attr({
		   'class' : 'collapse',
		   'id' : 'collapseItem' + counter,
		 });
   
		 counter++;
   
	    });
   
	  }, 1000);
   
		   $('body').on('click', '.arrow-collapse', function(e) {
	    var $this = $(this);
	    if ( $this.closest('li').find('.collapse').hasClass('show') ) {
		 $this.removeClass('active');
	    } else {
		 $this.addClass('active');
	    }
	    e.preventDefault();  
	    
	  });
   
		   $(window).resize(function() {
			   var $this = $(this),
				   w = $this.width();
   
			   if ( w > 768 ) {
				   if ( $('body').hasClass('offcanvas-menu') ) {
					   $('body').removeClass('offcanvas-menu');
				   }
			   }
		   })
   
		   $('body').on('click', '.js-menu-toggle', function(e) {
			   var $this = $(this);
			   e.preventDefault();
   
			   if ( $('body').hasClass('offcanvas-menu') ) {
				   $('body').removeClass('offcanvas-menu');
				   $this.removeClass('active');
			   } else {
				   $('body').addClass('offcanvas-menu');
				   $this.addClass('active');
			   }
		   }) 
   
		   // click outisde offcanvas
		   $(document).mouseup(function(e) {
		  var container = $(".site-mobile-menu");
		  if (!container.is(e.target) && container.has(e.target).length === 0) {
		    if ( $('body').hasClass('offcanvas-menu') ) {
					   $('body').removeClass('offcanvas-menu');
				   }
		  }
		   });
	   }; 
	   siteMenuClone();
   
   });
   
   const welcomeText = document.getElementById('welcome-text');
   
   function toggleAnimations() {
	welcomeText.classList.toggle('welcome-rotate');
	welcomeText.classList.toggle('faculty-down');
   }
   
   toggleAnimations(); // Initially apply the animations
   
   setInterval(toggleAnimations, 4000); // Toggle animations every 4 seconds
   
   $('.owl-carousel').owlCarousel({
	   loop: true,
	   margin: 10,
	   responsiveClass: true,
	   responsive: {
		0: {
		  items: 1,
		  nav: true
		},
		600: {
		  items: 1,
		  nav: false
		},
		1000: {
		  items: 1,
		  nav: true,
		  loop: false
		}
	   }
	 });
   

	 $(".hover").mouseleave(
		function () {
		  $(this).removeClass("hover");
		}
	   );