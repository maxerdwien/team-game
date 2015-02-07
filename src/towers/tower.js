var Tower = function() {
	this.image;
	this.spritex;
	this.spritey;
	
	this.x;
	this.y;
}

Tower.prototype = {
	update: function(elapsedTime) {
		
	},
	
	render: function(ctx) {
		ctx.save();
		ctx.drawImage(this.image, this.spritex, this.spritey, 16, 16,
			this.x, this.y, 64, 64);
		ctx.restore();
	}
}