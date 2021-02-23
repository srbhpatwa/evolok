(function () {
	$(document).ready(function () {

		function nameValidation() {
			var first_name = $('input[name="fname"]').val();
			$('input[name="fname"]').next(".errormsg").remove();


			if (first_name.length < 1) {
				$('input[name="fname"]').addClass('error').removeClass('valid');
				$('input[name="fname"]').after('<span class="errormsg">This field is required</span>');
			} else {
				$('input[name="fname"]').addClass('valid').removeClass('error');
			}
		}

		function passwordValidation() {
			var password = $('input[name="psw"]').val();

			$('input[name="psw"]').next(".errormsg").remove();

			if (password.length < 8) {
				$('input[name="psw"]').addClass('error').removeClass('valid');
				$('input[name="psw"]').after('<span class="errormsg">Password must be at least 8 characters long</span>');
			} else {
				$('input[name="psw"]').addClass('valid').removeClass('error');
			}
		}

		function emailValidation() {
			var email = $('input[name="uname"]').val();
			
			$('input[name="uname"]').next(".errormsg").remove();

			if (email.length < 1) {
				$('input[name="uname"]').addClass('error').removeClass('valid');
				$('input[name="uname"]').after('<span class="errormsg">This field is required</span>');
			} else {
				var regEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
				var validEmail = regEx.test(email);
				if (!validEmail) {
					$('input[name="uname"]').addClass('error').removeClass('valid');
					$('input[name="uname"]').after('<span class="errormsg">Email Id is not registered with us. <a href="signup.html">SignUp?</a></span>');
				} else {
					$('input[name="uname"]').addClass('valid').removeClass('error');
				}
			}
		}

		function otpValidation() {
			var password = $('input[name="otp"]').val();

			$('input[name="otp"]').next(".errormsg").remove();
			var otp = $('input[name="otp"]').val();

			if (otp.length < 4) {
				$('input[name="otp"]').addClass('error').removeClass('valid');
				$('input[name="otp"]').after('<span class="errormsg">OTP is not matching. <a class="resend-otp" href="#">Resend?</a></span>');
			} else {
				$('input[name="otp"]').addClass('valid').removeClass('error');
			}
		}

		$('.form-field input[name="uname"]').blur(function (e) {
			emailValidation();
		});

		$('.form-field input[name="fname"]').blur(function (e) {
			nameValidation();
		});

		$('.form-field input[name="psw"]').blur(function (e) {
			passwordValidation();
		});

		$('.form-field input[name="otp"]').blur(function (e) {
			otpValidation();
		});

		/* Tabber */
		$('#tabs li a:not(:first)').addClass('inactive');
		$('.tab-content').hide();
		$('.tab-content:first').show();
		$('#tabs li a').click(function () {
			var t = $(this).attr('id');

			if ($(this).hasClass('inactive')) { //this is the start of our condition 
				$('#tabs li a').addClass('inactive');
				$(this).removeClass('inactive');

				$('.tab-content').hide();
				$('#' + t + 'C').fadeIn('slow');
			}
			e.preventDefault();
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
			$(this).parent().removeClass('error-highlightinput');
			$('.top-inputbox .error-msg').fadeOut();
		}
	});

	$('.contact-details input').on('keyup', function(){
		if($(this).val().length > 1){
			$(this).parent().removeClass('error-highlightinput');
			$('.contact-details .error-msg').fadeOut();
		}
	})

	$('.btn-box button').on('click', function(ev){

		firstName = $('#firstname');
		lastName = $('#lastname');
		emailId = $('#emailid');
		phone = $('#mobilenum');

		var regEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		var validEmail = regEx.test(emailId.val());

		if(selectedPlan == ''){
			return false;
		} 
		else if(planCharges == ''){
			return false;
		} 
		else if(paymentMode == ''){
			$('.payment-wrapper .error-msg').text('Please Select Payment type.').fadeIn();
			return false;
		}
		else if(firstName.val() == ''){
			$('.top-inputbox .error-msg').text('Please enter your first name.').fadeIn();
			firstName.parent().addClass('error-highlightinput');
			return false;
		}	
		else if(lastName.val() == ''){
			$('.top-inputbox .error-msg').text('Please enter your last name.').fadeIn();
			lastName.parent().addClass('error-highlightinput');
			return false;
		}
		else if(emailId.val() == '' || !validEmail){
			$('.contact-details .error-msg').text('Please enter valid email.').fadeIn();
			emailId.parent().addClass('error-highlightinput');
			return false;
		}
		else if(phone.val() == '' || phone.val().length < 10 || phone.val().length > 10 ){
			$('.contact-details .error-msg').text('Please enter your mobile number.').fadeIn();
			phone.parent().addClass('error-highlightinput');
			return false;
		}
		ev.preventDefault();
	});

	$('.payment-method-type .info-icon').on('click',function(event){
		$(this).addClass('active-info-icon');
		$('.additional-info').addClass('active-popup');
		$('body').addClass('hide-scroll');
		event.stopPropagation();
	});

	$('.close-btn').on('click', function(){
		$('.additional-info').removeClass('active-popup');
		$('.payment-method-type .info-icon').removeClass('active-info-icon');
		$('body').removeClass('hide-scroll');
	});

	$('.edit-icon').on('click', function(){
		$(this).parent().removeClass('disabled-input').focus();
		$(this).siblings('input').focus();
	});

});