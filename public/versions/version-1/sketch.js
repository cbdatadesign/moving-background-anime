
let rLines = [];

function setup () {
	createCanvas(windowWidth,windowHeight);
	for (let i=0; i < 300; i ++) {
		if (i % 2 == 0) {
			rLines.push(new randomLine(true));
		}
		else {
			rLines.push(new fastLine(true));
		}
			
	}
}

function mouseClicked() {
	saveCanvas("layer.jpg");
}

function draw () {
//	counter = 0;
	background(30);
	
	// sort lines so that they're drawn with thinner lines on top
	rLines.sort((a, b) => b.Thickness - a.Thickness);
	for (let i = 0; i < rLines.length; i++) {
			rLines[i].moveLine();
			rLines[i].makeLine(); // invoke/call function method from rLines array
//			counter++;
//			console.log(counter);
//		 if ((rLines[i].X + rLines[i].length) <= 0) {
		if (rLines[i].X + rLines[i].Length  < 0) {
			if (rLines[i].constructor.name == "randomLine") {
				rLines[i] = new randomLine(false);
			}
			else {
				rLines[i] = new fastLine(false);
			}
    	}
	}
	// add img here:
}
	


