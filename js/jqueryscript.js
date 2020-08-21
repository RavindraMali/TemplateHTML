





$(document).ready(function(){
			$('.h').hide();
			$('.animate').show(1000);
			$('#hide').click(function(){
				$(".h").show(3000);
			 });



		$('.menu').click(function(){
			$('#navbar').toggleClass('active');
		});

	/*  top up scroll  */
	$('.up').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
	});
});

