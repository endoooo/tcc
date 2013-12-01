require.config({
    baseUrl: 'js',
    paths: {
        'jquery': 'lib/jquery-2.0.3.min',
        'jquery-ui': 'lib/jquery-ui-1.10.3.custom.min',
        'd3js': 'lib/d3.v3.min'
    },
    shim: {
        'jquery-ui': {
        	deps: ['jquery'],
            exports: '$'
        }
    },
    urlArgs: 'bust=' + (new Date()).getTime()
});

require(['jquery', 'menu', 'notes'], function($, menu, notes){
	$('document').ready(function() {
		
		//initialize menu and notes
		menu.initializeMain();
		notes.set();

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