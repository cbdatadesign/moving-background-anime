let rLines = [];

function setup () {
	colorMode(HSB, 360, 100, 100, 100);
	angleMode(DEGREES);
	ellipseMode(RADIUS);
	
	createCanvas(windowWidth, windowHeight);
	
	for (let i=0; i < 50; i++) {
		rLines.push(new randomCircle(true));
	} 
	for (let i=0; i < 15; i++) {
		rLines.push(new fastestCircle(true));
	}
	for (let i=0; i < 8; i++) {
		rLines.push(new fastCircle(true));
	}
	for (let i=0; i < 3; i++) {
		rLines.push(new extraFastestCircle(true));
	}
	for (let i=0; i < 7; i++) {
		rLines.push(new star(true));
	}
}

//function mouseClicked() {
//	saveCanvas("layer.jpg");
//}

function draw () {
//	counter = 0;
	background(4,12,25);
	
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
			else if (rLines[i].constructor.name == "star") {
				rLines[i] = new star(false);
			}
			else if (rLines[i].constructor.name == "extraFastestCircle") {
				rLines[i] = new extraFastestCircle(false);
			}
    	}
	}
	// add img here:
}
	


