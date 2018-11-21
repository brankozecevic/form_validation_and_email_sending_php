<?php
require_once "Mail.php";
/** 
  * @desc This class is used for sending email from form (contact form)
  * @author Branko Zecevic
*/
class Send_email {
	/** 
	* @desc - this method is for sending emails based on PEAR mail library 
	* @param $name - full name from for input
	* @param $email - email address from form input 
	
	* @param $to - email address for recieving emails 
		(recommendation: it should be the same as email address 
		that you created inside your web hosting account)
		
	* @param $subject - data from Subject form input
	* @param $website - url of your website where form is located
	
	* @param $host - Smtp address of server that will send the email.
		It can be found inside of your web hosting account.
		(usually web hosting providers enable you to use their smtp server)
		
	* @param $username - email address that you created inside your web hosting account
	* @param $password - $password for email address that you created inside your web hosting account
	
		Note: $host, $username, $password - need to be associated with the same web hosting account.
		$host and $username should be the same email address.
	*/
	public static function send_email_out($name, $email, $subject, $message, $to, $website, $host, $username, $password){

		$body = 'A visitor of '.$website.' has sent you a message:  '.$message;
		$headers = array ('From' => $email,
		  'To' => $to,
		  'Subject' => 'From '.$website.': '.$subject);
		$smtp = Mail::factory('smtp',
		  array ('host' => $host,
			'auth' => true,
			'username' => $username,
			'password' => $password));
		$mail = $smtp->send($to, $headers, $body);
		if (PEAR::isError($mail)) {
			return $result = '<p class="alert alert-danger">'.$mail->getMessage().'. Please, try again.</p>';
		} else {
			return $result = '<p class="alert alert-success">Thank You '.$name.' for sending the email.</p>';
		}
	}
	
}