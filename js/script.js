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