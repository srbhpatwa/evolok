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