'use script'
module.exports = {
aritGeo: function(anArr){
	let diff = (anArr[1] - anArr[0]);
	let c_R = (anArr[1] / anArr[0]);


	if (anArr.length === 0){
		return 0;
	};

	if(anArr[anArr.length - 1] - anArr[anArr.length - 2] === diff){
		return "Arithmetic";
	}
	else if (anArr[2] / anArr[1] === c_R) {
		return "Geometric";

	}else
	{
		return -1
	}
 }
};