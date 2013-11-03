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
			titleText: 'Utilização da internet por condição de estudante (2011)',
			csvPath: '../educacao/data/001.csv' + '?' + Math.floor(Math.random() * 1000),
			parameter: 'condição de estudante'
		}

		var graph1b = {
			titleText: 'Utilização da internet por grupo de anos de estudo (2011)',
			csvPath: '../educacao/data/002.csv' + '?' + Math.floor(Math.random() * 1000),
			parameter: 'anos de estudo'
		}

		var graph1c = {
			titleText: 'Utilização da internet por rede de ensino (2011)',
			csvPath: '../educacao/data/003.csv' + '?' + Math.floor(Math.random() * 1000),
			parameter: 'rede de ensino'
		}

		//initialize graphs
		education01.initializeGraph(function(){
			education01.activateAbsGraph(graph1a);
		});

		//bind settings control
		$('#edu-settings1 .graph-link').on('click', function(e){
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

			if($('#edu-settings1 input:checked').val() === 'absolute')
				education01.activateAbsGraph(graphData);
			else
				education01.activateRelGraph(graphData);

			e.preventDefault();			
		});
		$('#edu-settings1 input').on('change', function(e){
			$('#edu-settings1 .active .graph-link').click();
		});


	});
});