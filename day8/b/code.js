
var input = (() => {
	var pattern = /^([a-z]+)\s(inc|dec)\s([0-9-]+)\sif\s([a-z]+)\s(.+)\s([0-9-]+)$/i;
	var div = document.getElementById("input");
	var reg = {};
	
	var init_reg_ref = (ref) => {
		//console.log('init', ref, 0);
		if (!reg[ref]) reg[ref] = 0;
	};
	
	var do_method = (ref, method, val) => {
		//console.log('exec', ref, reg[ref], method, val);
		if (method == 'inc')			reg[ref] += val;
		else if (method == 'dec')	reg[ref] -= val;
	};

	var check_operator = (ref, operator, check) => {
		//console.log('check', ref, reg[ref], operator, check);
		if (operator == '&gt;')			return reg[ref] > check;
		else if (operator == '&lt;')	return reg[ref] < check;
		else if (operator == '==')		return reg[ref] == check;
		else if (operator == '&gt;=')	return reg[ref] >= check;
		else if (operator == '&lt;=')	return reg[ref] <= check;
		else if (operator == '!=')		return reg[ref] != check;
		else									return false;
	};
	
	var highest_values = [];
	var lines = div.innerHTML.split('\n').map(line => {
		var res = line.match(pattern);
		var ref0 = res[1], method = res[2], valueIfTrue = parseInt(res[3])
			, ref_check = res[4], operator = res[5], val_check = parseInt(res[6]);
		
		init_reg_ref(ref0);
		init_reg_ref(ref_check);
		
		if (check_operator(ref_check, operator, val_check)) {
			do_method(ref0, method, valueIfTrue);
		}
		
		var ref_high = Object.keys(reg).reduce((a, b) => { return reg[a] > reg[b] ? a : b });
		highest_values.push(reg[ref_high]);
		
		return line;
	});
	
	return highest_values.sort((a, b) => a < b)[0];
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
