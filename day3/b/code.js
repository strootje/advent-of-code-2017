var input = (() => {
	var div = document.getElementById("input");
	
	// === calculate side length
	var target = parseInt(div.innerHTML), max = target;
	var side = 0;
	do {
		side = Math.sqrt(max);
		max++;
	} while(side % 1 !== 0);
	
	// === setup matrix
	var matrix = [];
	for(var x = 0; x < side; x++) {
		var row = [];
		for(var y = 0; y < side; y++) {
			row.push(0);
		}
		matrix.push(row);
	}
	
	// === build matrix
	var half = Math.ceil((side - 1) / 2);
	var dir = 'right';
	var curx = half;
	var cury = half;
	var num = 0;
	var computed = [];
	do {
		// calculate computed
		var tl = matrix[cury-1][curx-1];
		var t = matrix[cury-1][curx];
		var tr = matrix[cury-1][curx+1];
		var l = matrix[cury][curx-1];
		var r = matrix[cury][curx+1];
		var bl = matrix[cury+1][curx-1];
		var b = matrix[cury+1][curx];
		var br = matrix[cury+1][curx+1];
		num = tl + t + tr + l + r + bl + b + br;
		matrix[cury][curx] = num > 0 ? num : 1;
		computed.push(num);
		
		
		// move
		if (dir == 'right') curx += 1;
		if (dir == 'top') cury -= 1;
		if (dir == 'left') curx -= 1;
		if (dir == 'bottom') cury += 1;
		
		// turn
		if (dir == 'right' && matrix[cury-1][curx] == 0) dir = 'top';
		if (dir == 'top' && matrix[cury][curx-1] == 0) dir = 'left';
		if (dir == 'left' && matrix[cury+1][curx] == 0) dir = 'bottom';
		if (dir == 'bottom' && matrix[cury][curx+1] == 0) dir = 'right';
	} while(num <= target);
	
	return computed;
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
