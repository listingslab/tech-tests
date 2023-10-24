function createOnes(num) {
	try {
		var ret;
		var ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
		ret = ones [num];
		return ret;
	}catch (err){
		console.log (err);
	}
}
function createTens(num) {
	try {
		var ret;
		var tens = ['none', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
		var numStr = num.toString ();
		var num = parseInt(num);
		if (num < 10){
			ret = createOnes(num);
		}else if (num === 10){
			ret = tens [1];
		}else if (num > 10 && num < 20){
			switch (num) {
			    case 11:
			        ret = "eleven";
			        break;
			    case 12:
			        ret = "twelve";
			        break;
			    case 13:
			        ret = "thirteen";
			        break;
			    case 14:
			        ret = "fourteen";
			        break;
			    case 15:
			        ret = "fifteen";
			        break;
			    case 16:
			        ret = "sixteen";
			        break;
			    case 17:
			        ret = "seventeen";
			        break;
			    case 18:
			        ret = "eighteen";
			        break;
			    case 19:
			        ret = "nineteen";
			        break;
			}
		}else{
			if (parseInt(numStr[1]) === 0){
				ret = tens [parseInt(numStr[0])];
			}else{
				ret = tens [parseInt(numStr[0])] 
				ret += ' ' + createOnes(parseInt(numStr[1]));
			}
		}
		return ret;
	}catch (err){
		console.log (err);
	}
}
function createHundreds (num) {
	try {
		var ret = '';
		var tens = ['none', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
		var numStr = num.toString ();
		var num = parseInt(num);
		if (numStr.length === 3){
			if (parseInt(numStr[0]) != 0){
				ret += createOnes(parseInt(numStr[0])) + ' hundred';
			}
			if (parseInt(numStr[1]) != 0 || parseInt(numStr[2]) != 0 ){
				ret += ' and ';
				ret += createTens (parseInt(numStr[1]+ numStr[2]));
			}
		}else if (numStr.length == 2){
			ret += createTens (parseInt(numStr[0]+ numStr[1]));
		}else if (numStr.length == 1){
			ret += createTens (parseInt(numStr[0]));
		}
		return ret;
	}catch (err){
		console.log (err);
	}
}