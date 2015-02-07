var Baddie = function() {
	this.x;
	this.y;
	
	this.image;
	this.spritex;
	this.spritey;
	
}

Baddie.prototype = {
	render: function(ctx) {
		console.log("rendering");
		ctx.save();
		ctx.drawImage(this.image, this.spritex, this.spritey, 16, 16,
			this.x, this.y, 64, 64);
		ctx.restore();
	}
}