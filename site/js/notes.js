define(['jquery', 'jquery-ui'], function($, $){

	console.log('notes required');

	return {

		set: function() {
			var note = $('#note');
			var content = $('#note #note-content');

			// set draggable
			note.draggable({
				handle: '#handler',
				scroll: false,
				containment: 'parent'
			});

			// bind to .has-note
			$('.has-note').on('click', function(e){
				// ajax target url
				var url = $(this).attr('href') + ' ' + $(this).attr('data-target');

				if ($(this).attr('data-target') !== 'null') {
					// ajax call
					content.load(url, function(){

						// show note on callback
						note.css({
							top: $(window).scrollTop() + 16,
							left: 'auto',
							right: 16
						}).fadeIn();
						note.find('.collapse').removeClass('icon-plus').addClass('icon-minus');
						content.show();
						
					})
				}

				e.preventDefault();
			});

			// close note
			note.on('click', '.close', function(e){
				note.fadeOut();

				e.preventDefault();
			});
			// collapse note
			note.on('click', '.collapse', function(e){
				content.slideToggle();
				$(this).toggleClass('icon-minus icon-plus');

				e.preventDefault();
			});
		}

	}

});