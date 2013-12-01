require.config({
    baseUrl: '../js',
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

require(['jquery', 'menu', 'notes', 'graphs/education01', 'graphs/education02', 'graphs/education03'], function($, menu, notes, education01, education02, education03){
	$('document').ready(function() {
		
		//initialize menu and notes
		menu.initializeMain();
		notes.set();

		//graph parameters
		var graph2a = {
			titleText: 'Utilização da internet por grupo de anos de estudo (2011)',
			csvPath: '../educacao/data/02a.csv' + '?' + Math.floor(Math.random() * 1000),
			parameter: 'anos de estudo'
		}
		var graph3a = {
			titleText: 'Taxas de analfabetismo e acesso à internet - Brasil (2005 - 2011)',
			csvPath: '../educacao/data/03a.csv' + '?' + Math.floor(Math.random() * 1000),
			parameter: 'local'
		}
		var graph3b = {
			titleText: 'Taxas de analfabetismo e acesso à internet - grandes regiões (2005 - 2011)',
			csvPath: '../educacao/data/03b.csv' + '?' + Math.floor(Math.random() * 1000),
			parameter: 'local'
		}

		//initialize graphs
		education02.initializeGraph(function(){
			education02.activateRelGraph(graph2a);
		});
		education03.initializeGraph(function(){
			education03.activateGraph(graph3a, 'Brasil');
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

		//bind settings control to graph03
		$('#edu-settings3 .graph-type').on('click', function(e){
			$(this).parent('li').siblings().removeClass('active');
			$(this).parent('li').addClass('active');

			var region = $(this).data('region');
			console.log(region);
			education03.activateGraph(graph3a, region);

			e.preventDefault();			
		});


	});
});