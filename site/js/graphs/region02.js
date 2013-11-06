define(['jquery', 'd3js'], function($, ignore){

	console.log('region02 required');

	return {
		activateMap: function(mapId) {
			var map = $('#' + mapId);
			map.fadeIn(500, function(){
				$(this).siblings('.choropleth-map').fadeOut(500);
			});
		}

	}

});