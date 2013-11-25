define(['jquery', 'd3js'], function($, ignore){

	console.log('education03 required');

	//graph config
	var padding = 16;
	var spacing = 12;
	var radius = 4;
	var textSpace = 56;
	var rulerSpace = 24;
	var chartH = 400;
	var w = $('#edu-graph3 .graph').width();
	var h = chartH + (6 * padding);
	var chartW = w - textSpace - (2 * padding);

	//scales
	var x = d3.scale.linear()
		.domain([2004, 2012])
		.range([0, chartW]);
	var y = d3.scale.linear()
		.domain([0, 100])
		.range([chartH, 0]);

	//values array
	var relMaxVal = 100;
	var relValues = [0,relMaxVal*0.25,relMaxVal*0.5,relMaxVal*0.75,relMaxVal];

	return {

		initializeGraph: function( callbackFn ) {

			//create svg
			var chart = d3.select('#edu-graph3>.graph')
				.append('svg')
				.attr('width', w)
				.attr('height', h);

			//x axes
			var xAxes = chart.append('g')
				.attr('class', 'axes x-axes')
				.attr('transform', 'translate(' + textSpace + ',' + (2 * padding) + ')');
			//axis
			xAxes.selectAll('line').data([2004,2005,2008,2009,2011,2012]).enter()
				.append('line')
				.attr('x1', function(d) { return x(d); })
				.attr('y1', 0)
				.attr('x2', function(d) { return x(d); })
				.attr('y2', chartH);
			//axes text
			xAxes.selectAll('text').data([2005,2008,2009,2011]).enter()
				.append('text')
				.text(function(d) { return d; })
				.attr('x', function(d) { return x(d); })
				.attr('y', chartH + rulerSpace)
				.attr('text-anchor', 'middle');
			//axes title
			chart.append('text')
				.text('ano')
				.attr('x', chartW + textSpace)
				.attr('y', chartH + (2 * padding) + (2 * rulerSpace))
				.attr('text-anchor', 'end')
				.attr('class', 'x-title gc1');

			//y axes
			var yAxes = chart.append('g')
				.attr('class', 'axes y-axes')
				.attr('transform', 'translate(' + textSpace + ',' + (2 * padding) + ')');
			//axis
			yAxes.selectAll('line').data(relValues).enter()
				.append('line')
				.attr('x1', 0)
				.attr('y1', function(d) { return y(d); })
				.attr('x2', chartW)
				.attr('y2', function(d) { return y(d); });
			//axes text
			yAxes.selectAll('text').data(relValues).enter()
				.append('text')
				.text(function(d) { return d + '%'; })
				.attr('x', (-1 * padding))
				.attr('y', function(d) { return y(d); })
				.attr('dy', 4)
				.attr('text-anchor', 'end');
			//axes title
			chart.append('text')
				.text('Taxas (%)')
				.attr('x', textSpace)
				.attr('y', padding)
				.attr('class', 'y-title gc1');

			//y ref
			var vRef = chart.append('g')
				.attr('class', 'ref y-ref')
				.attr('transform', 'translate(' + textSpace + ',' + (2 * padding) + ')');
			//ref line
			vRef.append('line')
				.attr('x1', 0)
				.attr('y1', chartH)
				.attr('x2', chartW)
				.attr('y2', chartH);
			//ref text
			vRef.append('text')
				.text('0%')
				.attr('x', (-1 * padding))
				.attr('y', chartH)
				.attr('dy', 4)
				.attr('text-anchor', 'end');

			callbackFn();
		},

		activateGraph: function(graph, filter) {

			$('#edu-graph3 .title').html(graph.titleText);

			d3.csv(graph.csvPath, function(csv){

				//grouping by region
				var dataset = d3.nest()
					.key(function(d) {return d[graph.parameter];})
					.entries(csv)
					.filter(function(d) {return d.key === filter});

				//line generator
				var zeroLine = d3.svg.line()
					.x(function(d) { return x(d.ano) + textSpace; })
					.y(function(d) { return y(0); })
					.interpolate("linear");
				var line1 = d3.svg.line()
					.x(function(d) { return x(d.ano) + textSpace; })
					.y(function(d) { return y(d['acessam %']) + (2 * padding); })
					.interpolate("linear");
				var line2 = d3.svg.line()
					.x(function(d) { return x(d.ano) + textSpace; })
					.y(function(d) { return y(d['analfabetas %']) + (2 * padding); })
					.interpolate("linear");

				//chart
				var chart = d3.select('#edu-graph3 svg');

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
					.selectAll('circle').data(function(d){return d.values;}).enter()
					.append('circle')
					.attr('cx', function(d){return x(d.ano);})
					.attr('cy', function(d){return y(0);})
					.attr('r', 3);

				//create illiteracy lines and circles
				//lines
				chart.selectAll('path.line2').data(dataset).enter()
					.append('path')
					.attr('d', function(d){return zeroLine(d.values);})
					.attr('class', 'line2')

				//circles
				chart.selectAll('g.circles2').data(dataset).enter()
					.append('g')
					.attr('class', 'circles2')
					.attr('transform', 'translate(' + textSpace + ',' + (2 * padding) + ')')
					.selectAll('circle').data(function(d){return d.values;}).enter()
					.append('circle')
					.attr('cx', function(d){return x(d.ano);})
					.attr('cy', function(d){return y(0);})
					.attr('r', 3);

				//update internet usage lines and circles
				//lines
				chart.select('path.line1')
					.transition().duration(500)
					.attr('d', function(d){return line1(d.values);});

				//circles
				chart.select('g.circles1')
					.selectAll('circle')
					.transition().duration(500)
					.attr('cy', function(d){return y(d['acessam %']);});

				//update illiteracy lines and circles
				//lines
				chart.select('path.line2')
					.transition().duration(500)
					.attr('d', function(d){return line2(d.values);});

				//circles
				chart.select('g.circles2')
					.selectAll('circle')
					.transition().duration(500)
					.attr('cy', function(d){return y(d['analfabetas %']);});

				/*

				//users point
				chart.selectAll('circle.users').data(csv).enter()
					.append('circle')
					.attr('cx', textSpace)
					.attr('cy', chartH + (2 * padding))
					.attr('r', radius)
					.attr('class', 'gmain users interactive')
					.attr('data-state', function(d){ return d.sigla; });
				//cat text
				chart.selectAll('text.cat').data(csv).enter()
					.append('text')
					.attr('x', textSpace)
					.attr('y', chartH + (2 * padding))
					.attr('dx', radius)
					.attr('dy', (-1 * radius))
					.style('display', 'none')
					.attr('class', 'gblack cat')
					.attr('id', function(d){ return d.sigla; });

				//remove
				//users point
				chart.selectAll('circle.users').data(csv).exit()
					.transition().duration(400)
					.attr('cx', textSpace)
					.attr('cy', chartH + (2 * padding))
					.style('opacity', 0)
					.remove();
				//cat text
				chart.selectAll('text.cat').data(csv).exit()
					.transition().duration(400)
					.attr('x', textSpace)
					.attr('y', chartH + (2 * padding))
					.style('opacity', 0)
					.remove();

				//update
				//users point
				chart.selectAll('circle.users').data(csv)
					.transition().duration(1000)
					.attr('cx', function(d) { return x(d[graph.parameter]) + textSpace; })
					.attr('cy', function(d) { return y(d.utilizam) + (2 * padding); })
					.attr('data-x-val', function(d) { return d[graph.parameter]; })
					.attr('data-y-val', function(d) { return d.utilizam; });
				//cat text
				chart.selectAll('text.cat').data(csv)
					.text(function(d) { return d.sigla; })
					.transition().duration(1000)
					.attr('x', function(d) { return x(d[graph.parameter]) + textSpace; })
					.attr('y', function(d) { return y(d.utilizam) + (2 * padding); });
				//axes text
				chart.selectAll('g.x-axes text').data(xValues)
					.text(function(d) { return d; });
				chart.selectAll('g.y-axes text').data(absValues)
					.text(function(d) { return d; });
				//axes title
				chart.select('text.x-title')
					.text(xTitle);
				chart.select('text.y-title')
					.text('Acesso à internet (milhões de pessoas)');
				//ref line
				chart.selectAll('g.ref line')
					.transition().duration(1000)
					.attr('x1', 0)
					.attr('y1', chartH)
					.attr('x2', 0)
					.attr('y2', chartH);
				//ref text
				chart.selectAll('g.x-ref text')
					.text(0)
					.transition().duration(1000)
					.attr('x', 0);
				chart.selectAll('g.y-ref text')
					.text(0)
					.transition().duration(1000)
					.attr('y', chartH);

				//ref interaction
				//reset event binding first
				$('#edu-graph3 svg .interactive').on({
					mouseenter: function(e){
						var point = $(this);

						//clear previous stored data first
						var id = '#' + point.attr('data-state');
						var hVal = point.attr('data-x-val');
						var vVal = point.attr('data-y-val');

						chart.select('g.x-ref line')
							.transition().duration(200)
							.attr('x1', x(hVal))
							.attr('y1', y(vVal))
							.attr('x2', x(hVal));

						chart.select('g.y-ref line')
							.transition().duration(200)
							.attr('y1', y(vVal))
							.attr('y2', y(vVal))
							.attr('x2', x(hVal));

						chart.select('g.x-ref text')
							.text(d3.round(hVal,2))
							.transition().duration(200)
							.attr('x', x(hVal));

						chart.select('g.y-ref text')
							.text(d3.round(vVal,2))
							.transition().duration(200)
							.attr('y', y(vVal));

						$(id).fadeIn(200);
					},
					mouseleave: function(e){
						//clear previous stored data first
						$(this).removeData('state');
						var id = '#' + $(this).data('state');

						$(id).fadeOut(200);
					}
				});*/

			});
		}


	}

});