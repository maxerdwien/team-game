var Zappy_tower = function(x, y) {
	this.x = x;
	this.y = y;
	
	this.image = resources.towers_sprite_sheet;
	this.spritex = 640;
	this.spritey = 0;
	
	// damage per millisecond
	this.damage = 0.08;
	
	this.max_cannon_cooldown = 2700;
	this.cannon_cooldown = this.max_cannon_cooldown;
	this.cannon_ready = true;
	
	this.max_firing_cooldown = 800;
	this.firing_cooldown = this.max_firing_cooldown;
	this.firing = false;
	
	this.mode = "ready";
	
	this.zap_index = 0;
	this.max_zap_sprite_cooldown = 30;
	this.zap_sprite_cooldown = this.max_zap_sprite_cooldown;
}

Zappy_tower.prototype = new Tower();

Zappy_tower.prototype.update = function(elapsedTime) {
	if (this.mode == "deployed") {
		if (!this.cannon_ready) {
			this.cannon_cooldown -= elapsedTime;
			if (this.cannon_cooldown <= 0) {
				this.cannon_ready = true;
				this.cannon_cooldown = this.max_cannon_cooldown;
			}
		}
		if (this.firing) {
			this.firing_cooldown -= elapsedTime;
			if (this.firing_cooldown <= 0) {
				this.firing_cooldown = this.max_firing_cooldown;
				this.firing = false;
			}
		}
		
		if (this.cannon_ready) {
			for (var i = 0; i < game.baddies.length; i++) {
				if (game.cd.detect(this.getRange(), game.baddies[i].getHitbox())) {
					this.cannon_ready = false;
					this.firing = true;
					break;
				}
			}
		}
		
		if (this.firing) {
			for (var i = 0; i < game.baddies.length; i++) {
				if (game.cd.detect(this.getRange(), game.baddies[i].getHitbox())) {
					game.baddies[i].hurt(this.damage*elapsedTime);
				}
			}
			this.zap_sprite_cooldown -= elapsedTime;
			if (this.zap_sprite_cooldown <= 0) {
				this.zap_sprite_cooldown = this.max_zap_sprite_cooldown;
				this.zap_index++;
				this.zap_index = this.zap_index % 3;
			}
		}
	}
}

Zappy_tower.prototype.render = function(ctx) {
	if (this.mode == "dragging") {
		ctx.save();
		ctx.drawImage(resources.ranges_sprite_sheet, 256, 0, 192, 192,
			this.x+(32-96), this.y+(32-96), 192, 192);
		ctx.restore();
	}
	this.spritex = 640;
	if (this.firing) {
		this.spritex += 64;
	}
	ctx.save();
	
	ctx.drawImage(this.image, this.spritex, this.spritey, 64, 64,
		this.x, this.y, 64, 64);
	if (this.firing) {
		ctx.drawImage(resources.zappy_sprite_sheet, 0+this.zap_index*192, 0, 192, 192, this.x+(32-96), this.y+(32-96), 192, 192);
	}
	ctx.restore();	
}

Zappy_tower.prototype.getRange = function() {
	return {
		type: "circle",
		x: this.x + 32,
		y: this.y + 32,
		r: 96
	};
}

Zappy_tower.prototype.getHitbox = function() {
	return {
		type: "rect",
		x: this.x,
		y: this.y,
		w: 64,
		h: 64
	};
}