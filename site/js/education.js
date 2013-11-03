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
		var graph1 = {
			titleText: 'Utilização da internet por condição de estudante (2011)',
			csvPath: '../educacao/data/001.csv' + '?' + Math.floor(Math.random() * 1000),
			parameter: 'condição de estudante',
			annotation: 'Quem estuda acessa mais a internet?'
		}

		var graph2 = {
			titleText: 'Utilização da internet por grupo de anos de estudo (2011)',
			csvPath: '../educacao/data/002.csv' + '?' + Math.floor(Math.random() * 1000),
			parameter: 'anos de estudo',
			annotation: 'Mais anos de estudo = mais acesso à internet?'
		}

		var graph3 = {
			titleText: 'Utilização da internet por rede de ensino (2011)',
			csvPath: '../educacao/data/003.csv' + '?' + Math.floor(Math.random() * 1000),
			parameter: 'rede de ensino',
			annotation: 'Alunos da rede pública acessam mais ou menos do que alunos da rede privada?'
		}

		//initialize graphs
		education01.initializeGraph(function(){
			education01.activateGraph(graph1);
		});

		//bind settings control
		$('#student-g1a').on('click', function(e){

			$(this).parent('li').siblings().removeClass('active');
			$(this).parent('li').addClass('active');

			education01.activateGraph(graph1);

			e.preventDefault();
		});

		$('#student-g1b').on('click', function(e){

			$(this).parent('li').siblings().removeClass('active');
			$(this).parent('li').addClass('active');

			education01.activateGraph(graph2);

			e.preventDefault();
		});

		$('#student-g1c').on('click', function(e){

			$(this).parent('li').siblings().removeClass('active');
			$(this).parent('li').addClass('active');

			education01.activateGraph(graph3);

			e.preventDefault();
		});
	});
});