define(['jquery', 'd3js'], function($, ignore){

	console.log('region03 required');

	//graph config
	var graphHeight = 400;
	var graphWidth = 560;
	var catSpace = 128;
	var subSpace = 32;
	var radius = 4;
	var w = $('#reg-graph3 .graph').width();
	var h = graphHeight + (2 * subSpace);

	//scales
	var y = d3.scale.linear()
		.range([graphHeight, 0]);

	return {

		initializeGraph: function( callbackFn ) {

			//create svg
			var chart = d3.select('#reg-graph3>.graph')
				.append('svg')
				.attr('width', w)
				.attr('height', h);

			//scale adjustment
			y.domain([0, 24]);

			//horizontal axes
			var axes = chart.append('g')
				.attr('class', 'axes')
				.attr('transform', 'translate(' + catSpace + ',' + subSpace + ')');
			//axis
			axes.selectAll('line').data([0,6,12,18,24]).enter()
				.append('line')
				.attr('x1', 0)
				.attr('y1', function(d) { return y(d); })
				.attr('x2', graphWidth)
				.attr('y2', function(d) { return y(d); });
			//axes text
			axes.selectAll('text').data([0,6,12,18,24]).enter()
				.append('text')
				.text(function(d) { return d; })
				.attr('x', graphWidth/2)
				.attr('y', function(d) { return y(d) - 4; })
				.attr('text-anchor', 'middle');

			//support axes
			var support = chart.append('g')
				.attr('class', 'support')
				.attr('transform', 'translate(' + catSpace + ',0)');
			support.selectAll('line').data(['estado','região metropolitana']).enter()
				.append('line')
				.attr('x1', function(d,i) { return i * graphWidth; })
				.attr('y1', subSpace)
				.attr('x2', function(d,i) { return i * graphWidth; })
				.attr('y2', subSpace + graphHeight);
			support.selectAll('text').data(['estado','região metropolitana']).enter()
				.append('text')
				.text(function(d) { return d; })
				.attr('x', function(d,i) { return i * graphWidth; })
				.attr('y', 16)
				.attr('text-anchor', 'middle');

			callbackFn();
		},

		activateAbsGraph: function(graph) {

			$('#reg-graph3 .title').html(graph.titleText);

			d3.csv(graph.csvPath, function(csv){

				//scale adjustment
				y.domain([0, 24]);

				//chart
				var chart = d3.select('#reg-graph3 svg');

				//point 1
				chart.selectAll('circle.point1').data(csv).enter()
					.append('circle')
					.attr('cx', catSpace)
					.attr('cy', graphHeight + subSpace)
					.attr('r', radius)
					.attr('class', 'gmain point1');
				//point 1 text
				chart.selectAll('text.point1').data(csv).enter()
					.append('text')
					.attr('x', catSpace)
					.attr('dx', -8)
					.attr('y', graphHeight + subSpace)
					.attr('text-anchor', 'end')
					.attr('class', 'cat point1');
				//point 2
				chart.selectAll('circle.point2').data(csv).enter()
					.append('circle')
					.attr('cx', catSpace + graphWidth)
					.attr('cy', graphHeight + subSpace)
					.attr('r', radius)
					.attr('class', 'gmain point2');
				//point 2 text
				chart.selectAll('text.point2').data(csv).enter()
					.append('text')
					.attr('x', catSpace + graphWidth)
					.attr('dx', 8)
					.attr('y', graphHeight + subSpace)
					.attr('text-anchor', 'start')
					.attr('class', 'cat point2');
				//line
				chart.selectAll('.connection').data(csv).enter()
					.append('line')
					.attr('x1', catSpace)
					.attr('y1', graphHeight + subSpace)
					.attr('x2', catSpace + graphWidth)
					.attr('y2', graphHeight + subSpace)
					.attr('class', 'gmain connection');

				//update
				//point 1
				chart.selectAll('circle.point1').data(csv)
					.transition().duration(1000)
					.attr('cy', function(d){ return y(d['utilização estado']) + subSpace; });
				//point 1 text
				chart.selectAll('text.point1').data(csv)
					.text(function(d){ return d.estado })
					.transition().duration(1000)
					.attr('y', function(d){ return y(d['utilização estado']) + subSpace + (radius/2); });
				//point 2
				chart.selectAll('circle.point2').data(csv)
					.transition().duration(1000)
					.attr('cy', function(d){ return y(d['utilização capital']) + subSpace; });
				//point 2 text
				chart.selectAll('text.point2').data(csv)
					.text(function(d){ return d.capital })
					.transition().duration(1000)
					.attr('y', function(d){ return y(d['utilização capital']) + subSpace + (radius/2); });
				//connection
				chart.selectAll('.connection').data(csv)
					.transition().duration(1000)
					.attr('y1', function(d){ return y(d['utilização estado']) + subSpace; })
					.attr('y2', function(d){ return y(d['utilização capital']) + subSpace; });
				//axes text
				chart.selectAll('g.axes text').data([0,6,12,18,24])
					.text(function(d) { return d; });
			});
		},

		activateRelGraph: function(graph) {

			$('#reg-graph3 .title').html(graph.titleText);

			d3.csv(graph.csvPath, function(csv){

				//scale adjustment
				y.domain([0, 100]);

				//chart
				var chart = d3.select('#reg-graph3 svg');

				//point 1
				chart.selectAll('circle.point1').data(csv).enter()
					.append('circle')
					.attr('cx', catSpace)
					.attr('cy', graphHeight + subSpace)
					.attr('r', radius)
					.attr('class', 'gmain point1');
				//point 1 text
				chart.selectAll('text.point1').data(csv).enter()
					.append('text')
					.attr('x', catSpace)
					.attr('dx', -8)
					.attr('y', graphHeight + subSpace)
					.attr('text-anchor', 'end')
					.attr('class', 'cat point1');
				//point 2
				chart.selectAll('circle.point2').data(csv).enter()
					.append('circle')
					.attr('cx', catSpace + graphWidth)
					.attr('cy', graphHeight + subSpace)
					.attr('r', radius)
					.attr('class', 'gmain point2');
				//point 2 text
				chart.selectAll('text.point2').data(csv).enter()
					.append('text')
					.attr('x', catSpace + graphWidth)
					.attr('dx', 8)
					.attr('y', graphHeight + subSpace)
					.attr('text-anchor', 'start')
					.attr('class', 'cat point2');
				//line
				chart.selectAll('.connection').data(csv).enter()
					.append('line')
					.attr('x1', catSpace)
					.attr('y1', graphHeight + subSpace)
					.attr('x2', catSpace + graphWidth)
					.attr('y2', graphHeight + subSpace)
					.attr('class', 'gmain connection');

				//update
				//point 1
				chart.selectAll('circle.point1').data(csv)
					.transition().duration(1000)
					.attr('cy', function(d){ return y(d['utilização estado %']) + subSpace; });
				//point 1 text
				chart.selectAll('text.point1').data(csv)
					.text(function(d){ return d.estado })
					.transition().duration(1000)
					.attr('y', function(d){ return y(d['utilização estado %']) + subSpace + (radius/2); });
				//point 2
				chart.selectAll('circle.point2').data(csv)
					.transition().duration(1000)
					.attr('cy', function(d){ return y(d['utilização capital %']) + subSpace; });
				//point 2 text
				chart.selectAll('text.point2').data(csv)
					.text(function(d){ return d.capital })
					.transition().duration(1000)
					.attr('y', function(d){ return y(d['utilização capital %']) + subSpace + (radius/2); });
				//connection
				chart.selectAll('.connection').data(csv)
					.transition().duration(1000)
					.attr('y1', function(d){ return y(d['utilização estado %']) + subSpace; })
					.attr('y2', function(d){ return y(d['utilização capital %']) + subSpace; });
				//axes text
				chart.selectAll('g.axes text').data([0,25,50,75,100])
					.text(function(d) { return d + '%'; });

			});
		}


	}

});