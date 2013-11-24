require.config({
    baseUrl: '../js',
    paths: {
        jquery: 'lib/jquery-2.0.3.min',
        d3js: 'lib/d3.v3.min'
    },
    urlArgs: 'bust=' + (new Date()).getTime()
});

require(['jquery', 'menu','graphs/education01', 'graphs/education02'], function($, menu, education01, education02){
	$('document').ready(function() {
		
		//initialize menu and settings
		menu.initializeMain();
		menu.initializeSettings();

		//graph parameters
		var graph2a = {
			titleText: 'Utilização da internet por grupo de anos de estudo (2011)',
			csvPath: '../educacao/data/02a.csv' + '?' + Math.floor(Math.random() * 1000),
			parameter: 'anos de estudo'
		}

		//initialize graphs
		education02.initializeGraph(function(){
			education02.activateRelGraph(graph2a);
		});

		//bind settings control to graph01
		$('#edu-settings1 .graph-type').on('click', function(e){
			$(this).parent('li').siblings().removeClass('active');
			$(this).parent('li').addClass('active');

			var type = $(this).data('graph');
			if (type === 'edu-1a')
				education01.activateGraph1();
			else
				education01.activateGraph2();

			e.preventDefault();			
		});

		//bind settings control to graph02
		$('#edu-settings2 .graph-value').on('click', function(e){
			$(this).parent('li').siblings().removeClass('active');
			$(this).parent('li').addClass('active');

			var type = $(this).data('value');
			if (type === 'absolute')
				education02.activateAbsGraph(graph2a);
			else
				education02.activateRelGraph(graph2a);

			e.preventDefault();			
		});


	});
});