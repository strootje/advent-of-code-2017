var input = (() => { //unescape
	var div = document.getElementById("input");
	var lengths = div.innerHTML.split(',').map(p => parseInt(p));
	
	var list = [];
	for(var i = 0; i < 256; i++) list.push(i);
	
	var cur = 0;
	var skip = 0;
	
	for(var i = 0; i < lengths.length; i++) {
		var length = lengths[i];
		
		// 1. reverse
		var half = Math.ceil(length / 2);
		for(var j = 0; j < half; j++) {
			var n1 = (cur + j);
			if (n1 > (list.length - 1)) {
				n1 = n1 - (list.length);
			}
			
			var n2 = ((cur + (length - 1)) - j);
			if (n2 > (list.length - 1)) {
				n2 = n2 - (list.length);
			}
			//console.log(length, n1, n2);
			
			var tmp = list[n1];
			list[n1] = list[n2];
			list[n2] = tmp;
		}
		
		// 2. skip index
		cur += (length + skip);
		if (cur > (list.length - 1)) {
			cur = cur - (list.length);
		}
		
		// 3. increase skip
		skip++;
	}
	
	return [list.length, list[0], list[1], (list[0] * list[1])];
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
