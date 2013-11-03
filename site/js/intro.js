require.config({
    baseUrl: 'js',
    paths: {
        jquery: 'lib/jquery-2.0.3.min',
        d3js: 'lib/d3.v3.min'
    },
    urlArgs: 'bust=' + (new Date()).getTime()
});

require(['jquery', 'menu'], function($, menu){
	$('document').ready(function() {
		
		//initialize menu and settings
		menu.initializeMain();
		menu.initializeSettings();

		//hide menu
		$('#menu-link').hide();

		var coverHeightStr = $('#cover').css('height');
		var coverHeight = coverHeightStr.replace('px','');

		//scroll spy
		$(window).scroll(function(){
			if ($(window).scrollTop() >= coverHeight) $('#menu-link').fadeIn();
			else $('#menu-link').fadeOut();
		});

		//start
		$('#start').on('click', function(e){
			$('html, body').animate({
			    scrollTop: coverHeight
			}, 1000);
			e.preventDefault();
		})

	});
});