require.config({
    baseUrl: '../js',
    paths: {
        jquery: 'lib/jquery-2.0.3.min',
        d3js: 'lib/d3.v3.min'
    },
    urlArgs: 'bust=' + (new Date()).getTime()
});

require(['jquery', 'menu'], function($, menu){
	$('document').ready(function() {
		
		//initialize menu
		menu.initializeMain();

	});
});