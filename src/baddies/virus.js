var Virus = function(x, y, path) {
	this.x = x;
	this.y = y;
	
<<<<<<< HEAD
	//this.image = game.pipes_sprite_sheet;
=======
	this.path = path;
	this.path_index = 0;
	
	this.image = resources.pipes_sprite_sheet;
>>>>>>> origin/master
	this.spritex = 0;
	this.spritey = 0;
	
	// pixels per millisecond
	this.speed = 0.1;
	
	this.distance_traveled = 0;
}

Virus.prototype = new Baddie();

Virus.prototype.update = function(elapsedTime) {
	this.distance_traveled += elapsedTime*this.speed;
	if (this.distance_traveled >= 64) {
		this.path_index++;
		this.distance_traveled = 0;
	}
	switch (this.path[this.path_index]) {
		case 0:
			this.x += elapsedTime*this.speed;
			break;
		case 1:
			this.y -= elapsedTime*this.speed;
			break;
		case 2:
			this.x -= elapsedTime*this.speed;
			break;
		case 3:
			this.y += elapsedTime*this.speed;
			break;
	}
}