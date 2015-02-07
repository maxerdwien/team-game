var Bullet_tower = function(x, y) {
	this.x = x;
	this.y = y;
	
	this.image = resources.towers_sprite_sheet;
	this.spritex = 0;
	this.spritey = 0;
	
	this.angle = 0;
}

Bullet_tower.prototype = new Tower();

Bullet_tower.prototype.update = function(elapsedTime) {
	this.angle += 0.006;
	if (this.angle >= 2*Math.PI) {
		this.angle -= 2*Math.PI;
	}
	if (this.angle < 0) {
		this.angle += Math.PI;
	}
}