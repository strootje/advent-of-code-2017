var input = (() => {
	var joiner = '\t';
	var div = document.getElementById("input");
	var banks = div.innerHTML.split('\t').map(p => parseInt(p));

	var looped = false;
	var history = [banks.join(joiner)];

	while(looped == false) {
		var peakAt = 0;
		// find highst bank (first is chosen)
		for(var i in banks) {
			var val = banks[i];
			if (val > banks[peakAt]) {
				peakAt = parseInt(i);
			}
		}
		
		// redistribute
		var redist = banks[peakAt];
		banks[peakAt] = 0;
		var key = peakAt;
		while(redist > 0) {
			key = (banks[key + 1] == undefined) ? 0 : (key + 1);
			banks[key]++;
			redist--;
		}
			
		// check current banks agains history
		var alsoFoundAt = history.indexOf(banks.join(joiner));
		if (alsoFoundAt > 0) {
			looped = true;
			return history.length - alsoFoundAt; // little abose from the 'length' attribute. and ugly breaking from loop.
		}
		
		// save a history
		history.push(banks.join(joiner));
	}

	return (history.length - 1); // -1 because it's this inclused the initial state, but this isn't a pass
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
