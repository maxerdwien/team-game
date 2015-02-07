var Baddie = function() {
	this.x;
	this.y;
	
	this.image;
	this.spritex;
	this.spritey;
	
	this.health;
}

Baddie.prototype = {
	render: function(ctx) {
		ctx.save();
		ctx.drawImage(this.image, this.spritex, this.spritey, 64, 64,
			this.x, this.y, 64, 64);
		ctx.restore();
	}
}