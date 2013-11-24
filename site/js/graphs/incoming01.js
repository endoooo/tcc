define(['jquery', 'd3js'], function($, ignore){

	console.log('incoming01 required');

	//graph config
	var padding = 16;
	var spacing = 12;
	var radius = 3;
	var textSpace = 56;
	var rulerSpace = 24;
	var chartH = 400;
	var w = $('#inc-graph1 .graph').width();
	var h = chartH + (6 * padding);
	var chartW = w - textSpace - (2 * padding);

	//scales
	var x = d3.scale.linear()
		.range([0, chartW]);
	var y = d3.scale.linear()
		.range([chartH, 0]);

	//values array
	var absMaxVal = 24;
	var absValues = [0,absMaxVal*0.25,absMaxVal*0.5,absMaxVal*0.75,absMaxVal];
	var relMaxVal = 100;
	var relValues = [0,relMaxVal*0.25,relMaxVal*0.5,relMaxVal*0.75,relMaxVal];
	var pibMaxVal = 1400000;
	var pibValues = [0,pibMaxVal*0.25,pibMaxVal*0.5,pibMaxVal*0.75,pibMaxVal];
	var incMaxVal = 1800;
	var incValues = [0,incMaxVal*0.25,incMaxVal*0.5,incMaxVal*0.75,incMaxVal];

	return {

		initializeGraph: function( callbackFn ) {

			//create svg
			var chart = d3.select('#inc-graph1>.graph')
				.append('svg')
				.attr('width', w)
				.attr('height', h);

			//scale adjustment
			x.domain([0, pibMaxVal]);
			y.domain([0, absMaxVal]);

			//x axes
			var xAxes = chart.append('g')
				.attr('class', 'axes x-axes')
				.attr('transform', 'translate(' + textSpace + ',' + (2 * padding) + ')');
			//axis
			xAxes.selectAll('line').data(pibValues).enter()
				.append('line')
				.attr('x1', function(d) { return x(d); })
				.attr('y1', 0)
				.attr('x2', function(d) { return x(d); })
				.attr('y2', chartH);
			//axes text
			xAxes.selectAll('text').data(pibValues).enter()
				.append('text')
				.text(function(d) { return d; })
				.attr('x', function(d) { return x(d); })
				.attr('y', chartH + rulerSpace)
				.attr('text-anchor', 'middle');
			//axes title
			chart.append('text')
				.text('PIB do estado (milhões de reais)')
				.attr('x', chartW + textSpace)
				.attr('y', chartH + (2 * padding) + (2 * rulerSpace))
				.attr('text-anchor', 'end')
				.attr('class', 'x-title gc1');

			//y axes
			var yAxes = chart.append('g')
				.attr('class', 'axes y-axes')
				.attr('transform', 'translate(' + textSpace + ',' + (2 * padding) + ')');
			//axis
			yAxes.selectAll('line').data(absValues).enter()
				.append('line')
				.attr('x1', 0)
				.attr('y1', function(d) { return y(d); })
				.attr('x2', chartW)
				.attr('y2', function(d) { return y(d); });
			//axes text
			yAxes.selectAll('text').data(absValues).enter()
				.append('text')
				.text(function(d) { return d; })
				.attr('x', (-1 * padding))
				.attr('y', function(d) { return y(d); })
				.attr('dy', 4)
				.attr('text-anchor', 'end');
			//axes title
			chart.append('text')
				.text('Acesso à internet (milhões de pessoas)')
				.attr('x', textSpace)
				.attr('y', padding)
				.attr('class', 'y-title gc1');

			//x ref
			var hRef = chart.append('g')
				.attr('class', 'ref x-ref')
				.attr('transform', 'translate(' + textSpace + ',' + (2 * padding) + ')');
			//ref line
			hRef.append('line')
				.attr('x1', 0)
				.attr('y1', chartH)
				.attr('x2', 0)
				.attr('y2', chartH);
			//ref text
			hRef.append('text')
				.text('0')
				.attr('x', 0)
				.attr('y', chartH + rulerSpace)
				.attr('text-anchor', 'middle');

			//y ref
			var vRef = chart.append('g')
				.attr('class', 'ref y-ref')
				.attr('transform', 'translate(' + textSpace + ',' + (2 * padding) + ')');
			//ref line
			vRef.append('line')
				.attr('x1', 0)
				.attr('y1', chartH)
				.attr('x2', 0)
				.attr('y2', chartH);
			//ref text
			vRef.append('text')
				.text('0')
				.attr('x', (-1 * padding))
				.attr('y', chartH)
				.attr('dy', 4)
				.attr('text-anchor', 'end');

			callbackFn();
		},

		activateAbsGraph: function(graph) {

			$('#inc-graph1 .title').html(graph.titleText);

			d3.csv(graph.csvPath, function(csv){

				//scale adjustment
				if (graph.parameter === 'PIB estadual 2010') {
					x.domain([0, pibMaxVal]);
					var xValues = pibValues;
					var xTitle = 'PIB do estado (milhões de reais)';
				}
				else {
					x.domain([0, incMaxVal]);
					var xValues = incValues;
					var xTitle = 'Renda mensal per capita (R$)';
				}
				y.domain([0, absMaxVal]);

				//chart
				var chart = d3.select('#inc-graph1 svg');

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
				$('#inc-graph1 svg .interactive').on({
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
					mouseout: function(e){
						//clear previous stored data first
						$(this).removeData('state');
						var id = '#' + $(this).data('state');

						$(id).fadeOut(200);
					}
				});

			});
		},

		activateRelGraph: function(graph) {

			$('#inc-graph1 .title').html(graph.titleText);

			d3.csv(graph.csvPath, function(csv){

				//scale adjustment
				if (graph.parameter === 'PIB estadual 2010') {
					x.domain([0, pibMaxVal]);
					var xValues = pibValues;
					var xTitle = 'PIB do estado (milhões de reais)';
				}
				else {
					x.domain([0, incMaxVal]);
					var xValues = incValues;
					var xTitle = 'Renda mensal per capita (R$)';
				}
				y.domain([0, relMaxVal]);

				//chart
				var chart = d3.select('#inc-graph1 svg');

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
					.attr('cy', function(d) { return y(d['utilizam %']) + (2 * padding); })
					.attr('data-x-val', function(d) { return d[graph.parameter]; })
					.attr('data-y-val', function(d) { return d['utilizam %']; });
				//cat text
				chart.selectAll('text.cat').data(csv)
					.text(function(d) { return d.estado; })
					.transition().duration(1000)
					.attr('x', function(d) { return x(d[graph.parameter]) + textSpace; })
					.attr('y', function(d) { return y(d['utilizam %']) + (2 * padding); });
				//axes text
				chart.selectAll('g.x-axes text').data(xValues)
					.text(function(d) { return d; });
				chart.selectAll('g.y-axes text').data(relValues)
					.text(function(d) { return d + '%'; });
				//axes title
				chart.select('text.x-title')
					.text(xTitle);
				chart.select('text.y-title')
					.text('Acesso à internet (relativo à população do estado)');
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
					.text('0%')
					.transition().duration(1000)
					.attr('y', chartH);

				//ref interaction
				//reset event binding first
				$('#inc-graph1 svg .interactive').on({
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
							.text(d3.round(vVal,2) + '%')
							.transition().duration(200)
							.attr('y', y(vVal));

						$(id).fadeIn(200);
					},
					mouseout: function(e){
						//clear previous stored data first
						$(this).removeData('state');
						var id = '#' + $(this).data('state');

						$(id).fadeOut(200);
					}
				});

			});
		}


	}

});