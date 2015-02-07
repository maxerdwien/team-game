var Bullet_tower = function(x, y) {
	this.x = x;
	this.y = y;
	
	this.image = resources.towers_sprite_sheet;
	this.spritex = 0;
	this.spritey = 0;
	
	this.angle = 0;
	
	this.damage = 10;
	
	this.max_cannon_cooldown = 600;
	this.cannon_cooldown = this.max_cannon_cooldown;
	this.cannon_ready = false;
}

Bullet_tower.prototype = new Tower();

Bullet_tower.prototype.update = function(elapsedTime) {
	if (!this.cannon_ready) {
		this.cannon_cooldown -= elapsedTime;
		if (this.cannon_cooldown <= 0) {
			this.cannon_ready = true;
			this.cannon_cooldown = this.max_cannon_cooldown;
		}
	}
	
	for (var i = 0; i < game.baddies.length; i++) {
		if (this.cannon_ready &&
			game.cd.detect(this.getRange(), game.baddies[i].getHitbox())) {
			this.pointAt(game.baddies[i]);
			game.baddies[i].health -= this.damage;
			this.cannon_ready = false;
			break;
		}
	}
	if (this.angle >= 2*Math.PI) {
		this.angle -= 2*Math.PI;
	}
	if (this.angle < 0) {
		this.angle += Math.PI;
	}
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
}