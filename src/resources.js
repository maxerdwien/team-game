var Resources = function() {
	// load in sprite sheets
	this.pipes_sprite_sheet = new Image(1152, 192);
	this.pipes_sprite_sheet.src = "images/Pipes v3.png";
	
	this.enemies_sprite_sheet = new Image(960, 64);
	this.enemies_sprite_sheet.src = "images/Enemies v2.png";
	
	this.towers_sprite_sheet = new Image(512, 64);
	this.towers_sprite_sheet.src = "images/Towers v3.png";
	
	this.tower_defense_sprite_sheet = new Image(768, 64);
	this.tower_defense_sprite_sheet.src = "images/TowerDefense v3.png";
	
	this.hex_sprite_sheet = new Image(512, 32);
	this.hex_sprite_sheet.src = "images/Hex v2.png";
}