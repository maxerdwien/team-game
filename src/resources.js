var Resources = function() {
	// pipe sprites
	this.pipes_sprite_sheet = new Image(1152, 192);
	this.pipes_sprite_sheet.src = "images/Pipes v4.png";
	
	// td sprites
	this.enemies_sprite_sheet = new Image(960, 64);
	this.enemies_sprite_sheet.src = "images/Enemies v2.png";
	
	this.towers_sprite_sheet = new Image(512, 64);
	this.towers_sprite_sheet.src = "images/Towers v3.png";
	
	this.tower_defense_sprite_sheet = new Image(768, 64);
	this.tower_defense_sprite_sheet.src = "images/TowerDefense v5.png";
	
	this.wave_sprite_sheet = new Image(512, 64);
	this.wave_sprite_sheet.src = "images/Wave v2.png";
	
	this.ranges_sprite_sheet = new Image(576, 256);
	this.ranges_sprite_sheet.src = "images/Ranges v2.png";
	
	this.zappy_sprite_sheet = new Image(792, 192);
	this.zappy_sprite_sheet.src = "images/ZappyZap v1.png";
	
	// other gui sprites
	this.middle_sprite_sheet = new Image(960, 64);
	this.middle_sprite_sheet.src = "images/Middle v1.png";
	
	this.mana_sprite_sheet = new Image(1088, 64);
	this.mana_sprite_sheet.src = "images/ManaBar v6.png";
	
	// masher sprites
	this.masher_start = new Image(480, 320);
	this.masher_start.src = "images/MasherStart.png";
	
	this.intruder_alert = new Image(320, 320);
	this.intruder_alert.src = "images/IntruderAlert v2.png";
	
	this.masher_game_over = new Image(320, 320);
	this.masher_game_over.src = "images/MasherGameOver v1.png";
	
	this.hack_bar = new Image(64, 64);
	this.hack_bar.src = "images/HackBar v1.png";
	
	this.hex_sprite_sheet = new Image(512, 32);
	this.hex_sprite_sheet.src = "images/Hex v2.png";
	
	// cutscenes
	this.screen1 = new Image (1280, 320);
	this.screen1.src = "images/Screen1.png";
	
	this.screen2 = new Image (1280, 320);
	this.screen2.src = "images/Screen2.png";
	
	this.screen3 = new Image (1280, 320);
	this.screen3.src = "images/Screen3.png";
	
	this.prelevel1 = new Image (1280, 320);
	this.prelevel1.src = "images/PreLevel1.png";
	
	this.prelevel2 = new Image (1280, 320);
	this.prelevel2.src = "images/PreLevel2.png";
	
	this.prelevel3 = new Image (1280, 320);
	this.prelevel3.src = "images/PreLevel3.png";
	
	this.prelevel4 = new Image (1280, 320);
	this.prelevel4.src = "images/PreLevel4.png";
	
	this.prelevel5 = new Image (1280, 320);
	this.prelevel5.src = "images/PreLevel5.png";

	this.ranges_sprite_sheet = new Image(576, 256);
	this.ranges_sprite_sheet.src = "images/Ranges v2.png";
	
	this.game_over = new Image(1280, 320);
	this.game_over.src = "images/GameOver.png";
	
	this.level_complete = new Image(1280, 320);
	this.level_complete.src = "images/LevelComplete.png";
	
	this.end = new Image (1280, 320);
	this.end.src = "images/End.png";
	
	//Sound effects
	
	this.die_scream = new Audio();
	this.die_scream.src = "sfx/EnemyDeath.wav";
	
	this.wilhelm_scream = new Audio();
	this.wilhelm_scream.src = "sfx/64939__syna-max__wilhelm-scream.wav";
	
	this.bullet_fire = new Audio();
	this.bullet_fire.src = "sfx/Bullet.wav";
	
	this.laser_fire = new Audio();
	this.laser_fire.src = "sfx/laser.wav";
	
	this.zap_fire = new Audio();
	this.zap_fire.src = "sfx/131592__gowers__transformer-024-camera.wav";
	
	this.td_start = new Audio();
	this.td_start.src = "sfx/131006__shot846__robot-letsrock-by-shot846.wav";
	
	this.turret_get = new Audio();
	this.turret_get.src = "sfx/TurretPickup.wav";
	
	this.alarm = new Audio();
	this.alarm.src = "sfx/Alarm.wav";
	
	//Music
	
	this.td_music = new Audio();
	this.td_music.src = "music/48544__flick3r__rezzo-4.wav"
}