var input = (() => {
	var div = document.getElementById("input");
	var rows = div.innerHTML.split('\n');
	
	var checksum = 0;
	for(var i in rows) {
		var row = rows[i];
		var nums = row.split('\t').map(p => parseInt(p)).sort((a,b) => a-b);
		checksum += (nums[(nums.length - 1)] - nums[0]);
	}
	
	return checksum;
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
