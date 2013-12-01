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

require(['jquery', 'menu', 'notes', 'graphs/general01', 'graphs/general02'], function($, menu, notes, general01, general02){
	$('document').ready(function() {
		
		//initialize menu and notes
		menu.initializeMain();
		notes.set();

		//graph parameters
		var graph1a = {
			titleText: 'População e acesso à internet - Brasil (2005 - 2011)',
			csvPath: '../visao-geral/data/01a.csv' + '?' + Math.floor(Math.random() * 1000),
			parameter: 'local'
		}

		//initialize graphs
		general01.initializeGraph(function(){
			general01.activateAbsGraph(graph1a, 'Brasil');
		});
		$('#gen-graph2 .edu').addClass('active').show();

		//bind settings control to graph01
		$('#gen-settings1 .graph-type').on('click', function(e){
			$(this).parent('li').siblings().removeClass('active');
			$(this).parent('li').addClass('active');

			var region = $(this).data('region');

			var type = $('#gen-settings1 .value-list .active a').data('value');
			if (type === 'absolute')
				general01.activateAbsGraph(graph1a, region);
			else
				general01.activateGrwGraph(graph1a, region);

			e.preventDefault();			
		});
		$('#gen-settings1 .graph-value').on('click', function(e){
			$(this).parent('li').siblings().removeClass('active');
			$(this).parent('li').addClass('active');

			$('#gen-settings1 .type-list .active .graph-type').click();

			e.preventDefault();			
		});

		//bind settings control to graph02
		$('#gen-settings2 .graph-type').on('click', function(e){
			$(this).parent('li').siblings().removeClass('active');
			$(this).parent('li').addClass('active');

			var type = $(this).attr('data-view');

			general02.activateGraph(type);

			e.preventDefault();			
		});


	});
});