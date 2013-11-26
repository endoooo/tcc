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
				.attr('class', 'x-title gblack');

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
				.attr('class', 'y-title gblack');

			//y ref
			var ref = chart.append('g')
				.attr('class', 'ref')
				.attr('transform', 'translate(' + textSpace + ',' + (2 * padding) + ')');
			//ref line
			ref.append('line')
				.attr('x1', 0)
				.attr('y1', chartH)
				.attr('x2', 0)
				.attr('y2', chartH);
			//ref text
			ref.append('text')
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
					.y(function(d) { return y(0) + (2 * padding); })
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
					.text('analfabetismo')
					.attr('x', function(d){ return x(d.ano) + textSpace; })
					.attr('y', chartH + (2 * padding))
					.attr('dx', padding)
					.attr('class', 'cat cat2');


				//update differences lines
				chart.select('g.dif').data(dataset)
					.selectAll('line').data(function(d){ return d.values; })
					.transition().duration(1000)
					.attr('y1', function(d){ return y(d['acessam %']); })
					.attr('y2', function(d){ return y(d['analfabetas %']); });

				//update illiteracy lines and circles
				//lines
				chart.select('path.line2').data(dataset)
					.transition().duration(1000)
					.attr('d', function(d){ return line2(d.values); });

				//circles
				chart.select('g.circles2').data(dataset)
					.selectAll('circle').data(function(d){ return d.values; })
					.transition().duration(1000)
					.attr('cy', function(d){ return y(d['analfabetas %']); })
					.attr('data-y-val', function(d){ return d['analfabetas %']; })
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
					.attr('cy', function(d){ return y(d['acessam %']); })
					.attr('data-y-val', function(d){ return d['acessam %']; })
					.attr('data-x-val', function(d){ return d['ano']; });

				//update cat text
				chart.selectAll('text.cat1').data(dataset[0].values)
					.filter(function(d){ return d.ano === '2011'; })
					.transition().duration(1000)
					.attr('y', function(d){ return y(d['acessam %']) + (2 * padding); });
				chart.selectAll('text.cat2').data(dataset[0].values)
					.filter(function(d){ return d.ano === '2011'; })
					.transition().duration(1000)
					.attr('y', function(d){ return y(d['analfabetas %']) + (2 * padding); });

				//ref line
				chart.selectAll('g.ref line')
					.transition().duration(200)
					.attr('x1', 0)
					.attr('y1', chartH)
					.attr('x2', 0)
					.attr('y2', chartH);
				//ref text
				chart.selectAll('g.ref text')
					.text('0%')
					.transition().duration(200)
					.attr('y', chartH);

				//ref interaction
				$('#edu-graph3 svg .interactive').on('mouseenter', function(e){
					var yVal = $(this).attr('data-y-val');
					var xVal = $(this).attr('data-x-val');

					chart.select('g.ref line')
						.transition().duration(200)
						.attr('y1', y(yVal))
						.attr('x2', x(xVal))
						.attr('y2', y(yVal));

					chart.select('g.ref text')
						.text(d3.round(yVal,2) + '%')
						.transition().duration(200)
						.attr('y', y(yVal));
				});

			});
		}


	}

});