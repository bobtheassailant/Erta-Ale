
$('#navArrow').click(function() {
	var $arrow = $('#navArrow');
	var $menu = $('#navDiv');
	if ($menu.hasClass('hidden')) {
		$menu.slideDown('fast');
		$menu.removeClass('hidden');
		$arrow.attr('src', 'assets/up_white.png');

	} else {
		$menu.slideUp('slow');
		$menu.addClass('hidden');
		$arrow.attr('src', 'assets/down_white.png');
	}
});

$('.navItem').hover(function() {
	$(this).css('text-decoration', 'line-through');
	$(this).css('color', '#CEC16B')
}).mouseleave(function() {
	$(this).css('text-decoration', 'none');
	$(this).css('color', '#FBFBFB')
});

/*
$('.col').hover(function() {
	$(this).css('', '');
	$(this).sibling().css('', '');
}).mouseleave(function() {
	$(this).css('', '');
	$(this).sibling().css('', '');
});
*/



    