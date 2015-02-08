var Worm = function(x, y, path) {
	this.x = x;
	this.y = y;

	this.path = path;
	this.path_index = 0;
	
	this.image = resources.enemies_sprite_sheet;
	this.spritex = 0;
	this.spritey = 64;
	
	this.dead = false;
	
	this.attack = 1;
	
	this.wiggle_state = 0;
	this.wiggle_direction = 1;
	
	this.damage_level = 0;
	
	// milliseconds to travel one large pixel
	this.millis_per_pixel = 17;
	
	this.millis_saved = 0;
	this.pixels_traveled = 0;
	
	this.max_health = 80;
	this.health = this.max_health;
	
	// milliseconds
	this.max_sprite_cooldown = 170;
	this.sprite_cooldown = this.max_sprite_cooldown;
}

Worm.prototype = new Baddie();

Worm.prototype.update = function(elapsedTime) {
	// move
	this.millis_saved += elapsedTime;
	if (this.millis_saved >= this.millis_per_pixel) {
		this.millis_saved -= this.millis_per_pixel;
		this.pixels_traveled++;
		this.wiggle_direction = this.path[this.path_index];
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
		this.wiggle_state = (this.wiggle_state + 1) % 5;
	}
}

Worm.prototype.render = function(ctx) {
	ctx.save();
	this.spritex = 128*this.wiggle_state + 64*this.damage_level;
	if (this.wiggle_direction == 0 || this.wiggle_direction == 2) {
		ctx.translate(this.x+32, this.y+32);
		ctx.rotate(Math.PI/2);
		ctx.translate(-(this.x+32), -(this.y+32));
	}
	ctx.drawImage(this.image, this.spritex, this.spritey, 64, 64,
		this.x, this.y, 64, 64);
	ctx.restore();
}

Worm.prototype.hurt = function(damage) {
	this.health -= damage;
	
	// change sprite damage amount
	if (this.health < this.max_health/3) {
		this.damage_level = 1;
	}
	if (this.health <= 0) {
		this.dead = true;
		var chance = Math.random()*100;
		if (chance < 5) resources.wilhelm_scream.play();
		else resources.die_scream.play();
	}
}