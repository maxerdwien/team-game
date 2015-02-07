var Tower = function() {
	this.x;
	this.y;
	
	this.image;
	this.spritex;
	this.spritey;
}

Tower.prototype = {
	render: function(ctx) {
		ctx.save();
		var x = this.x;
		var y = this.y;
		//ctx.translate(WIDTH,HEIGHT);
		if (this.angle > 31*Math.PI/16 && this.angle <= 32*Math.PI/16 ||
			this.angle > 0*Math.PI/16 && this.angle <= 1*Math.PI/16) {
			this.spritex = 0;
		}
		if (this.angle > 1*Math.PI/16 && this.angle <= 3*Math.PI/16) {
			this.spritex = 64;
		}
		if (this.angle > 3*Math.PI/16 && this.angle <= 5*Math.PI/16) {
			this.spritex = 128;
		}
		if (this.angle > 5*Math.PI/16 && this.angle <= 7*Math.PI/16) {
			this.spritex = 64;
			ctx.translate(this.x, this.y);
			ctx.rotate(Math.PI/2);
			ctx.translate(this.x+64, -this.y-64);
			ctx.scale(-1,1);
		}
		if (this.angle > 7*Math.PI/16 && this.angle <= 9*Math.PI/16) {
			this.spritex = 0;
			ctx.translate(this.x, this.y);
			ctx.rotate(Math.PI/2);
			ctx.translate(-this.x, -this.y-64);
		}
		if (this.angle > 9*Math.PI/16 && this.angle <= 11*Math.PI/16) {
			this.spritex = 64;
			ctx.translate(this.x, this.y);
			ctx.rotate(Math.PI/2);
			ctx.translate(-this.x, -this.y-64);
		}
		if (this.angle > 11*Math.PI/16 && this.angle <= 13*Math.PI/16) {
			this.spritex = 128;
			ctx.translate(this.x, this.y);
			ctx.rotate(Math.PI/2);
			ctx.translate(-this.x, -this.y-64);
		}
		if (this.angle > 13*Math.PI/16 && this.angle <= 15*Math.PI/16) {
			this.spritex = 64;
			ctx.translate(this.x, this.y);
			ctx.rotate(Math.PI);
			ctx.translate(this.x, -this.y-64);
			ctx.scale(-1,1);
		}
		if (this.angle > 15*Math.PI/16 && this.angle <= 17*Math.PI/16) {
			this.spritex = 0;
			ctx.translate(this.x, this.y);
			ctx.rotate(Math.PI);
			ctx.translate(-this.x-64, -this.y-64);
		}
		if (this.angle > 17*Math.PI/16 && this.angle <= 19*Math.PI/16) {
			this.spritex = 64;
			ctx.translate(this.x, this.y);
			ctx.rotate(Math.PI);
			ctx.translate(-this.x-64, -this.y-64);
		}
		if (this.angle > 19*Math.PI/16 && this.angle <= 21*Math.PI/16) {
			this.spritex = 128;
			ctx.translate(this.x, this.y);
			ctx.rotate(Math.PI);
			ctx.translate(-this.x-64, -this.y-64);
		}
		if (this.angle > 21*Math.PI/16 && this.angle <= 23*Math.PI/16) {
			this.spritex = 64;
			ctx.translate(this.x, this.y);
			ctx.rotate(3*Math.PI/2);
			ctx.translate(this.x, -this.y);
			ctx.scale(-1,1);
		}
		if (this.angle > 23*Math.PI/16 && this.angle <= 25*Math.PI/16) {
			this.spritex = 0;
			ctx.translate(this.x, this.y);
			ctx.rotate(3*Math.PI/2);
			ctx.translate(-this.x-64, -this.y);
		}
		if (this.angle > 25*Math.PI/16 && this.angle <= 27*Math.PI/16) {
			this.spritex = 64;
			ctx.translate(this.x, this.y);
			ctx.rotate(3*Math.PI/2);
			ctx.translate(-this.x-64, -this.y);
		}
		if (this.angle > 27*Math.PI/16 && this.angle <= 29*Math.PI/16) {
			this.spritex = 128;
			ctx.translate(this.x, this.y);
			ctx.rotate(3*Math.PI/2);
			ctx.translate(-this.x-64, -this.y);
		}
		if (this.angle > 29*Math.PI/16 && this.angle <= 31*Math.PI/16) {
			this.spritex = 64;
			ctx.translate(2*this.x+64, 0);
			ctx.scale(-1,1);
		}
		
		console.log(this.angle);
		//ctx.scale(-1,-1);
		ctx.drawImage(this.image, this.spritex, this.spritey, 64, 64,
			this.x, this.y, 64, 64);
		ctx.restore();
	}
}