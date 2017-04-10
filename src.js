'use script'
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
	for(var i = 3; i <= length; i += 2){ //runtime worst case scenerio be O(N) because i = i + 2 to executed "length" number of times
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
	for(var i = 0; i <= x; i++){ // wordt case scenerio of O(N**2) because i iterates over 2 loops to be executed n**2  number of times.
		if(isPrime(i) === true){
			list.push(i);
		}
	}
  }
  return (list)
}
module.exports = {getPrimes};

