<?php
/** 
  * @desc This class is used for form validation
  * @author Branko Zecevic
*/
class Form{
	/** 
	* @desc this method is for validating text based on a number of characters
		and allowed characters (uses regular expressions)
	* @param $text - string from form input 
	* @param $char_num_low - number that represents a minimal number of characters 
		that can ce accepted from form input
	* @param $char_num_low - number that represents a maximal number of characters 
		that can ce accepted from form input
	* @param $field represents a label(name of the form field) from form input
	* @param $reg_exp represents a regular expression used in validation
	* @param $characters_allowed is textual representation of what characters 
		are allowed
	*/
	public function validate_text($text, $char_num_low, $char_num_high, $field, $reg_exp, $characters_allowed){
		if(
		(((strlen($text)>$char_num_low) && (strlen($text)<$char_num_high)))
		&&
		((preg_match($reg_exp,$text)))
		) return true;
		
		if(
		(!((strlen($text)>$char_num_low) && (strlen($text)<$char_num_high)))
		&&
		(!(preg_match($reg_exp,$text)))
		)
		return '<p class="alert alert-danger">You can send between '.$char_num_low.' and '.$char_num_high.' characters in '.$field.' field.</p><p class="alert alert-danger">Characters allowed in '.$field.' field are: '.$characters_allowed.'. Please, send your email again.</p>';
		
		if(!((strlen($text)>$char_num_low) && (strlen($text)<$char_num_high)))
			return '<p class="alert alert-danger">You can send between '.$char_num_low.' and '.$char_num_high.' characters in '.$field.' field. Please, send your email again.</p>';
		if(!(preg_match($reg_exp,$text)))
			return '<p class="alert alert-danger">Characters allowed in '.$field.' field are: '.$characters_allowed.'. Please, send your email again.</p>';
	}
	/** 
	  * @desc this method is for validating email address 
	  * @param $email - email string from form input
	*/
	public function validate_email($email){
		if (!(filter_var($email, FILTER_VALIDATE_EMAIL)))
		  return '<p class="alert alert-danger">Invalid email.</p>';
		else return true;
	}
}