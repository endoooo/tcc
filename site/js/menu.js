define(['jquery'], function($){

	console.log('menu required');

	return {

		initializeMain: function() {
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
		},

		initializeSettings: function() {
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
		}

	}

});