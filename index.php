<?php
require_once 'controllers/Form.php';
require_once 'controllers/Send_email.php';
if(isset($_POST['submit'])){
	$email = trim($_POST['email']);
	$name = trim($_POST['name']);
	$subject = trim($_POST['subject']);
	$message = trim($_POST['message']);	
	if(
	!((empty($email)) || 
	(empty($name)) || 
	(empty($subject)) || 
	(empty($message)))
	){		
		$reg_exp_name = '/^[a-zA-Z ]*$/';
		$reg_exp_text = "/^[-a-zA-Z0-9\s.:,]*$/";
		$characters_allowed_full_name = 'spaces , letters and numbers';
		$characters_allowed_text = '. , : , - , , , spaces , letters and numbers';		
		$validation = new Form;			
		if($validation->validate_text($name, 3, 50, 'Full Name', $reg_exp_name, $characters_allowed_full_name) === true){
				if($validation->validate_email($email) === true){
					if($validation->validate_text($subject, 3, 150, 'Subject', $reg_exp_text, $characters_allowed_text) === true){
						if($validation->validate_text($message, 50, 1000, 'Message', $reg_exp_text, $characters_allowed_text) === true){
							/** 
							* @param $name - full name from for input
							* @param $email - email address from form input 							
							* @param $to - email address for recieving emails (recommendation: it should be the same as email address that you created inside your web hosting account)	
							* @param $subject - data from Subject form input
							* @param $website - url of your website where form is located						
							* @param $host - Smtp address of server that will send the email. It can be found inside of your web hosting account(usually web hosting providers enable you to use their smtp server).								
							* @param $username - email address that you created inside your web hosting account
							* @param $password - $password for email address that you created inside your web hosting account							
								Note: $host, $username, $password - need to be associated with the same web hosting account.
								In order to script works change these variables with values in:
								Send_email::send_email_out($name, $email, $subject, $message, $to, $website, $host, $username, $password);
							*/
							$result = Send_email::send_email_out($name, $email, $subject, $message, $to, $website, $host, $username, $password);							
						}else $result = $validation->validate_text($message, 50, 1000, 'Message', $reg_exp_text, $characters_allowed_text);
					}else $result = $validation->validate_text($subject, 3, 150, 'Subject', $reg_exp_text, $characters_allowed_text);
				}else $result = $validation->validate_email($email);
		}else $result = $validation->validate_text($name, 3, 50, 'Full Name', $reg_exp_name, $characters_allowed_full_name);		
	}else $result = '<p class="alert alert-danger">All fields in the contact form are required.</p>';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<title>Document</title>
</head>
<body>
	<div class="container">
		<div class="col-md-6">
			<div class="feedback-form">
				<h2>Contact Form</h2>
				<?php if(isset($result)) echo $result; ?>
				<form id="contactForm" action="" method="POST">
					<div class="form-group">
						<label for="InputName">Full Name</label>
						<input type="text" name="name" class="form-control" id="InputName"
							placeholder="Full Name">
						<p id="name_error1" class="alert alert-danger"></p>
						<p id="name_error2" class="alert alert-danger"></p>
					</div>
					<div class="form-group">
						<label for="InputEmail">Email address</label>
						<input type="text" name="email" class="form-control" id="InputEmail"
							placeholder="Email">
						<p id="email_error" class="alert alert-danger"></p>
					</div>
					<div class="form-group">
						<label for="InputSubject">Subject</label>
						<input type="text" name="subject" class="form-control" id="InputSubject"
							placeholder="Subject">
						<p id="subject_error1" class="alert alert-danger"></p>
						<p id="subject_error2" class="alert alert-danger"></p>
					</div>
					<div class="form-group">
						<label for="message-text" class="control-label">Message</label>
						<textarea class="form-control" rows="4" name="message" id="message-text"
								placeholder="Write message"></textarea>
						<p id="message_error1" class="alert alert-danger"></p>
						<p id="message_error2" class="alert alert-danger"></p>						
					</div>
					<div id="sending-email-bottom" class="row" hidden>
						<img src="img/if_Outlook_410510.gif" alt="Email is sending!">
						<span class="badge badge-primary">Email is sending. Please wait a few seconds until you get a confirmation message.</span>
					</div>
					<input type="submit" name="submit" class="btn btn-success" value="Submit">
				</form>
			</div><!-- .feedback-form -->
		</div>
	</div>
	<script src="js/jquery-2.1.4.min.js"></script>
	<script src="js/validation.js"></script>
</body>
</html>
