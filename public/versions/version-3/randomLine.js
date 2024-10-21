var colors = [
  [330,100,0,70],
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
		
	constructor(isInit) {
		let minX = isInit ? 0 : windowWidth; // check if isInit is true (starting onscreen) or false (starting offscreen): if true, return 0, if false return windowWidth (ternary operator);
		let X = random(minX,windowWidth *1.6);
		let Y = random(0 + (0.25 * windowHeight),windowHeight - (0.25 * windowHeight));
		let Diameter = 100;  //random(15,25);
		let Thickness = random(3,5);
//		let Speed = random(5,60);
		let Speed = map(Thickness, 1, 10, 2, 1);
		let Radius = Diameter / 2;
		
/*		if (abs(X-Length) < 25) {
			Length = X + 25;
		}*/
			
		this.X = X;
		this.Y = Y;
		this.Diameter = Diameter;
		this.Thickness = Thickness;
		this.Speed = Speed;
		this.hsb = random(colors);
		this.color = color(this.hsb);  // this.color = a new P5 Color with a random value from the 'colors' array;
		this.color.setAlpha(100);
		this.Radius = Radius;
	}
	
	drawGradient() {
		let myGradient = drawingContext.createRadialGradient(this.X,this.Y, 0, this.X,this.Y, this.Diameter);
		  this.color.setAlpha(100);
		  myGradient.addColorStop(0, this.color);
		  this.color.setAlpha(50);
		  myGradient.addColorStop(0.5, this.color);
		  this.color.setAlpha(0);
		  myGradient.addColorStop(1, this.color);
		  this.color.setAlpha(100);
		  drawingContext.fillStyle = myGradient;
		  drawingContext.strokeStyle = 'rgba(0, 0, 0, 0)';	
		  drawingContext.shadowBlur = 43;
		  drawingContext.shadowColor = this.color;
		  ellipse(this.X, this.Y, this.Diameter);
		}
	
	makeCircle() {
//		strokeWeight(this.Thickness)
//		noStroke();
//		fill(this.color);
//		drawingContext.shadowBlur = 143;
//		drawingContext.shadowColor = this.color;
//		ellipse(this.X,this.Y,this.Diameter);
		this.drawGradient();
	}
	
	moveCircle() {
		this.X = this.X - this.Speed;
//		this.Length = this.Length - this.Speed;
	}
}

class fastCircle extends randomCircle {
	constructor(isInit) {
		super(isInit);
		this.Speed = map(this.Thickness, 1, 10, 4, 3);
		this.Diameter = random(20,35);
	}
}

class fastestCircle extends randomCircle {
	constructor(isInit) {
		super(isInit);
		this.Speed = map(this.Thickness, 1, 10, 8, 7);
		this.Diameter = random(195,55);
	}
}