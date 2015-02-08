var Bullet_tower = function(x, y) {
	this.x = x;
	this.y = y;
	
	this.image = resources.towers_sprite_sheet;
	this.spritex = 0;
	this.spritey = 0;
	
	this.angle = 0;
	
	this.damage = 15;
	
	this.max_cannon_cooldown = 600;
	this.cannon_cooldown = this.max_cannon_cooldown;
	this.cannon_ready = true;
	
	this.max_firing_cooldown = 75;
	this.firing_cooldown = this.max_firing_cooldown;
	this.firing = false;
	
	this.mode = "ready";
}

Bullet_tower.prototype = new Tower();

Bullet_tower.prototype.update = function(elapsedTime) {
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
			if (this.cannon_ready &&
				game.cd.detect(this.getRange(), game.baddies[i].getHitbox())) {
				this.pointAt(game.baddies[i]);
				game.baddies[i].hurt(this.damage);
				resources.bullet_fire.play();
				this.cannon_ready = false;
				this.firing = true;
				break;
			}
		}
	}
}

Bullet_tower.prototype.render = function(ctx) {
	if (this.mode == "dragging") {
		ctx.save();
		ctx.drawImage(resources.ranges_sprite_sheet, 0, 0, 256, 256,
			this.x+(32-128), this.y+(32-128), 256, 256);
		ctx.restore();
	}
	ctx.save();
	var x = this.x;
	var y = this.y;
	if (this.angle > 31*Math.PI/16 && this.angle < 32*Math.PI/16 ||
		this.angle >= 0*Math.PI/16 && this.angle <= 1*Math.PI/16) {
		this.spritex = 0;
	}
	if (this.angle > 1*Math.PI/16 && this.angle <= 3*Math.PI/16) {
		this.spritex = 128;
	}
	if (this.angle > 3*Math.PI/16 && this.angle <= 5*Math.PI/16) {
		this.spritex = 256;
	}
	if (this.angle > 5*Math.PI/16 && this.angle <= 7*Math.PI/16) {
		this.spritex = 128;
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
		this.spritex = 128;
		ctx.translate(this.x, this.y);
		ctx.rotate(Math.PI/2);
		ctx.translate(-this.x, -this.y-64);
	}
	if (this.angle > 11*Math.PI/16 && this.angle <= 13*Math.PI/16) {
		this.spritex = 256;
		ctx.translate(this.x, this.y);
		ctx.rotate(Math.PI/2);
		ctx.translate(-this.x, -this.y-64);
	}
	if (this.angle > 13*Math.PI/16 && this.angle <= 15*Math.PI/16) {
		this.spritex = 128;
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
		this.spritex = 128;
		ctx.translate(this.x, this.y);
		ctx.rotate(Math.PI);
		ctx.translate(-this.x-64, -this.y-64);
	}
	if (this.angle > 19*Math.PI/16 && this.angle <= 21*Math.PI/16) {
		this.spritex = 256;
		ctx.translate(this.x, this.y);
		ctx.rotate(Math.PI);
		ctx.translate(-this.x-64, -this.y-64);
	}
	if (this.angle > 21*Math.PI/16 && this.angle <= 23*Math.PI/16) {
		this.spritex = 128;
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
		this.spritex = 128;
		ctx.translate(this.x, this.y);
		ctx.rotate(3*Math.PI/2);
		ctx.translate(-this.x-64, -this.y);
	}
	if (this.angle > 27*Math.PI/16 && this.angle <= 29*Math.PI/16) {
		this.spritex = 256;
		ctx.translate(this.x, this.y);
		ctx.rotate(3*Math.PI/2);
		ctx.translate(-this.x-64, -this.y);
	}
	if (this.angle > 29*Math.PI/16 && this.angle <= 31*Math.PI/16) {
		this.spritex = 128;
		ctx.translate(2*this.x+64, 0);
		ctx.scale(-1,1);
	}
	
	if (this.firing) {
		this.spritex += 64;
	}
	
	ctx.drawImage(this.image, this.spritex, this.spritey, 64, 64,
		this.x, this.y, 64, 64);
	ctx.restore();
	
}

Bullet_tower.prototype.getRange = function() {
	return {
		type: "circle",
		x: this.x + 32,
		y: this.y + 32,
		r: 128
	};
}

Bullet_tower.prototype.pointAt = function(b) {
	// point the gun from the center of the tower to the center of the baddie
	var deltax = this.x - b.x;
	var deltay = this.y - b.y;
	
	this.angle = Math.atan(-deltax/deltay);
	if (deltay < 0) {
		this.angle += Math.PI;
	}
	if (this.angle >= 2*Math.PI) {
		this.angle -= 2*Math.PI;
	}
	if (this.angle < 0) {
		this.angle += 2*Math.PI;
	}
}

Bullet_tower.prototype.getHitbox = function() {
	return {
		type: "rect",
		x: this.x,
		y: this.y,
		w: 64,
		h: 64
	};
}