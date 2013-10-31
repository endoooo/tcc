require.config({
    baseUrl: '../js',
    paths: {
        jquery: 'lib/jquery-2.0.3.min',
        d3js: 'lib/d3.v3.min'
    }
});

require(['jquery', 'menu','graphs/education01'], function($, menu, education01){
	$('document').ready(function() {
		menu.initializeMain();
		menu.initializeSettings();

		education01.initializeGraph();
		education01.initializeSettings();
	});
});