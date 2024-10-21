var colors = [
  [255,0,0,70],
  [137,140,139,150],
  [214,251,61,80],
  [64,0,54,120],
  [251,163,35,130],
  [145,145,81,150],
  [254,178,40,80],
  [251,65,170,70],
  [255,65,55,80],
];

class randomLine {
		
	constructor(isInit) {
		let minX = isInit ? 0 : windowWidth; // check if isInit is true or false: if true, return 0, if false return windowWidth (ternary operator);
		let X = random(minX,windowWidth *1.6);
		let Y = random(0 + (0.25 * windowHeight),windowHeight - (0.25 * windowHeight));
		let Length = random(15,25);
		let Thickness = random(3,13);
//		let Speed = random(5,60);
		let Speed = map(Thickness, 1, 10, 12, 8);
		
/*		if (abs(X-Length) < 25) {
			Length = X + 25;
		}*/
			
		this.X = X;
		this.Y = Y;
		this.Length = Length;
		this.Thickness = Thickness;
		this.Speed = Speed;
		this.color = color(random(colors));  // this.color = a new P5 Color with a random value from the 'colors' array;
		this.color.setAlpha(255);
	}
	
	makeLine() {
		strokeWeight(this.Thickness)
		stroke(this.color);
		line(this.X,this.Y,this.X + this.Length,this.Y);
	}
	
	moveLine() {
		this.X = this.X - this.Speed;
//		this.Length = this.Length - this.Speed;
	}
}

class fastLine extends randomLine {
	constructor(isInit) {
		super(isInit);
		this.Speed = map(this.Thickness, 1, 10, 22, 18);
	}
}