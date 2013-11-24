define(['jquery', 'd3js'], function($, ignore){

	console.log('education01 required');

	return {
		activateGraph1: function() {
			$('#edu-1a-piece').animate({
				width: '100%',
				top: 0,
				left: 0,
				opacity: 1
			}, 1000);
			$('#edu-1b').animate({ opacity: 0 }, 500, function(){
				$('#edu-graph1 .title').html('Acesso a internet por situação de estudante (2011)');
				$('#edu-1a').animate({ opacity: 1 }, 1000);
			});
		},
		activateGraph2: function() {
			$('#edu-1a-piece').animate({
				width: '2000%',
				top: '-100%',
				left: '-1050%',
				opacity: 0
			}, 1000);
			$('#edu-1a').animate({ opacity: 0 }, 500, function(){
				$('#edu-graph1 .title').html('Acesso a internet dos estudantes por rede de ensino (2011)');
				$('#edu-1b').animate({ opacity: 1 }, 1000);
			});
		}
	}

});