var input = (() => {
	var pattern = /^([a-z]+)\s\(([0-9]+)\)(.*)$/i;
	var div = document.getElementById("input");
	var lines = div.innerHTML.split('\n').map(p => {
		var res = p.match(pattern);
		return { name: res[1], weight: parseInt(res[2]), holding: res[3].replace(' -&gt; ', '').split(', ') };
	});

	var godown = (elem) => {
		var parent = lines.find(p => p.holding.indexOf(elem.name) >= 0);
		if (parent == undefined) return elem;
		else return godown(parent);
	};
	var root = godown(lines[0]);

	var scale = (elem) => {
		var weights = [];
		
		elem.holding.map(cname => {
			if (cname == "") return;
			var child = lines.find(x => x.name == cname);
			weights.push({ elem: child, weight: scale(child)});
		});
		
		var weight = (elem.weight + weights.reduce((a, b) => (a + b), 0));
		console.log(elem.name, weight, weights);
		return weight;
	};
	
	var oddone = scale(root);
	return [root.name, oddone];
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
