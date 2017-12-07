var input = (() => {
	var pattern = /^([a-z]+)\s\(([0-9]+)\)(.*)$/i;
	var div = document.getElementById("input");
	var lines = div.innerHTML.split('\n').map(p => {
		var res = p.match(pattern);
		return { name: res[1], weight: res[2], holding: res[3].replace(' -&gt; ', '').split(', ') };
	});

	var godown = (elem) => {
		var parent = lines.find(p => p.holding.indexOf(elem.name) >= 0);
		if (parent == undefined) return elem;
		else return godown(parent);
	};

	var root = godown(lines[0]);

	return root.name;
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
