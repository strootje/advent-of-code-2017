var input = (() => {
	var div = document.getElementById("input");
	
	var phrases = div.innerHTML.split('\n');
	var uphrases = [];
	
	for(var pindex in phrases) {
		var phrase = phrases[pindex];
		
		var words = phrase.split(' ');
		var uwords = [];
		
		for(var windex in words) {
			var word = words[windex];
			if (uwords.indexOf(word) < 0) {
				uwords.push(word);
			}
		}
		
		if (phrase !== "" && uwords.length == words.length) {
			if (uphrases.indexOf(phrase) < 0) {
				uphrases.push(phrase);
			}
		}
	}
	
	return uphrases.length;
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
