var Baddie = function() {
	this.x;
	this.y;
	
	this.image;
	this.spritex;
	this.spritey;
	
	this.max_health;
	this.health;
}

Baddie.prototype = {
	render: function(ctx) {
		ctx.save();
		ctx.drawImage(this.image, this.spritex, this.spritey, 64, 64,
			this.x, this.y, 64, 64);
		ctx.restore();
	},
	
	getHitbox: function() {
		return {
			type: "rect",
			x: this.x,
			y: this.y,
			w: 64,
			h: 64
		};
	}
}