var input = (() => {
	var div = document.getElementById("input");
	var nums = div.innerHTML.split('').map(p => parseInt(p));
	var half = nums.length / 2;
	var sum = 0;
	
	for(var i in nums) {
		i = parseInt(i);
		var num = nums[i];
		var ii = (i + half);
		var next = nums[((ii >= nums.length) ? (ii - nums.length) : ii)];
		
		if (num == next) {
			sum += num;
		}
	}
	
	return sum;
})();

var output = data => {
	var div = document.getElementById("output");

	if (data instanceof Array) {
		div.innerHTML = "";
		for (var row in data) {
			div.innerHTML += "<div>" + data[row] + "</div>";
		}
	} else {
		div.innerHTML = data;
	}
};

output(input);
