(function () {
	$(document).ready(function () {

		$('.ie-form button').click(function (e) {
			e.preventDefault();
			var first_name = $('input[name="fname"]').val();
			var email = $('input[name="uname"]').val();
			var password = $('input[name="psw"]').val();

			$(".errormsg").remove();

			if (first_name.length < 1) {
				$('input[name="fname"]').addClass('error').removeClass('valid');
				$('input[name="fname"]').after('<span class="errormsg">This field is required</span>');
			} else {
				$('input[name="fname"]').addClass('valid').removeClass('error');
			}

			if (email.length < 1) {
				$('input[name="uname"]').addClass('error').removeClass('valid');
				$('input[name="uname"]').after('<span class="errormsg">This field is required</span>');
			} else {
				var regEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
				var validEmail = regEx.test(email);
				if (!validEmail) {
					$('input[name="uname"]').addClass('error').removeClass('valid');
					$('input[name="uname"]').after('<span class="errormsg">Enter a valid email</span>');
				} else {
					$('input[name="uname"]').addClass('valid').removeClass('error');
				}
			}
			if (password.length < 8) {
				$('input[name="psw"]').addClass('error').removeClass('valid');
				$('input[name="psw"]').after('<span class="errormsg">Password must be at least 8 characters long</span>');
			} else {
				$('input[name="psw"]').addClass('valid').removeClass('error');
			}
		});
	});
})();

$(document).ready(function () {


	let selectedPlan = '';
	let planCharges = '';
	let paymentMode = '';
	let firstName = '';
	let lastName = '';
	let emailId = '';
	let phone = '';

	$('.plan-column button').on('click', function(){
		let durationContainer = $('#duration-container');
		$(this).closest('.plan-column').addClass('active-plancard');
		$(this).closest('.plan-column').find('button').text('Selected');
		$(this).closest('.plan-column').siblings().removeClass('active-plancard');
		$(this).closest('.plan-column').siblings().find('button').text('Select');
		$(durationContainer).slideDown();
		let durationHeading;
		if($('.duration-heading').offset().top){
			durationHeading = $('.duration-heading').offset().top;
			$('html,body').animate({scrollTop: durationHeading+'px'}, 500)
		}
		selectedPlan = $(this).closest('.plan-column').attr('name');
	});

	$('.checkbox_box').on('click', function(){
		$('#profile-container').slideDown();
		let profileHeading;
		if($('.payment-heading').offset().top){
			profileHeading = $('.payment-heading').offset().top;
			$('html,body').animate({scrollTop: profileHeading+'px'}, 500)
		}
		planCharges = $(this).attr('name');
	});

	$('.payment-method-type').on('click', function(){
		$(this).addClass('active-payment-mode');
		$(this).siblings().removeClass('active-payment-mode');
		paymentMode = $(this).attr('name');
		$('.payment-wrapper .error-msg').hide();
	});

	$('.feature-toggle').on('click', function(){
		$(this).toggleClass('active-arrow');
		$(this).parent().find('ul').slideToggle();
		$(this).closest('.plan-column').siblings().find('.plan-row').find('ul').slideUp();
		$(this).closest('.plan-column').siblings().find('.plan-row').find('.feature-toggle').removeClass('active-arrow');
	});

	$('.top-inputbox input').on('keyup', function(){
		if($(this).val().length > 1){
			$('.top-inputbox .error-msg').fadeOut();
		}
	});

	$('.contact-details input').on('focukeyups', function(){
		if($(this).val().length > 1){
			$('.contact-details .error-msg').fadeOut();
		}
	})

	$('.btn-box button').on('click', function(ev){

		firstName = $('#firstname').val();
		lastName = $('#lastname').val();
		emailId = $('#emailid').val();
		phone = $('#mobilenum').val();

		if(selectedPlan == ''){
			alert("selectedPlan");
			return false;
		} 
		else if(planCharges == ''){
			alert("planCharges");
			return false;
		} 
		else if(paymentMode == ''){
			$('.payment-wrapper .error-msg').text('Please Select Payment type.').fadeIn();
			return false;
		}
		else if(firstName == ''){
			$('.top-inputbox .error-msg').text('Please enter your first name.').fadeIn();
			return false;
		}	
		else if(lastName == ''){
			$('.top-inputbox .error-msg').text('Please enter your last name.').fadeIn();
			return false;
		}
		else if(emailId == ''){
			$('.contact-details .error-msg').text('Please enter valid email.').fadeIn();
			return false;
		}
		else if(phone == ''){
			$('.contact-details .error-msg').text('Please enter your mobile number.').fadeIn();
			return false;
		}
		ev.preventDefault();
	})

});