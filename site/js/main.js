$('document').ready(function() {

	//menu scripts
	$('#menu-link').click(function(e){
		$('#menu').animate({
			opacity: 1,
			left: '0'
		}, 300);
		$('#overlay').fadeIn(300);

		$('body').css('overflow','hidden');

		e.preventDefault();
	})
	$('#close-menu-link').click(function(e){
		$('#menu').animate({
			opacity: 0,
			left: '-400px'
		}, 300);
		$('#overlay').fadeOut(300);

		$('body').css('overflow','auto');
		
		e.preventDefault();
	})

	//settings
	$('.settings-link').click(function(e){
		var graph = '#' + $(this).data('graph') + '-settings';
		$(graph).animate({
			opacity: 1,
			right: '0'
		}, 300);
		e.preventDefault();
	})

	$('.close-settings-link').click(function(e){
		$(this).parent('.settings').animate({
			opacity: 0,
			right: '-320px'
		}, 300);		
		e.preventDefault();
	})


	//education
	d3.csv("../educacao/data/001.csv", function(csv){

		//graph config
		var w = 940;
		var h = 300;
		var padding = 16;

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

});