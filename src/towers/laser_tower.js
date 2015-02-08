var Laser_tower = function(x, y) {
	this.x = x;
	this.y = y;
	
	this.image = resources.towers_sprite_sheet;
	this.spritex = 384;
	this.spritey = 0;
	
	// always either 0, pi/2, pi, or 3pi/2
	this.angle = 0;
	
	this.damage = 12;
	
	this.max_cannon_cooldown = 800;
	this.cannon_cooldown = this.max_cannon_cooldown;
	this.cannon_ready = true;
	
	this.max_firing_cooldown = 200;
	this.firing_cooldown = this.max_firing_cooldown;
	this.firing = false;
	
	this.mode = "ready";
}

Laser_tower.prototype = new Tower();

Laser_tower.prototype.update = function(elapsedTime) {
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
		
		for (var i = 0; i < game.baddies.length; i++) {
			if (this.cannon_ready) {
				var hitboxes = [
					{type:"rect", x:this.x+64, y:this.y+1, w:640, h:62},
					{type:"rect", x:this.x+1, y:this.y-640, w:62, h:640},
					{type:"rect", x:this.x-640, y:this.y+1, w:640, h:62},
					{type:"rect", x:this.x+1, y:this.y+64, w:62, h:640}];
				for (var k = 0; k < 4; k++) {
					if (game.cd.detect(hitboxes[k], game.baddies[i].getHitbox())) {
						this.angle = (3-k)*Math.PI/2 + Math.PI;
						if (this.angle < 0) {
							this.angle += 2*Math.PI;
						}
						if (this.angle >= 2*Math.PI) {
							this.angle -= 2*Math.PI;
						}
						game.baddies[i].hurt(this.damage);
						resources.laser_fire.play();
						
						// damage all baddies in the laser's path
						for (var j = i+1; j < game.baddies.length; j++) {
							if (game.cd.detect(hitboxes[k], game.baddies[j].getHitbox())) {
								game.baddies[j].hurt(this.damage);
							}
						}
						this.cannon_ready = false;
						this.firing = true;
						
						break;
					}
				}
			} else {
				break;
			}
		}
	}
}

Laser_tower.prototype.render = function(ctx) {
	if (this.mode == "dragging") {
		ctx.save();
		ctx.drawImage(resources.ranges_sprite_sheet, 448, 0, 64, 64,
			this.x, this.y, 64, 64);
		for (var i = 0; i < 10; i++) {
			ctx.drawImage(resources.ranges_sprite_sheet, 512, 0, 64, 64,
				this.x, this.y-64*i, 64, 64);
		}
		
		ctx.translate(this.x+32, this.y+32);
		ctx.rotate(Math.PI/2);
		ctx.translate(-(this.x+32), -(this.y+32));
		for (var i = 0; i < 10; i++) {
			ctx.drawImage(resources.ranges_sprite_sheet, 512, 0, 64, 64,
				this.x, this.y-64*i, 64, 64);
		}
		
		ctx.translate(this.x+32, this.y+32);
		ctx.rotate(Math.PI/2);
		ctx.translate(-(this.x+32), -(this.y+32));
		for (var i = 0; i < 10; i++) {
			ctx.drawImage(resources.ranges_sprite_sheet, 512, 0, 64, 64,
				this.x, this.y-64*i, 64, 64);
		}
		
		ctx.translate(this.x+32, this.y+32);
		ctx.rotate(Math.PI/2);
		ctx.translate(-(this.x+32), -(this.y+32));
		for (var i = 0; i < 10; i++) {
			ctx.drawImage(resources.ranges_sprite_sheet, 512, 0, 64, 64,
				this.x, this.y-64*i, 64, 64);
		}
		
		ctx.restore();
	}
	this.spritex = 384;
	if (this.firing) {
		this.spritex += 64;
	}
	ctx.save();
	ctx.translate(this.x + 32, this.y + 32);
	ctx.rotate(this.angle);
	ctx.translate(-(this.x + 32), -(this.y + 32));
	
	ctx.drawImage(this.image, this.spritex, this.spritey, 64, 64,
		this.x, this.y, 64, 64);
	if (this.firing) {
		for (var i = 1; i < 11; i++) {
			ctx.drawImage(this.image, 512 + 64*(i%2), 0, 64, 64, this.x, this.y-64*i, 64, 64);
		}
	}
	ctx.restore();
	
	
}

Laser_tower.prototype.getHitbox = function() {
	return {
		type: "rect",
		x: this.x,
		y: this.y,
		w: 64,
		h: 64
	};
}