define(['jquery', 'd3js'], function($, ignore){

	console.log('incoming02 required');

	//graph config
	var padding = 16;
	var spacing = 12;
	var barHeight = 4;
	var textSpace = 128;
	var rulerSpace = 24;
	var w = $('#inc-graph2 .graph').width();
	var h = (13 * barHeight) + (13 * spacing) + (3 *padding) + rulerSpace;

	//scales
	var x = d3.scale.linear()
		.range([0, w - padding - textSpace]);
	var y = d3.scale.ordinal()
		.rangeRoundBands([0,12], 1, 0);

	//values array
	var absMaxVal = 48;
	var absValues = [0,absMaxVal*0.25,absMaxVal*0.5,absMaxVal*0.75,absMaxVal];
	var relMaxVal = 100;
	var relValues = [0,relMaxVal*0.25,relMaxVal*0.5,relMaxVal*0.75,relMaxVal];

	return {

		initializeGraph: function( callbackFn ) {

			//create svg
			var chart = d3.select('#inc-graph2>.graph')
				.append('svg')
				.attr('width', w)
				.attr('height', h);

			//scale adjustment
			x.domain([0, relMaxVal]);

			//vertical axes
			var axes = chart.append('g')
				.attr('class', 'axes')
				.attr('transform', 'translate(' + textSpace + ',4)');
			//axis
			axes.selectAll('line').data(relValues).enter()
				.append('line')
				.attr('x1', function(d) { return x(d); })
				.attr('y1', 0)
				.attr('x2', function(d) { return x(d); })
				.attr('y2', 13 * (barHeight + spacing));
			//axes text
			axes.selectAll('text').data(relValues).enter()
				.append('text')
				.text(function(d) { return d; })
				.attr('x', function(d) { return x(d); })
				.attr('y', 13 * (barHeight + spacing) + padding)
				.attr('text-anchor', 'middle');				

			//ruler
			var ruler = chart.append('g')
				.attr('class', 'ruler')
				.attr('transform', 'translate(' + textSpace + ',' + (13 * (barHeight + spacing) + (3 * spacing)) + ')');
			ruler.append('path')
				.attr('d', 'M0 0 l0 8 l' + x(relMaxVal) + ' 0 l0 -8');
			ruler.append('text')
				.attr('x', x(relMaxVal/2))
				.attr('y', rulerSpace)
				.attr('text-anchor', 'middle');

			//ref
			var ref = chart.append('g')
				.attr('class', 'ref')
				.attr('transform', 'translate(' + textSpace + ',4)');
			//ref line
			ref.append('line')
				.attr('x1', 0)
				.attr('y1', 0)
				.attr('x2', 0)
				.attr('y2', 13 * (barHeight + spacing));
			//ref text
			ref.append('text')
				.text('0')
				.attr('x', 0)
				.attr('y', 13 * (barHeight + spacing) + padding)
				.attr('text-anchor', 'middle');

			callbackFn();
		},

		activateAbsGraph: function(graph) {

			$('#inc-graph2 .title').html(graph.titleText);

			d3.csv(graph.csvPath, function(csv){

				//scale adjustment
				var sorted = csv.map(function(d,i) {
					return d.utilizam;
				});
				x.domain([0, absMaxVal]);
				y.domain(sorted.sort(function(a,b){
					// return b - a;	
					return a;
				}));

				//chart
				var chart = d3.select('#inc-graph2 svg');

				//total bar
				chart.selectAll('.total').data(csv).enter()
					.append('rect')
					.attr('x', textSpace)
					.attr('y', function(d, i){ return (i * (barHeight + spacing) + barHeight); })
					.attr('width', 0)
					.attr('height', barHeight)
					.attr('class', 'gc2 total');
				//users bar
				chart.selectAll('rect.users').data(csv).enter()
					.append('rect')
					.attr('x', textSpace)
					.attr('y', function(d, i){ return (i * (barHeight + spacing) + barHeight); })
					.attr('width', 0)
					.attr('height', barHeight)
					.attr('class', 'gmain users interactive');
				//users point
				chart.selectAll('circle.users').data(csv).enter()
					.append('circle')
					.attr('cx', textSpace)
					.attr('cy', function(d, i){ return (i * (barHeight + spacing) + (1.5 * barHeight)); })
					.attr('r', barHeight)
					.attr('class', 'gmain users');
				//cat text
				chart.selectAll('text.cat').data(csv).enter()
					.append('text')
					.attr('x', textSpace)
					.attr('y', function(d, i) { return (i * barHeight) + (i * spacing) + 8; })
					.attr('dx', -8 )
					.attr('text-anchor', 'end')
					.attr('data-abs-val', null)
					.attr('class', 'gblack cat interactive');

				//remove
				//total bar
				chart.selectAll('rect.total').data(csv).exit()
					.transition().duration(400)
					.attr('width', 0)
					.remove();
				//users bar
				chart.selectAll('rect.users').data(csv).exit()
					.transition().duration(400)
					.attr('width', 0)
					.remove();
				//cat text
				chart.selectAll('text.cat').data(csv).exit()
					.transition().duration(400)
					.style('opacity', 0)
					.remove();
				//users point
				chart.selectAll('circle.users').data(csv).exit()
					.transition().duration(400)
					.attr('cx', textSpace)
					.remove();

				//update
				//total bar
				chart.selectAll('rect.total').data(csv)
					.transition().duration(1000)
					.attr('y', function(d){ return (y(d.utilizam) * (barHeight + spacing) + barHeight); })
					.attr('width', function(d) { return x(d.total); });
				//users bar
				chart.selectAll('rect.users').data(csv)
					.transition().duration(1000)
					.attr('y', function(d){ return (y(d.utilizam) * (barHeight + spacing) + barHeight); })
					.attr('width', function(d) { return x(d.utilizam); })
					.attr('data-abs-val', function(d){ return d.utilizam; });
				//users point
				chart.selectAll('circle.users').data(csv)
					.transition().duration(1000)
					.attr('cy', function(d){ return (y(d.utilizam) * (barHeight + spacing) + (1.5 * barHeight)); })
					.attr('cx', function(d) { return x(d.utilizam) + textSpace; });
				//cat text
				chart.selectAll('text.cat').data(csv)
					.text(function(d) { return d[graph.parameter]; })
					.transition().duration(1000)
					.attr('y', function(d){ return (y(d.utilizam) * (barHeight + spacing) + 8); })
					.attr('data-abs-val', function(d){ return d.utilizam; });
				//axes text
				chart.selectAll('g.axes text').data(absValues)
					.text(function(d) { return d; });
				//ruler text
				chart.select('g.ruler text')
					.text('milhões de pessoas');
				//ref line
				chart.select('g.ref line')
					.transition().duration(200)
					.attr('x1', 0)
					.attr('x2', 0);
				//ref text
				chart.select('g.ref text')
					.text(0)
					.transition().duration(200)
					.attr('x', 0);

				//ref interaction
				//reset event binding first
				$('#inc-graph2 svg .interactive').on('mouseenter', function(e){
					var val = $(this).attr('data-abs-val');				

					chart.select('g.ref line')
						.transition().duration(200)
						.attr('x1', x(val))
						.attr('x2', x(val));

					chart.select('g.ref text')
						.text(d3.round(val))
						.transition().duration(200)
						.attr('x', x(val));
				});

			});
		},

		activateRelGraph: function(graph) {

			$('#inc-graph2 .title').html(graph.titleText);

			d3.csv(graph.csvPath, function(csv){

				//scale adjustment
				var sorted = csv.map(function(d,i) {
					return d['utilizam %'];
				});
				x.domain([0, relMaxVal]);
				y.domain(sorted.sort(function(a,b){
					// return b - a;
					return a;
				}));

				//chart
				var chart = d3.select('#inc-graph2 svg');

				//total bar
				chart.selectAll('rect.total').data(csv).enter()
					.append('rect')
					.attr('x', textSpace)
					.attr('y', function(d, i) { return (i * (barHeight + spacing)); })
					.attr('width', 0)
					.attr('height', barHeight)
					.attr('class', 'gc2 total');
				//users bar
				chart.selectAll('rect.users').data(csv).enter()
					.append('rect')
					.attr('x', textSpace)
					.attr('y', function(d, i) { return (i * (barHeight + spacing)); })
					.attr('width', 0)
					.attr('height', barHeight)
					.attr('class', 'gmain users interactive');
				//users point
				chart.selectAll('circle.users').data(csv).enter()
					.append('circle')
					.attr('cx', textSpace)
					.attr('cy', function(d, i){ return (i * (barHeight + spacing) + (1.5 * barHeight)); })
					.attr('r', barHeight)
					.attr('class', 'gmain users');
				//cat text
				chart.selectAll('text.cat').data(csv).enter()
					.append('text')
					.attr('x', textSpace)
					.attr('y', function(d, i) { return (i * (barHeight + spacing) + 8); })
					.attr('dx', -8 )
					.attr('text-anchor', 'end')
					.attr('data-abs-val', null)
					.attr('class', 'gblack cat interactive');

				//remove
				//total bar
				chart.selectAll('rect.total').data(csv).exit()
					.transition().duration(400)
					.attr('width', 0)
					.remove();
				//users bar
				chart.selectAll('rect.users').data(csv).exit()
					.transition().duration(400)
					.attr('width', 0)
					.remove();
				//cat text
				chart.selectAll('text.cat').data(csv).exit()
					.transition().duration(400)
					.style('opacity', 0)
					.remove();
				//users point
				chart.selectAll('circle.users').data(csv).exit()
					.transition().duration(400)
					.attr('cx', textSpace)
					.remove();

				//update
				//total bar
				chart.selectAll('rect.total').data(csv)
					.transition().duration(1000)
					.attr('y', function(d){ return (y(d['utilizam %']) * (barHeight + spacing) + barHeight); })
					.attr('width', x(100));
				//users bar
				chart.selectAll('rect.users').data(csv)
					.transition().duration(1000)
					.attr('y', function(d){ return (y(d['utilizam %']) * (barHeight + spacing) + barHeight); })
					.attr('width', function(d) { return x(d['utilizam %']); })
					.attr('data-rel-val', function(d){ return d['utilizam %']; });
				//users point
				chart.selectAll('circle.users').data(csv)
					.transition().duration(1000)
					.attr('cy', function(d){ return (y(d['utilizam %']) * (barHeight + spacing) + (1.5 * barHeight)); })
					.attr('cx', function(d) { return x(d['utilizam %']) + textSpace; });
				//cat text
				chart.selectAll('text.cat').data(csv)
					.text(function(d) { return d[graph.parameter]; })
					.transition().duration(1000)
					.attr('y', function(d){ return (y(d['utilizam %']) * (barHeight + spacing) + 8); })
					.attr('data-rel-val', function(d){ return d['utilizam %']; });
				//axes text
				chart.selectAll('g.axes text').data(relValues)
					.text(function(d) { return d + '%'; });
				//ruler text
				chart.select('g.ruler text')
					.text('percentual de pessoas que utilizam a internet');
				//ref line
				chart.select('g.ref line')
					.transition().duration(200)
					.attr('x1', 0)
					.attr('x2', 0);
				//ref text
				chart.select('g.ref text')
					.text('0%')
					.transition().duration(200)
					.attr('x', 0);

				//ref interaction
				$('#inc-graph2 svg .interactive').on('mouseenter', function(e){
					var val = $(this).attr('data-rel-val');

					chart.select('g.ref line')
						.transition().duration(200)
						.attr('x1', x(val))
						.attr('x2', x(val));

					chart.select('g.ref text')
						.text(d3.round(val,2) + '%')
						.transition().duration(200)
						.attr('x', x(val));
				});

			});
		}


	}

});