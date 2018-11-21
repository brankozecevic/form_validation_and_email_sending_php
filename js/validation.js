$(document).ready(function(){
	//Hiding elements that represents errors
	$('#name_error1').hide();
	$('#name_error2').hide();
	$('#email_error').hide();
	$('#subject_error1').hide();
	$('#subject_error2').hide();
	$('#message_error1').hide();
	$('#message_error2').hide();

	//declaring variables used in function that is activated after form is submitted
	let nameError = false;
	let emailError = false;
	let subjectError = false;
	let messageError = false;
	
	//event triggers
	$('#InputName').keyup(function(){
		checkName();
	});
	$('#InputEmail').keyup(function(){
		checkEmail();
	});
	$('#InputSubject').keyup(function(){
		checkSubject();
	});
	$('#message-text').keyup(function(){
		checkMessage();
	});
	
	//functions that are activated on event on html element
	
	//checking length and allowed characters for the form field
	function checkName(){
		let nameLength = $('#InputName').val().length;
		if((nameLength < 3) || (nameLength > 50)){
			$('#name_error1').html('Full name should be betweem 3 and 50 characters.');
			$('#name_error1').show();
			nameError = true;
		}else {
			$('#name_error1').hide();
			nameError = false;
		} 
		let pattern = /^[-a-zA-Z0-9\s.:,]*$/;
		if(pattern.test($('#InputName').val())){
			$('#name_error2').hide();
			nameError = false;
		}else{
			$('#name_error2').html('Only letters and white spaces are allowed in the Name field.');
			$('#name_error2').show();
			nameError = true;
		}
	}
	//email validation
	function checkEmail(){
		var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
		if(pattern.test($('#InputEmail').val())){
			$('#email_error').hide();
			emailError = false;
		}else{
			$('#email_error').html('Please enter a valid email address.');
			$('#email_error').show();
			emailError = true;
		}
	}
	//checking length and allowed characters for the form field
	function checkSubject(){
		let subjectLength = $('#InputSubject').val().length;
		if((subjectLength < 3) || (subjectLength >150)){
			$('#subject_error1').html('You can send between 3 and 150 characters in the Subject field.');
			$('#subject_error1').show();
			subjectError = true;
		}else {
			$('#subject_error1').hide();
			subjectError = false;
		}
		let pattern = /^[-a-zA-Z0-9\s.:,]*$/;
		if(pattern.test($('#InputSubject').val())){
			$('#subject_error2').hide();
			subjectError = false;
		}else{
			$('#subject_error2').html('Characters allowed in the Subject field are: . , : , - , , , spaces , letters and numbers.');
			$('#subject_error2').show();
			subjectError = true;
		}
	}
	//checking length and allowed characters for the form field
	function checkMessage(){
		let messageLength = $('#message-text').val().length;
		if((messageLength < 50) || (messageLength >1000)){
			$('#message_error1').html('You can send between 50 and 1000 characters in the Message field.');
			$('#message_error1').show();
			messageError = true;
		}else {
			$('#message_error1').hide();
			messageError = false;
		}

		let pattern = /^[-a-zA-Z0-9\s.:,]*$/;
		if(pattern.test($('#message-text').val())){
			$('#message_error2').hide();
			messageError = false;
		}else{
			$('#message_error2').html('Characters allowed in the Message field are: . , : , - , , , spaces , letters and numbers.');
			$('#message_error2').show();
			messageError = true;
		}
	}
	//what happens when user click submit on the form
	$('#contactForm').submit(function(){
		checkName();
		checkEmail();
		checkSubject();
		checkMessage();
		if((nameError === false) && (emailError === false) && (subjectError === false) && (messageError === false)){
	        $('#sending-email-bottom').removeAttr('hidden');
		    return true;
		}
		else return false;
	}); 	

});