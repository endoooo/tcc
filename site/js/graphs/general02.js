define(['jquery', 'd3js'], function($, ignore){

	console.log('general02 required');

	return {

		activateGraph: function( type ) {
			$('#gen-graph2 .roulette .graph').removeClass().addClass('graph ' + type);

			$('#gen-graph2 .vis.active').removeClass('active').slideUp(1000, function(){
				$('#gen-graph2 .vis.' + type).addClass('active').slideDown();
			});
		}

	}

});