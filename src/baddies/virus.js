var Virus = function(x, y, path) {
	this.x = x;
	this.y = y;
	
	this.path = path;
	this.path_index = 0;
	
	this.image = resources.enemies_sprite_sheet;
	this.spritex = 0;
	this.spritey = 0;
	
	// milliseconds to travel one large pixel
	this.millis_per_pixel = 30;
	
	this.millis_saved = 0;
	this.pixels_traveled = 0;
	
	this.max_health = 100;
	this.health = this.max_health;
	
	// milliseconds
	this.max_sprite_cooldown = 500;
	this.sprite_cooldown = this.max_sprite_cooldown;
}

Virus.prototype = new Baddie();

Virus.prototype.update = function(elapsedTime) {
	// move
	this.millis_saved += elapsedTime;
	if (this.millis_saved >= this.millis_per_pixel) {
		this.millis_saved -= this.millis_per_pixel;
		this.pixels_traveled++;
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
			this.pixels_traveled = 0;
		}
	}
	
	// change animation frame
	this.sprite_cooldown -= elapsedTime;
	if (this.sprite_cooldown <= 0) {
		this.sprite_cooldown = this.max_sprite_cooldown;
		if (this.spritex == 0) {
			this.spritex = 64;
		} else {
			this.spritex = 0;
		}
	}
}