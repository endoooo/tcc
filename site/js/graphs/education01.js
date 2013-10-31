define(['jquery', 'd3js'], function($, ignore){

	console.log('education graphs required');

	//graph config
	var padding = 16;
	var w = 940;
	var h = 300;

	//scale
	var x = d3.scale.linear()
		.domain([0, 129450])
		.range(["0px", "800px"]);

	return {

		initializeSettings: function() {

			var edu01 = this;
			
			$('#student-g1a').on('click', function(e){

				$(this).parent('li').siblings().removeClass('active');
				$(this).parent('li').addClass('active');

				graph = {
					titleText: 'Utilização da internet por condição de estudante (2011)',
					csvPath: '../educacao/data/001.csv',
					parameter: 'condição de estudante'
				}

				edu01.activateGraph(graph);

				e.preventDefault();
			});

			$('#student-g1b').on('click', function(e){

				$(this).parent('li').siblings().removeClass('active');
				$(this).parent('li').addClass('active');

				graph = {
					titleText: 'Utilização da internet por grupo de anos de estudo (2011)',
					csvPath: '../educacao/data/002.csv',
					parameter: 'anos de estudo'
				}

				edu01.activateGraph(graph);

				e.preventDefault();
			});

			$('#student-g1c').on('click', function(e){

				$(this).parent('li').siblings().removeClass('active');
				$(this).parent('li').addClass('active');

				graph = {
					titleText: 'Utilização da internet por rede de ensino (2011)',
					csvPath: '../educacao/data/003.csv',
					parameter: 'rede de ensino'
				}

				edu01.activateGraph(graph);

				e.preventDefault();
			});
		},

		initializeGraph: function() {
			d3.csv('../educacao/data/001.csv', function(csv){

				//chart
				var chart = d3.select('#graph1>.graph')
					.append('svg')
					.attr('width', w)
					.attr('height', h);

				//total bar
				chart.selectAll('rect.total').data(csv).enter()
					.append('rect')
					.attr('y', function(d, i) { return (i * 24) + (i * padding); })
					.attr('width', function(d) { return x(d.total); })
					.attr('height', 24)
					.attr('class', 'gc2 total');
				//users bar
				chart.selectAll('rect.users').data(csv).enter()
					.append('rect')
					.attr('y', function(d, i) { return (i * 24) + (i * padding); })
					.attr('width', function(d) { return x(d.utilizam); })
					.attr('height', 24)
					.attr('class', 'gmain users');
				//users text
				chart.selectAll('text.users').data(csv).enter()
					.append('text')
					.text(function(d) { return d['utilizam %'] + '%'; })
					.attr('y', function(d, i) { return (i * 24) + (i * padding) + 16; })
					.attr('x', function(d) { return x(d.utilizam / 2); })
					.attr('text-anchor', 'middle')
					.attr('class', 'gw users');
				//non-users text
				chart.selectAll('text.non-users').data(csv).enter()
					.append('text')
					.text(function(d) { return d['não utilizam %'] + '%'; })
					.attr('y', function(d, i) { return (i * 24) + (i * padding) + 16; })
					.attr('x', function(d) { return x((d.utilizam * 1) + (d['não utilizam'] / 2)); })
					.attr('text-anchor', 'middle')
					.attr('class', 'gw non-users');
				//total text
				chart.selectAll('text.total').data(csv).enter()
					.append('text')
					.text(function(d) { return d.total + '000'; })
					.attr('y', function(d, i) { return (i * 24) + (i * padding) + 12; })
					.attr('x', function(d) { return x(d.total); })
					.attr('dx', 8 )
					.attr('class', 'gc2 total');
				//cat text
				chart.selectAll('text.cat').data(csv).enter()
					.append('text')
					.text(function(d) { return d['condição de estudante'] + 's'; })
					.attr('y', function(d, i) { return (i * 24) + (i * padding) + 24; })
					.attr('x', function(d) { return x(d.total); })
					.attr('dx', 8 )
					.attr('class', 'gc2 cat');

			});
		},

		activateGraph: function(graph) {
			
			$('#graph1-title').html(graph.titleText);

			d3.csv(graph.csvPath, function(csv){

				//chart
				var chart = d3.select('#graph1>.graph svg');

				//total bar
				chart.selectAll('rect.total').data(csv).enter()
					.append('rect')
					.attr('y', function(d, i) { return (i * 24) + (i * padding); })
					.attr('width', 0)
					.attr('height', 24)
					.attr('class', 'gc2 total');
				//users bar
				chart.selectAll('rect.users').data(csv).enter()
					.append('rect')
					.attr('y', function(d, i) { return (i * 24) + (i * padding); })
					.attr('width', 0)
					.attr('height', 24)
					.attr('class', 'gmain users');
				//users text
				chart.selectAll('text.users').data(csv).enter()
					.append('text')
					.text(function(d) { return d['utilizam %'] + '%'; })
					.attr('y', function(d, i) { return (i * 24) + (i * padding) + 16; })
					.attr('x', 0)
					.attr('text-anchor', 'middle')
					.attr('class', 'gw users');
				//non-users text
				chart.selectAll('text.non-users').data(csv).enter()
					.append('text')
					.text(function(d) { return d['não utilizam %'] + '%'; })
					.attr('y', function(d, i) { return (i * 24) + (i * padding) + 16; })
					.attr('x', 0)
					.attr('text-anchor', 'middle')
					.attr('class', 'gw non-users');
				//total text
				chart.selectAll('text.total').data(csv).enter()
					.append('text')
					.text(function(d) { return d.total + '000'; })
					.attr('y', function(d, i) { return (i * 24) + (i * padding) + 12; })
					.attr('x', 0)
					.attr('dx', 8 )
					.attr('class', 'gc2 total');
				//cat text
				chart.selectAll('text.cat').data(csv).enter()
					.append('text')
					.text(function(d) { return d[graph.parameter]; })
					.attr('y', function(d, i) { return (i * 24) + (i * padding) + 24; })
					.attr('x', 0)
					.attr('dx', 8 )
					.attr('class', 'gc2 cat');

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
					.transition().duration(500)
					.attr('x', function(d) { return x(d.utilizam / 2); });
				//non-users text
				chart.selectAll('text.non-users').data(csv)
					.transition().duration(500)
					.attr('x', function(d) { return x((d.utilizam * 1) + (d['não utilizam'] / 2)); });
				//total text
				chart.selectAll('text.total').data(csv)
					.transition().duration(500)
					.attr('x', function(d) { return x(d.total); });
				//cat text
				chart.selectAll('text.cat').data(csv)
					.transition().duration(500)
					.attr('x', function(d) { return x(d.total); });

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
					.attr('x', 0)
					.remove();
				//non-users text
				chart.selectAll('text.non-users').data(csv).exit()
					.transition().duration(500)
					.attr('x', 0)
					.remove();
				//total text
				chart.selectAll('text.total').data(csv).exit()
					.transition().duration(500)
					.attr('x', 0)
					.remove();
				//cat text
				chart.selectAll('text.cat').data(csv).exit()
					.transition().duration(500)
					.attr('x', 0)
					.remove();

			});
		}


	}

});