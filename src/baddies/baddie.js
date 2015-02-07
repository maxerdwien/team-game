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
	
	getHitbox: function() {
		return {
			type: "rect",
			x: this.x,
			y: this.y,
			w: 64,
			h: 64
		};
	},
	
	attackCPU: function() {
		game.mana.remaining_mana -= this.attack;
	}
}