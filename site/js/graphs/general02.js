define(['jquery', 'd3js'], function($, ignore){

	console.log('general02 required');

	return {

		activateGraph: function( type ) {
			$('#gen-graph2 .svg .graph').removeClass().addClass('graph ' + type);
		},

		activateAbsGraph: function(graph, filter) {

			$('#gen-graph1 .title').html(graph.titleText);

			d3.csv(graph.csvPath, function(csv){

				//scale adjustment
				y.domain([0, absMaxVal]);

				//grouping by region
				var dataset = d3.nest()
					.key(function(d) {return d[graph.parameter];})
					.entries(csv)
					.filter(function(d) {return d.key === filter});

				//line generator
				var zeroLine = d3.svg.line()
					.x(function(d) { return x(d.ano) + textSpace; })
					.y(function(d) { return y(0) + (2 * padding); })
					.interpolate("linear");
				var line1 = d3.svg.line()
					.x(function(d) { return x(d.ano) + textSpace; })
					.y(function(d) { return y(d['acessam']) + (2 * padding); })
					.interpolate("linear");
				var line2 = d3.svg.line()
					.x(function(d) { return x(d.ano) + textSpace; })
					.y(function(d) { return y(d['população']) + (2 * padding); })
					.interpolate("linear");

				//chart
				var chart = d3.select('#gen-graph1 svg');

				//create differences lines
				chart.selectAll('g.dif').data(dataset).enter()
					.append('g')
					.attr('transform', 'translate(' + textSpace + ',' + (2 * padding) + ')')
					.attr('class', 'dif')
					.selectAll('line').data(function(d){ return d.values; }).enter()
					.append('line')
					.attr('x1', function(d){ return x(d.ano); })
					.attr('y1', chartH)
					.attr('x2', function(d){ return x(d.ano); })
					.attr('y2', chartH)
					.attr('stroke', 'black');

				//create population lines and circles
				//lines
				chart.selectAll('path.line2').data(dataset).enter()
					.append('path')
					.attr('d', function(d){return zeroLine(d.values); })
					.attr('class', 'line2')

				//circles
				chart.selectAll('g.circles2').data(dataset).enter()
					.append('g')
					.attr('class', 'circles2')
					.attr('transform', 'translate(' + textSpace + ',' + (2 * padding) + ')')
					.selectAll('circle').data(function(d){ return d.values; }).enter()
					.append('circle')
					.attr('cx', function(d){ return x(d.ano); })
					.attr('cy', function(d){ return y(0); })
					.attr('r', 4)
					.attr('class', 'interactive');

				//create internet usage lines and circles
				//lines
				chart.selectAll('path.line1').data(dataset).enter()
					.append('path')
					.attr('d', function(d){return zeroLine(d.values);})
					.attr('class', 'line1')

				//circles
				chart.selectAll('g.circles1').data(dataset).enter()
					.append('g')
					.attr('class', 'circles1')
					.attr('transform', 'translate(' + textSpace + ',' + (2 * padding) + ')')
					.selectAll('circle').data(function(d){ return d.values; }).enter()
					.append('circle')
					.attr('cx', function(d){ return x(d.ano); })
					.attr('cy', function(d){ return y(0); })
					.attr('r', 4)
					.attr('class', 'interactive');

				//create cat text
				chart.selectAll('text.cat1').data(dataset[0].values).enter()
					.append('text')
					.filter(function(d){ return d.ano === '2011'; })
					.text('acesso à internet')
					.attr('x', function(d){ return x(d.ano) + textSpace; })
					.attr('y', chartH + (2 * padding))
					.attr('dx', padding)
					.attr('class', 'cat cat1');
				chart.selectAll('text.cat2').data(dataset[0].values).enter()
					.append('text')
					.filter(function(d){ return d.ano === '2011'; })
					.text('população')
					.attr('x', function(d){ return x(d.ano) + textSpace; })
					.attr('y', chartH + (2 * padding))
					.attr('dx', padding)
					.attr('class', 'cat cat2');

				//update differences lines
				chart.select('g.dif').data(dataset)
					.selectAll('line').data(function(d){ return d.values; })
					.transition().duration(1000)
					.attr('y1', function(d){ return y(d['acessam']); })
					.attr('y2', function(d){ return y(d['população']); });

				//update population lines and circles
				//lines
				chart.select('path.line2').data(dataset)
					.transition().duration(1000)
					.attr('d', function(d){ return line2(d.values); });

				//circles
				chart.select('g.circles2').data(dataset)
					.selectAll('circle').data(function(d){ return d.values; })
					.transition().duration(1000)
					.attr('cy', function(d){ return y(d['população']); })
					.attr('data-y-val', function(d){ return d['população']; })
					.attr('data-x-val', function(d){ return d['ano']; });

				//update internet usage lines and circles
				//lines
				chart.select('path.line1').data(dataset)
					.transition().duration(1000)
					.attr('d', function(d){ return line1(d.values); });

				//circles
				chart.select('g.circles1').data(dataset)
					.selectAll('circle').data(function(d){ return d.values; })
					.transition().duration(1000)
					.attr('cy', function(d){ return y(d['acessam']); })
					.attr('data-y-val', function(d){ return d['acessam']; })
					.attr('data-x-val', function(d){ return d['ano']; });

				//update cat text
				chart.selectAll('text.cat1').data(dataset[0].values)
					.filter(function(d){ return d.ano === '2011'; })
					.transition().duration(1000)
					.attr('y', function(d){ return y(d['acessam']) + (2 * padding); });
				chart.selectAll('text.cat2').data(dataset[0].values)
					.filter(function(d){ return d.ano === '2011'; })
					.transition().duration(1000)
					.attr('y', function(d){ return y(d['população']) + (2 * padding); });

				//axes text
				d3.select('g.y-axes').selectAll('text').data(absValues)
					.text(function(d) { return d; });

				//ref line
				chart.selectAll('g.ref line')
					.transition().duration(200)
					.attr('x1', 0)
					.attr('y1', chartH)
					.attr('x2', 0)
					.attr('y2', chartH);
				//ref text
				chart.selectAll('g.ref text')
					.text('0')
					.transition().duration(200)
					.attr('y', chartH);

				//ref interaction
				$('#gen-graph1 svg .interactive').on('mouseenter', function(e){
					var yVal = $(this).attr('data-y-val');
					var xVal = $(this).attr('data-x-val');

					chart.select('g.ref line')
						.transition().duration(200)
						.attr('y1', y(yVal))
						.attr('x2', x(xVal))
						.attr('y2', y(yVal));

					chart.select('g.ref text')
						.text(d3.round(yVal,2))
						.transition().duration(200)
						.attr('y', y(yVal));
				});

			});
		},

		activateGrwGraph: function(graph, filter) {

			$('#gen-graph1 .title').html(graph.titleText);

			d3.csv(graph.csvPath, function(csv){

				//scale adjustment
				y.domain([0, grwMaxVal]);

				//grouping by region
				var dataset = d3.nest()
					.key(function(d) {return d[graph.parameter];})
					.entries(csv)
					.filter(function(d) {return d.key === filter});

				//line generator
				var zeroLine = d3.svg.line()
					.x(function(d) { return x(d.ano) + textSpace; })
					.y(function(d) { return y(0) + (2 * padding); })
					.interpolate("linear");
				var line1 = d3.svg.line()
					.x(function(d) { return x(d.ano) + textSpace; })
					.y(function(d) { return y(d['crescimento acesso']) + (2 * padding); })
					.interpolate("linear");
				var line2 = d3.svg.line()
					.x(function(d) { return x(d.ano) + textSpace; })
					.y(function(d) { return y(d['crescimento população']) + (2 * padding); })
					.interpolate("linear");

				//chart
				var chart = d3.select('#gen-graph1 svg');

				//create differences lines
				chart.selectAll('g.dif').data(dataset).enter()
					.append('g')
					.attr('transform', 'translate(' + textSpace + ',' + (2 * padding) + ')')
					.attr('class', 'dif')
					.selectAll('line').data(function(d){ return d.values; }).enter()
					.append('line')
					.attr('x1', function(d){ return x(d.ano); })
					.attr('y1', chartH)
					.attr('x2', function(d){ return x(d.ano); })
					.attr('y2', chartH)
					.attr('stroke', 'black');

				//create illiteracy lines and circles
				//lines
				chart.selectAll('path.line2').data(dataset).enter()
					.append('path')
					.attr('d', function(d){return zeroLine(d.values); })
					.attr('class', 'line2')

				//circles
				chart.selectAll('g.circles2').data(dataset).enter()
					.append('g')
					.attr('class', 'circles2')
					.attr('transform', 'translate(' + textSpace + ',' + (2 * padding) + ')')
					.selectAll('circle').data(function(d){ return d.values; }).enter()
					.append('circle')
					.attr('cx', function(d){ return x(d.ano); })
					.attr('cy', function(d){ return y(0); })
					.attr('r', 4)
					.attr('class', 'interactive');

				//create internet usage lines and circles
				//lines
				chart.selectAll('path.line1').data(dataset).enter()
					.append('path')
					.attr('d', function(d){return zeroLine(d.values);})
					.attr('class', 'line1')

				//circles
				chart.selectAll('g.circles1').data(dataset).enter()
					.append('g')
					.attr('class', 'circles1')
					.attr('transform', 'translate(' + textSpace + ',' + (2 * padding) + ')')
					.selectAll('circle').data(function(d){ return d.values; }).enter()
					.append('circle')
					.attr('cx', function(d){ return x(d.ano); })
					.attr('cy', function(d){ return y(0); })
					.attr('r', 4)
					.attr('class', 'interactive');

				//create cat text
				chart.selectAll('text.cat1').data(dataset[0].values).enter()
					.append('text')
					.filter(function(d){ return d.ano === '2011'; })
					.text('acesso à internet')
					.attr('x', function(d){ return x(d.ano) + textSpace; })
					.attr('y', chartH + (2 * padding))
					.attr('dx', padding)
					.attr('class', 'cat cat1');
				chart.selectAll('text.cat2').data(dataset[0].values).enter()
					.append('text')
					.filter(function(d){ return d.ano === '2011'; })
					.text('população')
					.attr('x', function(d){ return x(d.ano) + textSpace; })
					.attr('y', chartH + (2 * padding))
					.attr('dx', padding)
					.attr('class', 'cat cat2');

				//update differences lines
				chart.select('g.dif').data(dataset)
					.selectAll('line').data(function(d){ return d.values; })
					.transition().duration(1000)
					.attr('y1', function(d){ return y(d['crescimento acesso']); })
					.attr('y2', function(d){ return y(d['crescimento população']); });

				//update illiteracy lines and circles
				//lines
				chart.select('path.line2').data(dataset)
					.transition().duration(1000)
					.attr('d', function(d){ return line2(d.values); });

				//circles
				chart.select('g.circles2').data(dataset)
					.selectAll('circle').data(function(d){ return d.values; })
					.transition().duration(1000)
					.attr('cy', function(d){ return y(d['crescimento população']); })
					.attr('data-y-val', function(d){ return d['crescimento população']; })
					.attr('data-x-val', function(d){ return d['ano']; });

				//update internet usage lines and circles
				//lines
				chart.select('path.line1').data(dataset)
					.transition().duration(1000)
					.attr('d', function(d){ return line1(d.values); });

				//circles
				chart.select('g.circles1').data(dataset)
					.selectAll('circle').data(function(d){ return d.values; })
					.transition().duration(1000)
					.attr('cy', function(d){ return y(d['crescimento acesso']); })
					.attr('data-y-val', function(d){ return d['crescimento acesso']; })
					.attr('data-x-val', function(d){ return d['ano']; });

				//update cat text
				chart.selectAll('text.cat1').data(dataset[0].values)
					.filter(function(d){ return d.ano === '2011'; })
					.transition().duration(1000)
					.attr('y', function(d){ return y(d['crescimento acesso']) + (2 * padding); });
				chart.selectAll('text.cat2').data(dataset[0].values)
					.filter(function(d){ return d.ano === '2011'; })
					.transition().duration(1000)
					.attr('y', function(d){ return y(d['crescimento população']) + (2 * padding); });

				//axes text
				d3.select('g.y-axes').selectAll('text').data(grwValues)
					.text(function(d) { return d; });

				//ref line
				chart.selectAll('g.ref line')
					.transition().duration(200)
					.attr('x1', 0)
					.attr('y1', chartH)
					.attr('x2', 0)
					.attr('y2', chartH);
				//ref text
				chart.selectAll('g.ref text')
					.text('0')
					.transition().duration(200)
					.attr('y', chartH);

				//ref interaction
				$('#gen-graph1 svg .interactive').on('mouseenter', function(e){
					var yVal = $(this).attr('data-y-val');
					var xVal = $(this).attr('data-x-val');

					chart.select('g.ref line')
						.transition().duration(200)
						.attr('y1', y(yVal))
						.attr('x2', x(xVal))
						.attr('y2', y(yVal));

					chart.select('g.ref text')
						.text(d3.round(yVal,2))
						.transition().duration(200)
						.attr('y', y(yVal));
				});

			});
		}


	}

});