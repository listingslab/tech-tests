$( document ).ready(function() {
	try {
		$('#inputNumber').keyup(function() {
			validate(); 
		});
		$('#inputNumber').focus ();
	}catch (err){
		console.log (err);
	}
});