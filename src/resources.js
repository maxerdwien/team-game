var Resources = function() {
	// load in sprite sheets
	this.pipes_sprite_sheet = new Image(1152, 192);
	this.pipes_sprite_sheet.src = "images/Pipes v4.png";
	
	this.enemies_sprite_sheet = new Image(960, 64);
	this.enemies_sprite_sheet.src = "images/Enemies v2.png";
	
	this.towers_sprite_sheet = new Image(512, 64);
	this.towers_sprite_sheet.src = "images/Towers v3.png";
	
	this.tower_defense_sprite_sheet = new Image(768, 64);
	this.tower_defense_sprite_sheet.src = "images/TowerDefense v3.png";
	
	this.hex_sprite_sheet = new Image(512, 32);
	this.hex_sprite_sheet.src = "images/Hex v2.png";
	
	this.middle_sprite_sheet = new Image(960, 64);
	this.middle_sprite_sheet.src = "images/Middle v1.png";
	
	this.mana_sprite_sheet = new Image(1088, 64);
	this.mana_sprite_sheet.src = "images/ManaBar v5.png";
	
	this.intruder_alert = new Image(320, 320);
	this.intruder_alert.src = "images/IntruderAlert v1.png";
	
	this.masher_game_over = new Image(320, 320);
	this.masher_game_over.src = "images/MasherGameOver v1.png";
	
	this.hack_bar = new Image(64, 64);
	this.hack_bar.src = "images/HackBar v1.png";
}