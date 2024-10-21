
let rLines = [];

function setup () {
	colorMode(HSB, 360, 100, 100, 100);
	ellipseMode(RADIUS);
	createCanvas(windowWidth,windowHeight);
	for (let i=0; i < 20; i ++) {
		if (i % 2 == 0) {
			rLines.push(new randomCircle(true));
		}
		if (i % 3 == 0) {
			rLines.push(new fastestCircle(true));
		}
		else {
			rLines.push(new fastCircle(true));
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
			rLines[i].moveCircle();
			rLines[i].makeCircle(); // invoke/call function method from rLines array
//			counter++;
//			console.log(counter);
//		 if ((rLines[i].X + rLines[i].length) <= 0) {
		if (rLines[i].X + rLines[i].Diameter  < 0) {  // = "if the shape is offscreen..."
			if (rLines[i].constructor.name == "randomCircle") {  
				rLines[i] = new randomCircle(false);  // = "build a new one offscreen"
			}
			else if (rLines[i].constructor.name == "fastCircle")  {
				rLines[i] = new fastCircle(false);
			}
			else if (rLines[i].constructor.name == "fastestCircle") {
				rLines[i] = new fastestCircle(false);
			}

    	}
	}
	// add img here:
}
	


