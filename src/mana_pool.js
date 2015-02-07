var Mana_pool = function() {
	this.offset = 0;
	
	this.remaining_mana = 20;
	
	this.max_shift_cooldown = 220;
	this.shift_cooldown = this.max_shift_cooldown;
}

Mana_pool.prototype = {
	render: function(ctx) {
		ctx.save();
		for (var i = 0; i < this.remaining_mana; i++) {
			ctx.drawImage(resources.mana_sprite_sheet,
				((i+this.offset)%17)*64, 0, 64, 64,
				i*64, 576, 64, 64);
		}
		ctx.restore();
	},
	
	update: function(elapsedTime) {
		this.shift_cooldown -= elapsedTime;
		if (this.shift_cooldown <= 0) {
			this.shift_cooldown = this.max_shift_cooldown;
			this.offset++;
		}
	}
}