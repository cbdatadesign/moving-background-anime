var colors = [
  [330,100,50,70],
  [137,140,139,150],
  [214,251,61,80],
  [64,0,54,120],
  [251,163,35,130],
  [145,145,81,150],
  [254,178,40,80],
  [251,65,170,70],
  [255,65,55,80],
];

class randomCircle {
	
	constructor(isInit,
				minDiameter = 30,
			   	maxDiameter = 50,
				maxSpeed = 2,
				minSpeed = 1) {
		
		// check if isInit is true (starting onscreen) or false (starting offscreen):
		// if true, return 0, if false return windowWidth (ternary operator);
		let minX = isInit ? 0 : windowWidth; 
		this.X = random(minX, windowWidth * 1.6);
		this.Y = random(0 + (0.25 * windowHeight), windowHeight - (0.25 * windowHeight));
		
		this.Diameter = random(minDiameter, maxDiameter);
		this.Radius = this.Diameter * 0.5;
		this.Speed = map(this.Diameter, minDiameter, maxDiameter, maxSpeed, minSpeed);
		
		this.hsb = random(colors);
		this.color = color(this.hsb);  // this.color = a new P5 Color with a random value from the 'colors' array;
		this.alpha = 100;
		this.color.setAlpha(this.alpha);
		this.alphaOffset = random(0,360);
		
//		let Thickness = random(3,5);
//		if (abs(X-Length) < 25) {
//			Length = X + 25;
//		}
	}
	
	drawGradient() {
		let myGradient = drawingContext.createRadialGradient(this.X, this.Y, 0, this.X, this.Y, this.Radius);
		this.color.setAlpha(this.alpha);
		myGradient.addColorStop(0, this.color);
		this.color.setAlpha(this.alpha * 0.5);
		myGradient.addColorStop(0.5, this.color);
		this.color.setAlpha(0);
		myGradient.addColorStop(1, this.color);
		this.color.setAlpha(this.alpha);
		drawingContext.fillStyle = myGradient;
		drawingContext.strokeStyle = 'rgba(0, 0, 0, 0)';
		drawingContext.shadowBlur = 93;
		drawingContext.shadowColor = this.color;
		ellipse(this.X, this.Y, this.Radius);
	}
	
	fadeInOut() {
		let angle = (frameCount + this.alphaOffset) * 2;
		this.alpha = map(sin(angle), -1,1,0,100);
		this.color.setAlpha(this.alpha);
	}
	makeCircle() {
		push();
//		strokeWeight(this.Thickness)
//		noStroke();
//		fill(this.color);
//		drawingContext.shadowBlur = 143;
//		drawingContext.shadowColor = this.color;
//		ellipse(this.X,this.Y,this.Diameter);
		this.drawGradient();
		pop();
	}
	
	moveCircle() {
		this.X = this.X - this.Speed;
//		this.Length = this.Length - this.Speed;
	}
}

class fastCircle extends randomCircle {
	constructor(isInit) {
		super(isInit, 40, 70, 4, 2.5);
	}
}

class fastestCircle extends randomCircle {
	constructor(isInit) {
		super(isInit, 110, 250, 6, 4.5);
	}
}

class extraFastestCircle extends randomCircle {
	constructor(isInit) {
		super(isInit, 300, 560, 9, 6.5);
	}
}

class star extends randomCircle {
	constructor(isInit) {
		super(isInit,2, 10, 0.8, 0.5);
		this.Angle = random([0, 90]);
		this.color = color(64,0,54,5);
	}
	
	drawGradient() {
		let myGradient = drawingContext.createRadialGradient(0, 0, 0, 0, 0, this.Radius);
		this.color.setAlpha(this.alpha);
		myGradient.addColorStop(0, this.color);
		this.color.setAlpha(this.alpha * 0.5);
		myGradient.addColorStop(0.5, this.color);
		this.color.setAlpha(0);
		myGradient.addColorStop(1, this.color);
		this.color.setAlpha(this.alpha);
		drawingContext.fillStyle = myGradient;
		drawingContext.strokeStyle = 'rgba(0, 0, 0, 0)';
		ellipse(0, 0, this.Radius);
	}
	
	makeCircle() {
		push();
		translate(this.X, this.Y);
		rotate(this.Angle);
		noStroke();
		this.fadeInOut();
		drawingContext.shadowBlur = 36;
		drawingContext.shadowColor = this.color;
		// rect(width/2,height/2, 300,300,30);
		this.drawGradient();
		fill(this.color);
//		this.color.setAlpha(sin(2));
		ellipse(0, 0, this.Radius/7, this.Diameter * 3);
		ellipse(0, 0, this.Diameter *2, this.Radius/7);
		noFill();
		drawingContext.shadowBlur = 16;
		drawingContext.shadowColor = this.color;
		// rect(width/2,height/2, 300,300,30);
		this.drawGradient();
		fill(this.color);
//		this.color.setAlpha(sin(2));
		ellipse(0, 0, this.Radius/7, this.Diameter * 3);
		ellipse(0, 0, this.Diameter *2, this.Radius/7);
		pop();
		
		// TODO use framecount and sin to pulse opacity
	}
}
