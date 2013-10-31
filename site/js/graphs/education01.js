define(['jquery', 'd3js'], function($, ignore){

	console.log('education graphs required');

	//graph config
	var padding = 16;
	var w = 940;
	var h = 300;

	return {

		initializeSettings: function() {

			var edu01 = this;
			
			$('#student-g1a').on('click', function(e){

				$(this).parent('li').siblings().removeClass('active');
				$(this).parent('li').addClass('active');

				edu01.activateG1();

				e.preventDefault();
			});

			$('#student-g1b').on('click', function(e){

				$(this).parent('li').siblings().removeClass('active');
				$(this).parent('li').addClass('active');

				edu01.activateG2();

				e.preventDefault();
			});
		},

		initializeGraph: function() {
			d3.csv('../educacao/data/001.csv', function(csv){

				//scale
				var x = d3.scale.linear()
					.domain([0, 129450])
					.range(["0px", "800px"]);

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

		activateG1: function() {
			$('#graph1-title').html('Utilização da internet por condição de estudante (2011)');

			d3.csv('../educacao/data/001.csv', function(csv){

				//scale
				var x = d3.scale.linear()
					.domain([0, 129450])
					.range(['0px', '800px']);

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
					.text(function(d) { return d['condição de estudante']; })
					.attr('y', function(d, i) { return (i * 24) + (i * padding) + 24; })
					.attr('x', function(d) { return x(d.total); })
					.attr('dx', 8 )
					.attr('class', 'gc2 cat');

				//total bar
				chart.selectAll('rect.total').data(csv)
					.transition()
					.attr('width', function(d) { return x(d.total); });
				//users bar
				chart.selectAll('rect.users').data(csv)
					.transition()
					.attr('width', function(d) { return x(d.utilizam); });

				//total bar
				chart.selectAll('rect.total').data(csv).exit()
					.transition()
					.duration(1000)
					.attr('y', 0)
					.attr('height', 0)
					.remove();
				//users bar
				chart.selectAll('rect.users').data(csv).exit()
					.transition()
					.duration(1000)
					.attr('y', 0)
					.attr('height', 0)
					.remove();
				//users text
				chart.selectAll('text.users').data(csv).exit()
					.transition()
					.duration(1000)
					.attr('y', 0)
					.remove();
				//non-users text
				chart.selectAll('text.non-users').data(csv).exit()
					.transition()
					.duration(1000)
					.attr('y', 0)
					.remove();
				//total text
				chart.selectAll('text.total').data(csv).exit()
					.transition()
					.duration(1000)
					.attr('y', 0)
					.remove();
				//cat text
				chart.selectAll('text.cat').data(csv).exit()
					.transition()
					.duration(1000)
					.attr('y', 0)
					.remove();

			});
		},

		activateG2: function() {
			$('#graph1-title').html('Utilização da internet por grupo de anos de estudo (2011)');

			d3.csv("../educacao/data/002.csv", function(csv){

				//scale
				var x = d3.scale.linear()
					.domain([0, 45022])
					.range(["0px", "800px"]);

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
					.text(function(d) { return d['anos de estudo']; })
					.attr('y', function(d, i) { return (i * 24) + (i * padding) + 24; })
					.attr('x', function(d) { return x(d.total); })
					.attr('dx', 8 )
					.attr('class', 'gc2 cat');

				//total bar
				chart.selectAll('rect.total').data(csv)
					.transition()
					.attr('width', function(d) { return x(d.total); });
				//users bar
				chart.selectAll('rect.users').data(csv)
					.transition()
					.attr('width', function(d) { return x(d.utilizam); });

			});
		}


	}

});