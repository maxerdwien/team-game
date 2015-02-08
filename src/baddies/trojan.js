var Trojan = function(x, y, path) {
	this.x = x;
	this.y = y;

	this.path = path;
	this.path_index = 0;
	
	this.image = resources.enemies_sprite_sheet;
	this.spritex = 0;
	this.spritey = 128;
	
	this.dead = false;
	
	this.attack = 5;
	
	this.right_foot = true;
	
	this.damage_level = 0;
	
	// milliseconds to travel one large pixel
	this.millis_per_pixel = 65;
	
	this.millis_saved = 0;
	this.pixels_traveled = 0;
	
	this.max_health = 300;
	this.health = this.max_health;
	
	// milliseconds
	this.max_sprite_cooldown = 700;
	this.sprite_cooldown = this.max_sprite_cooldown;
}

Trojan.prototype = new Baddie();

Trojan.prototype.update = function(elapsedTime) {
	// move
	this.millis_saved += elapsedTime;
	if (this.millis_saved >= this.millis_per_pixel) {
		this.millis_saved -= this.millis_per_pixel;
		this.pixels_traveled++;
		this.walk_direction = this.path[this.path_index];
		switch (this.path[this.path_index]) {
			case 0:
				this.x += 4;
				break;
			case 1:
				this.y -= 4;
				break;
			case 2:
				this.x -= 4;
				break;
			case 3:
				this.y += 4;
				break;
		}
		if (this.pixels_traveled >= 16) {
			this.path_index++;
			if (this.path_index > this.path.length-1) {
				this.attackCPU();
			}
			this.pixels_traveled = 0;
		}
	}
	
	// change animation frame
	this.sprite_cooldown -= elapsedTime;
	if (this.sprite_cooldown <= 0) {
		this.sprite_cooldown = this.max_sprite_cooldown;
		this.right_foot = !this.right_foot;
	}
}

Trojan.prototype.render = function(ctx) {
	ctx.save();
	this.spritex = 64*this.damage_level + 384*this.right_foot;
	if (this.walk_direction == 0 || this.walk_direction == 2) {
		this.spritex += 768;
	}
	ctx.drawImage(this.image, this.spritex, this.spritey, 64, 64,
		this.x, this.y, 64, 64);
	ctx.restore();
}

Trojan.prototype.hurt = function(damage) {
	this.health -= damage;
	
	// change sprite damage amount
	if (this.health < (5-this.damage_level)*this.max_health/6) {
		this.damage_level++;
	}
	if (this.health <= 0) {
		this.dead = true;
		var chance = Math.random()*100;
		if (chance < 5) resources.wilhelm_scream.play();
		else resources.die_scream.play();
	}
}