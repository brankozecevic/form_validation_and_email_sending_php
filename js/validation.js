$(document).ready(function(){
	//Hiding elements that represents errors
	$('#name_error1').hide();
	$('#name_error2').hide();
	$('#email_error').hide();
	$('#subject_error1').hide();
	$('#subject_error2').hide();
	$('#message_error1').hide();
	$('#message_error2').hide();
	
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
			return false;
		}else {
			$('#name_error1').hide();
		} 
		let pattern = /^[-a-zA-Z0-9\s.:,]*$/;
		if(pattern.test($('#InputName').val())){
			$('#name_error2').hide();
		}else{
			$('#name_error2').html('Only letters and white spaces are allowed in the Name field.');
			$('#name_error2').show();
			return false;
		}
	}
	//email validation
	function checkEmail(){
		var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
		if(pattern.test($('#InputEmail').val())){
			$('#email_error').hide();
		}else{
			$('#email_error').html('Please enter a valid email address.');
			$('#email_error').show();
			return false;
		}
	}
	//checking length and allowed characters for the form field
	function checkSubject(){
		let subjectLength = $('#InputSubject').val().length;
		if((subjectLength < 3) || (subjectLength >150)){
			$('#subject_error1').html('You can send between 3 and 150 characters in the Subject field.');
			$('#subject_error1').show();
			return false;
		}else {
			$('#subject_error1').hide();
		}
		let pattern = /^[-a-zA-Z0-9\s.:,]*$/;
		if(pattern.test($('#InputSubject').val())){
			$('#subject_error2').hide();
		}else{
			$('#subject_error2').html('Characters allowed in the Subject field are: . , : , - , , , spaces , letters and numbers.');
			$('#subject_error2').show();
			return false;
		}
	}
	//checking length and allowed characters for the form field
	function checkMessage(){
		let messageLength = $('#message-text').val().length;
		if((messageLength < 50) || (messageLength >1000)){
			$('#message_error1').html('You can send between 50 and 1000 characters in the Message field.');
			$('#message_error1').show();
			return false;
		}else {
			$('#message_error1').hide();
		}

		let pattern = /^[-a-zA-Z0-9\s.:,]*$/;
		if(pattern.test($('#message-text').val())){
			$('#message_error2').hide();
		}else{
			$('#message_error2').html('Characters allowed in the Message field are: . , : , - , , , spaces , letters and numbers.');
			$('#message_error2').show();
			return false;
		}
	}
	//what happens when user click submit on the form
	$('#contactForm').submit(function(){
		console.log(checkName());
		console.log(checkEmail());
		console.log(checkSubject());
		console.log(checkMessage());
		
		if((checkName() === false) || (checkEmail() === false) || (checkSubject() === false) || (checkMessage() === false))		return false;
		else {
			$('#sending-email-bottom').removeAttr('hidden');
		    return true;
		}		
	}); 	

});