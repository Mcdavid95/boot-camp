'use script'
module.exports = (function main(){
function isPrime(n){
	if(n < 2){
		return false;
	}
	else if(n <= 3){
		return true;
	}
	else if(n % 2 === 0){
		return false;
	}

	let length = Math.sqrt(n) + 1;
	for(var i = 3; i <= length; i += 2){
		if(n % i === 0){
			return false;
		}
	}
	return true;
}

function getPrimes(x){
	list = [];
	if(Number.isInteger(x) === false){
		return "Invalid input";
	}
	else if(x < 2){
		return list;
	}
	else{
	for(var i = 0; i <= x; i++){
		if(isPrime(i) === true){
			list.push(i);
		}
	}
  }
  return list
}
}();