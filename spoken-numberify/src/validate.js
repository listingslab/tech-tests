function validate() {
	try {
		var valid = true;
		var errorTxt = 'Please enter a whole number between 0 and 999999999999';
		var iptVal = parseInt ($('#inputNumber').val());
		if (isNaN(iptVal)){
			valid = false;
		}
		if (iptVal < 0){
			valid = false;
			}
		if (iptVal > 999999999999){
			valid = false;
			errorTxt = 'This number exceeds the maximum of 999999999999';
		}
		if (!valid){
			printError (errorTxt);
		}else{
			printEquivalent (convertNumber (iptVal));
		}
	}catch (err){
		console.log (err);
	}
}

function printEquivalent(equivalent) {
	try {
		$('#output').html (equivalent.charAt(0).toUpperCase() + equivalent.slice(1));
		$('#output').css('color', 'white');
		$('#inputNumber').css('border', 'none');
	}catch (err){
		console.log (err);
	}
}

function printError(message) {
	try {
		$('#output').html (message);
		$('#output').css('color', 'yellow');
		$('#inputNumber').css('border', '1px solid yellow');
	}catch (err){
		console.log (err);
	}
}