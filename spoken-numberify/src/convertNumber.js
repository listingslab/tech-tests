function convertNumber (num) {
	try {
		var ret = '';
		var digits = num.toString().length;
		var numStr = num.toString();
		if (digits <= 3){
			ret += createHundreds (num);
		} else if (digits > 3 && digits < 7){
			var thousands = numStr.substring (0, digits-3);
			ret += createHundreds (thousands) + ' thousand';
			var hundreds = parseInt (numStr.substring (numStr.length -3));
			if (hundreds != 0){
				if (hundreds < 100){
					ret += ' and ';	
				}
				ret += ' ' + createHundreds (hundreds);
			}
		} else if (digits >= 7 && digits < 10){
			var millions = numStr.substring (0, digits-6);
			ret += createHundreds (millions) + ' million';
			var mLength = millions.toString().length;
			var thousands = numStr.substring (mLength, mLength+3);
			if (parseInt (thousands) != 0){
				ret += ' ' + createHundreds (thousands) + ' thousand';
			}
			var hundreds = numStr.substring (mLength+3, mLength+6);
			if (parseInt (hundreds) != 0){
				ret += ' ' + createHundreds (hundreds);
			}
		}
		 else if (digits >= 10 && digits <= 12){
			var billions = numStr.substring (0, digits-9);
			ret += createHundreds (billions) + ' billion';
			var bLength = billions.toString().length;
			var millions = numStr.substring (bLength, bLength+3);
			if (parseInt (millions) != 0){
				ret += ' ' + createHundreds (millions) + ' million';
			}
			var thousands = numStr.substring (bLength+3, bLength+6);
			if (parseInt (thousands) != 0){
				ret += ' ' + createHundreds (thousands) + ' thousand';
			}
			var hundreds = numStr.substring (bLength+6, bLength+9);
			if (parseInt (hundreds) != 0){
				ret += ' ' + createHundreds (hundreds);
			}
		}
		ret += '.';
		return ret;
	}catch (err){
		console.log (err);
	}
}