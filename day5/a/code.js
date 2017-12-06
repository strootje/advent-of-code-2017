var input = (() => {
	var div = document.getElementById("input");
	var instructions = div.innerHTML.split('\n');
	
	var jumps = 0;
	var pos = 0;
	
	while(instructions[pos] != undefined) {
		var old = pos;
		var instr = parseInt(instructions[pos]);
		
		// move the number of steps in the instruction
		pos += instr;
		
		// increment the one we leave
		instructions[old] = (instr += 1);
		
		// we did a jump
		jumps++;
	}
	
	return [jumps, pos, instructions.length];
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
