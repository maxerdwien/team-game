var Virus = function(x, y) {
	this.x = x;
	this.y = y;
	
	this.image = resources.pipes_sprite_sheet;
	this.spritex = 0;
	this.spritey = 0;
}

Virus.prototype = new Baddie();

Virus.prototype.update = function(elapsedTime) {

}