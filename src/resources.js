var Resources = function() {
	// load in sprite sheets
	this.pipes_sprite_sheet = new Image(1152, 192);
	this.pipes_sprite_sheet.src = "images/Pipes v3.png";
	
	this.enemies_sprite_sheet = new Image(960, 64);
	this.enemies_sprite_sheet.src = "images/Enemies v2.png";
	
	this.towers_sprite_sheet = new Image(512, 64);
	this.towers_sprite_sheet.src = "images/Towers v3.png";
}