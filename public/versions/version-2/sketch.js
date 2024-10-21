
let rLines = [];

function setup () {
	createCanvas(windowWidth,windowHeight);
	for (let i=0; i < 50; i ++) {
		if (i % 2 == 0) {
			rLines.push(new randomLine(true));
		}
		if (i % 3 == 0) {
			rLines.push(new fastestLine(true));
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
	rLines.sort((a, b) => a.Diameter - b.Diameter);
	for (let i = 0; i < rLines.length; i++) {
			rLines[i].moveLine();
			rLines[i].makeLine(); // invoke/call function method from rLines array
//			counter++;
//			console.log(counter);
//		 if ((rLines[i].X + rLines[i].length) <= 0) {
		if (rLines[i].X + rLines[i].Diameter  < 0) {
			if (rLines[i].constructor.name == "randomLine") {
				rLines[i] = new randomLine(false);
			}
//			else if (rLines[i].constructor.name == "randomLine") {
//				rLines[i] = new fastestLine(false);
//			}
			else {
				rLines[i] = new fastLine(false);
				rLines[i] = new fastestLine(false);
			}
    	}
	}
	// add img here:
}
	


