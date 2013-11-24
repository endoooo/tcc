require.config({
    baseUrl: '../js',
    paths: {
        jquery: 'lib/jquery-2.0.3.min',
        d3js: 'lib/d3.v3.min'
    },
    urlArgs: 'bust=' + (new Date()).getTime()
});

require(['jquery', 'menu', 'graphs/incoming01', 'graphs/incoming02', 'graphs/incoming03'], function($, menu, incoming01, incoming02, incoming03){
	$('document').ready(function() {
		
		//initialize menu
		menu.initializeMain();

		//graph parameters
		var graph1a = {
			titleText: 'PIB estadual (2010) e utilização da internet (2011)',
			csvPath: '../renda/data/01a.csv' + '?' + Math.floor(Math.random() * 1000),
			parameter: 'PIB estadual 2010'
		};
		var graph1b = {
			titleText: 'Renda per capita no estado e utilização da internet (2011)',
			csvPath: '../renda/data/01a.csv' + '?' + Math.floor(Math.random() * 1000),
			parameter: 'renda per capita'
		};
		var graph2a = {
			titleText: 'Rendimento mensal per capita e utilização da internet (2011)',
			csvPath: '../renda/data/02a.csv' + '?' + Math.floor(Math.random() * 1000),
			parameter: 'rendimento'
		};
		var graph3a = {
			titleText: 'Utilização da internet por grupamento ocupacional (2011)',
			csvPath: '../renda/data/03a.csv' + '?' + Math.floor(Math.random() * 1000),
			parameter: 'grupamento ocupacional'
		};
		var graph3b = {
			titleText: 'Utilização da internet por posição na ocupação (2011)',
			csvPath: '../renda/data/03b.csv' + '?' + Math.floor(Math.random() * 1000),
			parameter: 'posição na ocupação'
		};
		var graph3c = {
			titleText: 'Utilização da internet por setor de atividade (2011)',
			csvPath: '../renda/data/03c.csv' + '?' + Math.floor(Math.random() * 1000),
			parameter: 'setor'
		};

		//initialize graphs
		incoming01.initializeGraph(function(){
			incoming01.activateAbsGraph(graph1a);
		});
		incoming02.initializeGraph(function(){
			incoming02.activateAbsGraph(graph2a);
		});
		incoming03.initializeGraph(function(){
			incoming03.activateAbsGraph(graph3a);
		});

		//bind settings control to graph01
		$('#inc-settings1 .graph-type').on('click', function(e){
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

			var type = $('#inc-settings1 .value-list .active a').data('value');
			if (type === 'absolute')
				incoming01.activateAbsGraph(graphData);
			else
				incoming01.activateRelGraph(graphData);

			e.preventDefault();			
		});
		$('#inc-settings1 .graph-value').on('click', function(e){
			$(this).parent('li').siblings().removeClass('active');
			$(this).parent('li').addClass('active');

			$('#inc-settings1 .type-list .active .graph-type').click();

			e.preventDefault();			
		});

		//bind settings control to graph02
		$('#inc-settings2 .graph-value').on('click', function(e){
			$(this).parent('li').siblings().removeClass('active');
			$(this).parent('li').addClass('active');

			var type = $(this).data('value');
			if (type === 'absolute')
				incoming02.activateAbsGraph(graph2a);
			else
				incoming02.activateRelGraph(graph2a);

			e.preventDefault();			
		});

		//bind settings control to graph03
		$('#inc-settings3 .graph-type').on('click', function(e){
			switch($(this).data('graph')) {
				case 'graph3a':
					var graphData = graph3a;
					break;
				case 'graph3b':
					var graphData = graph3b;
					break;
				case 'graph3c':
					var graphData = graph3c;
					break;
			}

			$(this).parent('li').siblings().removeClass('active');
			$(this).parent('li').addClass('active');

			var type = $('#inc-settings3 .value-list .active a').data('value');
			if (type === 'absolute')
				incoming03.activateAbsGraph(graphData);
			else
				incoming03.activateRelGraph(graphData);

			e.preventDefault();			
		});
		$('#inc-settings3 .graph-value').on('click', function(e){
			$(this).parent('li').siblings().removeClass('active');
			$(this).parent('li').addClass('active');

			$('#inc-settings3 .type-list .active .graph-type').click();

			e.preventDefault();			
		});

	});
});