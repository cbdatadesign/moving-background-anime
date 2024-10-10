
let rLines = [];

function setup () {
	createCanvas(windowWidth,windowHeight);
	for (let i=0; i < 300; i ++) {
			rLines.push(new randomLine());
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
			rLines[i].makeLine(); // invoke/call function method from rLines array
			rLines[i].moveLine();
//			counter++;
//			console.log(counter);
		 if (rLines[i].Length < 0) {
      		rLines[i] = new randomLine();
    	}
	}
	console.log(rLines);
}
	


