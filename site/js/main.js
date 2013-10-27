$('document').ready(function() {

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
			left: '-400'
		}, 300);
		$('#overlay').fadeOut(300);

		$('body').css('overflow','auto');
		
		e.preventDefault();
	})

});