require.config({
    baseUrl: '../js',
    paths: {
        jquery: 'lib/jquery-2.0.3.min',
        d3js: 'lib/d3.v3.min'
    },
    urlArgs: 'bust=' + (new Date()).getTime()
});

require(['jquery', 'menu', 'graphs/region01', 'graphs/region02', 'graphs/region03'], function($, menu, region01, region02, region03){
	$('document').ready(function() {
		
		//initialize menu
		menu.initializeMain();

		//graph parameters
		var graph1a = {
			titleText: 'Utilização da internet nos estados do Brasil (2011)',
			csvPath: '../regiao/data/01a.csv' + '?' + Math.floor(Math.random() * 1000),
			parameter: 'estado'
		};
		var graph1b = {
			titleText: 'Utilização da internet nas grandes regiões do Brasil (2011)',
			csvPath: '../regiao/data/01b.csv' + '?' + Math.floor(Math.random() * 1000),
			parameter: 'região'
		};
		var graph3a = {
			titleText: 'Utilização da internet nos estados vs. regiões metropolitanas do Brasil (2011)',
			csvPath: '../regiao/data/03a.csv' + '?' + Math.floor(Math.random() * 1000),
			parameter: ['estado','região metropolitana']
		};

		//initialize graphs
		region01.initializeGraph(function(){
			region01.activateAbsGraph(graph1a);
		});
		region02.activateMap('map-abs');
		region03.initializeGraph(function(){
			region03.activateAbsGraph(graph3a);
		});

		//bind settings control to graph01
		$('#reg-settings1 .graph-type').on('click', function(e){
			switch($(this).data('graph')) {
				case 'graph1a':
					var graphData = graph1a;
					break;
				case 'graph1b':
					var graphData = graph1b;
					break;
			}

			$(this).parent('li').siblings().removeClass('active');
			$(this).parent('li').addClass('active');

			var type = $('#reg-settings1 .value-list .active a').data('value');
			if (type === 'absolute')
				region01.activateAbsGraph(graphData);
			else
				region01.activateRelGraph(graphData);

			e.preventDefault();			
		});
		$('#reg-settings1 .graph-value').on('click', function(e){
			$(this).parent('li').siblings().removeClass('active');
			$(this).parent('li').addClass('active');

			$('#reg-settings1 .type-list .active .graph-type').click();

			e.preventDefault();			
		});

		//bind settings control to graph02
		$('#reg-settings2 .graph-value').on('click', function(e){
			$(this).parent('li').siblings().removeClass('active');
			$(this).parent('li').addClass('active');

			var mapId = $(this).data('map');
			region02.activateMap(mapId);

			e.preventDefault();
		});

		//bind settings control to graph03
		$('#reg-settings3 .graph-value').on('click', function(e){
			$(this).parent('li').siblings().removeClass('active');
			$(this).parent('li').addClass('active');

			var type = $(this).data('value');
			if (type === 'absolute')
				region03.activateAbsGraph(graph3a);
			else
				region03.activateRelGraph(graph3a);

			e.preventDefault();			
		});

	});
});