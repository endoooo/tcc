define(['jquery', 'd3js'], function($, ignore){

	console.log('education01 required');

	//graph config
	var padding = 16;
	var spacing = 4;
	var barHeight = 24;
	var w = $(window).width() - (4 * padding);
	var h = (5 * barHeight) + (5 * spacing) + padding;

	return {

		initializeGraph: function( callbackFn ) {
			d3.csv('../educacao/data/001.csv' + '?' + Math.floor(Math.random() * 1000), function(csv){

				//create svg
				var chart = d3.select('#edu-graph1>.graph')
					.append('svg')
					.attr('width', w)
					.attr('height', h);

				//scale
				var x = d3.scale.linear()
					.domain([0, 150])
					.range([0, w - (4 * padding)]);

				//mark
				var mark = chart.append('g')
					.attr('class', 'mark')
					.attr('transform', 'translate(' + padding + ',0)');
				//marks
				mark.selectAll('line')
					.data([0,0])
					.enter().append('line')
					.attr('x1', function(d) { return x(d); })
					.attr('x2', function(d) { return x(d); })
					.attr('y1', h-padding-spacing)
					.attr('y2', h-padding);
				//marks text
				mark.selectAll('text')
					.data([0,0])
					.enter().append('text')
					.text(function(d) { return d + ' mil.'; })
					.attr('x', function(d) { return x(d); })
					.attr('y', h)
					.attr('text-anchor', 'middle');

				callbackFn();

			});
		},

		activateAbsGraph: function(graph) {

			$('#edu-graph1 .title').html(graph.titleText);

			d3.csv(graph.csvPath, function(csv){

				//scale
				var x = d3.scale.linear()
					.domain([0, 150])
					.range([0, w - (4 * padding)]);

				//min/max
				var max = d3.max(csv, function(data) {
					return +data.total;
				});
				var min = d3.min(csv, function(data) {
					return +data.total;
				});

				//chart
				var chart = d3.select('#edu-graph1 svg');

				//total bar
				chart.selectAll('rect.total').data(csv).enter()
					.append('rect')
					.attr('x', padding)
					.attr('y', function(d, i) { return (i * barHeight) + (i * spacing); })
					.attr('width', 0)
					.attr('height', barHeight)
					.attr('class', 'gc2 total');
				//users bar
				chart.selectAll('rect.users').data(csv).enter()
					.append('rect')
					.attr('x', padding)
					.attr('y', function(d, i) { return (i * barHeight) + (i * spacing); })
					.attr('width', 0)
					.attr('height', barHeight)
					.attr('class', 'gmain users');
				//users text
				chart.selectAll('text.users').data(csv).enter()
					.append('text')
					.attr('y', function(d, i) { return (i * barHeight) + (i * spacing) + 16; })
					.attr('x', padding)
					.attr('text-anchor', 'middle')
					.attr('class', 'gwhite users');
				//cat text
				chart.selectAll('text.cat').data(csv).enter()
					.append('text')
					.attr('y', function(d, i) { return (i * barHeight) + (i * spacing) + (barHeight/2); })
					.attr('x', padding)
					.attr('dx', 8 )
					.attr('class', 'gblack cat');

				//update
				//total bar
				chart.selectAll('rect.total').data(csv)
					.transition().duration(500)
					.attr('width', function(d) { return x(d.total); });
				//users bar
				chart.selectAll('rect.users').data(csv)
					.transition().duration(500)
					.attr('width', function(d) { return x(d.utilizam); });
				//users text
				chart.selectAll('text.users').data(csv)
					.text(function(d) { return d['utilizam %'] + '%'; })
					.transition().duration(500)
					.attr('x', function(d) { return (padding + x(d.utilizam / 2)); });
				//cat text
				chart.selectAll('text.cat').data(csv)
					.text(function(d) { return d[graph.parameter]; })
					.transition().duration(500)
					.attr('x', function(d) { return (padding + x(d.total)); });
				//marks
				chart.select('g.mark').selectAll('line').data([min,max])
					.transition().duration(500)
					.attr('x1', function(d) { return x(d); })
					.attr('x2', function(d) { return x(d); });
				//marks text
				chart.select('g.mark').selectAll('text').data([min,max])
					.transition().duration(500)
					.text(function(d) { return d + ' mil.'; })
					.attr('x', function(d) { return x(d); });

				//remove
				//total bar
				chart.selectAll('rect.total').data(csv).exit()
					.transition().duration(500)
					.attr('width', 0)
					.remove();
				//users bar
				chart.selectAll('rect.users').data(csv).exit()
					.transition().duration(500)
					.attr('width', 0)
					.remove();
				//users text
				chart.selectAll('text.users').data(csv).exit()
					.transition().duration(500)
					.attr('x', padding)
					.remove();
				//cat text
				chart.selectAll('text.cat').data(csv).exit()
					.transition().duration(500)
					.attr('fill', 'white')
					.attr('x', padding)
					.remove();

			});
		},

		activateRelGraph: function(graph) {

			$('#edu-graph1 .title').html(graph.titleText);

			d3.csv(graph.csvPath, function(csv){

				//scale
				var x = d3.scale.linear()
					.domain([0, 100])
					.range([0, w - (12 * padding)]);

				//min/max
				var max = d3.max(csv, function(data) {
					return +data['utilizam %'];
				});
				var min = d3.min(csv, function(data) {
					return +data['utilizam %'];
				});

				//chart
				var chart = d3.select('#edu-graph1 svg');

				//total bar
				chart.selectAll('rect.total').data(csv).enter()
					.append('rect')
					.attr('x', padding)
					.attr('y', function(d, i) { return (i * barHeight) + (i * spacing); })
					.attr('width', 0)
					.attr('height', barHeight)
					.attr('class', 'gc2 total');
				//users bar
				chart.selectAll('rect.users').data(csv).enter()
					.append('rect')
					.attr('x', padding)
					.attr('y', function(d, i) { return (i * barHeight) + (i * spacing); })
					.attr('width', 0)
					.attr('height', barHeight)
					.attr('class', 'gmain users');
				//users text
				chart.selectAll('text.users').data(csv).enter()
					.append('text')
					.attr('y', function(d, i) { return (i * barHeight) + (i * spacing) + 16; })
					.attr('x', padding)
					.attr('text-anchor', 'middle')
					.attr('class', 'gwhite users');
				//cat text
				chart.selectAll('text.cat').data(csv).enter()
					.append('text')
					.attr('y', function(d, i) { return (i * barHeight) + (i * spacing) + (barHeight/2); })
					.attr('x', padding)
					.attr('dx', 8 )
					.attr('class', 'gblack cat');

				//update
				//total bar
				chart.selectAll('rect.total').data(csv)
					.transition().duration(500)
					.attr('width', x(100));
				//users bar
				chart.selectAll('rect.users').data(csv)
					.transition().duration(500)
					.attr('width', function(d) { return x(d['utilizam %']); });
				//users text
				chart.selectAll('text.users').data(csv)
					.text(function(d) { return d['utilizam %'] + '%'; })
					.transition().duration(500)
					.attr('x', function(d) { return (padding + x(d['utilizam %'] / 2)); });
				//cat text
				chart.selectAll('text.cat').data(csv)
					.text(function(d) { return d[graph.parameter]; })
					.transition().duration(500)
					.attr('x', padding + x(100));
				//marks
				chart.select('g.mark').selectAll('line').data([min,max])
					.transition().duration(500)
					.attr('x1', function(d) { return x(d); })
					.attr('x2', function(d) { return x(d); });
				//marks text
				chart.select('g.mark').selectAll('text').data([min,max])
					.transition().duration(500)
					.text(function(d,i) { return (i === 0) ? 'mín.' : 'máx.'; })
					.attr('x', function(d) { return x(d); });

				//remove
				//total bar
				chart.selectAll('rect.total').data(csv).exit()
					.transition().duration(500)
					.attr('width', 0)
					.remove();
				//users bar
				chart.selectAll('rect.users').data(csv).exit()
					.transition().duration(500)
					.attr('width', 0)
					.remove();
				//users text
				chart.selectAll('text.users').data(csv).exit()
					.transition().duration(500)
					.attr('x', padding)
					.remove();
				//cat text
				chart.selectAll('text.cat').data(csv).exit()
					.transition().duration(500)
					.attr('fill', 'white')
					.attr('x', padding)
					.remove();

			});
		}


	}

});