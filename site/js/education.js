require.config({
    baseUrl: '../js',
    paths: {
        jquery: 'lib/jquery-2.0.3.min',
        d3js: 'lib/d3.v3.min'
    },
    urlArgs: 'bust=' + (new Date()).getTime()
});

require(['jquery', 'menu','graphs/education01'], function($, menu, education01){
	$('document').ready(function() {
		
		//initialize menu and settings
		menu.initializeMain();
		menu.initializeSettings();

		//graph parameters
		var graph1a = {
			titleText: 'Utilização da internet por condição atual de estudante (2011)',
			csvPath: '../educacao/data/01a.csv' + '?' + Math.floor(Math.random() * 1000),
			parameter: 'condição de estudante'
		}

		var graph1b = {
			titleText: 'Utilização da internet por grupo de anos de estudo (2011)',
			csvPath: '../educacao/data/01b.csv' + '?' + Math.floor(Math.random() * 1000),
			parameter: 'anos de estudo'
		}

		var graph1c = {
			titleText: 'Utilização da internet por rede de ensino (2011)',
			csvPath: '../educacao/data/01c.csv' + '?' + Math.floor(Math.random() * 1000),
			parameter: 'rede de ensino'
		}

		//initialize graphs
		education01.initializeGraph(function(){
			education01.activateAbsGraph(graph1a);
		});

		//bind settings control
		$('#edu-settings1 .graph-type').on('click', function(e){
			switch($(this).data('graph')) {
				case 'graph1a':
					var graphData = graph1a;
					break;
				case 'graph1b':
					var graphData = graph1b;
					break;
				case 'graph1c':
					var graphData = graph1c;
					break;
			}

			$(this).parent('li').siblings().removeClass('active');
			$(this).parent('li').addClass('active');

			var type = $('#edu-settings1 .value-list .active a').data('value');
			if (type === 'absolute')
				education01.activateAbsGraph(graphData);
			else
				education01.activateRelGraph(graphData);

			e.preventDefault();			
		});
		$('#edu-settings1 .graph-value').on('click', function(e){
			$(this).parent('li').siblings().removeClass('active');
			$(this).parent('li').addClass('active');

			$('#edu-settings1 .type-list .active .graph-type').click();

			e.preventDefault();			
		});


	});
});