require.config({
    baseUrl: '../js',
    paths: {
        jquery: 'lib/jquery-2.0.3.min',
        d3js: 'lib/d3.v3.min'
    },
    urlArgs: 'bust=' + (new Date()).getTime()
});

require(['jquery', 'menu', 'graphs/region01', 'graphs/region02'], function($, menu, region01, region02){
	$('document').ready(function() {
		
		//initialize menu and settings
		menu.initializeMain();
		menu.initializeSettings();

		//graph parameters
		var graph1a = {
			titleText: 'Utilização da internet nos Estados do Brasil (2011)',
			csvPath: '../regiao/data/01a.csv' + '?' + Math.floor(Math.random() * 1000),
			parameter: 'estado'
		}

		var graph1b = {
			titleText: 'Utilização da internet nas regiões do Brasil  (2011)',
			csvPath: '../regiao/data/01b.csv' + '?' + Math.floor(Math.random() * 1000),
			parameter: 'estado'
		}

		//initialize graphs
		region01.initializeGraph(function(){
			region01.activateAbsGraph(graph1a);
		});
		region02.activateMap('map-abs');

		region01.teste();

		//bind settings control to graph01
		$('#reg-settings1 .graph-link').on('click', function(e){
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

			if($('#reg-settings1 input:checked').val() === 'absolute')
				region01.activateAbsGraph(graphData);
			else
				region01.activateRelGraph(graphData);

			e.preventDefault();			
		});
		$('#reg-settings1 input').on('change', function(e){
			$('#reg-settings1 .active .graph-link').click();
		});

		//bind settings control to graph02
		$('#reg-settings2 input').on('change', function(e){
			var mapId = $('#reg-settings2 input:checked').data('map');
			region02.activateMap(mapId);
		});




	});
});