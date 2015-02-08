var TD_level = function(level) {
	if (level == 0) {
		this.path = [3,3,0,0,3,3,3,3,3,0,0,0,1,1,1,1,0,0,3,3,3,3,3,3];
		
		this.data = [1, 8, 8, 8, 8, 8, 8, 8, 14, 8, 4, 2, 5, 8, 8, 8, 8, 8, 8, 8, 8, 8, 1, 8, 8, 3, 2, 5, 8, 8, 12, 8, 1, 8, 8, 1, 8, 1, 8, 8, 8, 22, 1, 8, 8, 1, 8, 1, 8, 8, 8, 8, 1, 8, 8, 1, 8, 1, 8, 8, 8, 8, 4, 2, 2, 6, 8, 1, 8, 12, 17, 8, 8, 8, 8, 8, 8, 1, 8, 8, 8, 8, 16, 8, 8, 8, 8, 7, 8, 8];
		
		this.spawn_waves = [
			[6, 0],
			[10, 0],
			[13, 0],
			[16, 0],
			[22, 0],
			[23, 0],
			[25, 0],
			[27, 0],
			[30, 0],
			[31, 0],
			[32, 0],
			[35, 0],
			[37, 0],
			[39, 0],
			[41, 0],
			[42, 0],
			[44, 0],
			[45.5, 0],
			[48, 0],
			[50, 0],
			[52, 0],
			[54, 0],
			[55.5, 0],
			[57, 0],
			[58.5, 0],
			[60, 0],
			[61, 0],
			[62, 0],
			[63, 0],
			[68, 0],
			[68.3, 0],
			[68.6, 0],
			[73, 0],
			[73.3, 0],
			[73.6, 0],
			[78, 0],
			[78.3, 0],
			[78.6, 0],
			[84, 0],
			[85, 0],
			[86, 0],
			[87, 0]
		];
	}
	else if (level == 1) {
		this.path = [3,3,3,3,3,3,3,3,3,0,1,1,1,1,1,1,1,0,3,3,3,0,1,1,0,3,0,1,0,3,3,3,3,3];
		this.data = [1, 8, 8, 8, 8, 8, 12, 23, 8, 8, 1, 3, 5, 8, 8, 8, 8, 8, 8, 8, 1, 1, 1, 3, 5, 3, 5, 8, 8, 8, 1, 1, 1, 1, 4, 6, 1, 8, 13, 13, 1, 1, 4, 6, 8, 8, 1, 8, 13, 13, 1, 1, 8, 8, 8, 8, 1, 8, 13, 13, 1, 1, 8, 8, 14, 8, 1, 8, 8, 8, 1, 1, 8, 8, 8, 8, 7, 8, 8, 8, 4, 6, 8, 12, 14, 8, 8, 8, 8, 8];
		
		this.spawn_waves = [
			[6, 1],
			[10, 1],
			[15, 1],
			[18, 0],
			[19.5, 0],
			[21, 0],
			
			[28, 1],
			[29, 1],
			[30.5, 1],
			[31.5, 1],
			
			[34, 1],
			[35, 0],
			[36, 1],
			[37, 0],
			[38, 1],
			
			[42, 1],
			[42.5, 1],
			[43, 1],
			[43.5, 1],
			[47, 1],
			[47.5, 1],
			[48, 1],
			[48.5, 1],
			[52, 1],
			[52.5, 1],
			[53, 1],
			[53.5, 1],
			
			[57, 0, 1],
			[59, 0, 1],
			[61, 0, 1],
			[63, 0, 1],
			[65, 0, 1],
			[66, 0, 1],
			[67, 0, 1],
			[68, 0, 1],
			[69, 0, 1],
			[70, 0, 1],
			[71, 0, 1],
			[72, 0, 1],
			[73, 0, 1],
			[74, 0, 1],
			
		];
	}
	else if (level == 2) {
		this.path = [3,3,0,3,0,3,0,3,2,3,0,0,1,1,0,1,2,1,0,0,3,0,3,3,2,3,3,2,3];
		this.data = [1, 8, 12, 8, 8, 8, 8, 12, 8, 8, 4, 5, 8, 8, 3, 2, 5, 8, 8, 8, 8, 4, 5, 8, 4, 5, 4, 5, 8, 8, 8, 8, 4, 5, 3, 6, 8, 1, 8, 8, 8, 8, 3, 6, 1, 8, 3, 6, 8, 8, 18, 8, 4, 2, 6, 8, 1, 8, 8, 23, 8, 8, 8, 8, 8, 3, 6, 8, 8, 8, 13, 8, 8, 8, 8, 7, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 12, 8, 8];
		this.spawn_waves = [
			[6, 0],
			[6.5, 0],
			[8, 0],
			[10, 1],
			[14, 1],
			[16, 1],
			[18, 1],
			[23, 2],
			[30, 0],
			[31, 0],
			[32, 0],
			[36, 2],
			
			[40, 0, 1],
			[42, 0, 1],
			[43, 1],
			[44, 0],
			
			[48, 0],
			[49, 2],
			[50, 0],
			
			[55, 1],
			[55.2, 1],
			[55.4, 1],
			[55.6, 1],
			
			[60, 2],
			[64, 2],
			[68, 2]
		];
	}
	else if (level == 3) {
		this.path = [3,3,0,0,0,0,0,0,0,1,0,3,3,3,2,2,2,2,3,3,2,3,0,0,3];
		this.data = [1, 8, 8, 8, 8, 8, 8, 3, 5, 8, 4, 2, 2, 2, 2, 2, 2, 6, 1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 1, 8, 12, 8, 8, 8, 3, 2, 2, 2, 6, 8, 8, 8, 8, 8, 1, 8, 8, 8, 8, 8, 8, 8, 8, 3, 6, 8, 8, 8, 22, 8, 8, 8, 8, 4, 2, 5, 8, 8, 8, 8, 8, 8, 17, 8, 8, 7, 8, 8, 8, 12, 12, 8, 8, 8, 8, 9, 8, 8, 8, 8];
		this.spawn_waves = [
			[6, 1],
			[9, 1],
			[11, 1],
			[16, 0, 1],
			[19, 0, 1],
			[24, 2],
			[25, 0, 1],
			[30, 0, 1, 2],
			
			[35, 1],
			[36, 1],
			[37, 1],
			[38, 1],
			[39, 1],
			
			[47, 2],
			[51, 2],
			
			[55, 0],
			[56, 0],
			[57, 0],
			[58, 0],
			[59, 0],
			[60, 0],
			[55, 0],
			[56, 0],
			[57, 0],
			[58, 0],
			[59, 0],
			[60, 0]
		];
	}
	else if (level == 4) {
		this.path = [3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,1,1,1,1,1,1,2,3,3,3,3,2,2,2,2,2,2,1,1,1,1,1,0,0,0,0,3,3,3];
		this.data = [1, 8, 8, 8, 12, 8, 8, 8, 8, 8, 1, 3, 2, 2, 2, 5, 8, 8, 11, 8, 1, 1, 8, 8, 8, 1, 8, 3, 5, 8, 1, 1, 19, 8, 8, 1, 8, 1, 1, 8, 1, 1, 8, 8, 21, 7, 8, 1, 1, 8, 1, 1, 8, 8, 8, 8, 8, 1, 1, 8, 1, 4, 2, 2, 2, 2, 2, 6, 1, 12, 1, 8, 8, 8, 8, 8, 8, 8, 1, 8, 4, 2, 2, 2, 2, 2, 2, 2, 6, 8];
		this.spawn_waves = [
			[6, 2],
			[11, 0],
			[12, 0],
			[13, 0],
			[14, 0],
			[15, 0],
			[19, 1],
			[20, 1],
			[21, 1],
			[22, 1],
			[30, 0, 1, 2],
			[33, 0, 1, 2],
			[36, 0, 1, 2],
			
			[44, 1],
			[45, 0],
			[46, 1],
			[47, 0],
			[48, 1],
			[49, 0],
			[50, 1],
			
			[58, 2],
			[61, 2],
			[64, 2],
			[67, 2],
			[70, 2],
			[73, 2],
			[76, 2],
			[78, 2],
			[80, 2],
			[82, 2],
			[83, 2],
			[84, 2]
		];
	}
	else {
		console.log("improper level");
	}
	this.spawn_index = 0;
	
	this.level_time = 0;
	
	this.music_counter = 0;
	
	this.width = 10;
	this.height = 9;
	if (this.width * this.height != this.data.length) {
		console.log("ouch!");
	}
	
	this.noBuildZones = [];
	for (var i = 0; i < this.data.length; i++) {
		if (this.data[i] != 8) {
			this.noBuildZones.push({x:640+(i % this.width)*64, y:64*Math.floor(i/this.width)});
		}
	}
	
	this.done_spawning = false;
}

TD_level.prototype = {
	update: function(elapsedTime) {
		
		if (this.music_counter == 0) 
		{
			this.music_counter++;
			resources.td_start.play();
		}
		else if (this.music_counter == 1 && resources.td_start.ended)
		{
			this.music_counter++;
			resources.td_music.play();
		}
		if (this.music_counter == 2 && resources.td_music.ended) resources.td_music.play();
		
		this.level_time += elapsedTime/1000;
		if (this.spawn_waves[this.spawn_index] != undefined) {
			if (this.level_time >= this.spawn_waves[this.spawn_index][0]) {
				for (var i = 1; i < this.spawn_waves[this.spawn_index].length; i++) {
					var newBaddie;
					if (this.spawn_waves[this.spawn_index][i] == 0) {
						newBaddie = new Virus(640, -64, this.path);
					}
					if (this.spawn_waves[this.spawn_index][i] == 1) {
						newBaddie = new Worm(640, -64, this.path);
					}
					if (this.spawn_waves[this.spawn_index][i] == 2) {
						newBaddie = new Trojan(640, -64, this.path);
					}
					
					game.baddies.push(newBaddie);
				}
				this.spawn_index++;
				
			}
		} else {
			this.done_spawning = true;
		}
	},
	
	render: function(ctx) {
		ctx.save();
		for (var i = 0; i < this.data.length; i++) {
			var img = this.data[i];
			var drawWave = false;
			// upper right corner
			if (i == this.width-1 && drawWave) {
				ctx.drawImage(resources.wave_sprite_sheet, 0, 0, 64, 64,
				640+(i % this.width)*64, 64*Math.floor(i/this.width), 64, 64);
			} else {
				ctx.drawImage(resources.tower_defense_sprite_sheet,
					64*(this.data[i]-1), 0, 64, 64,
					640+(i % this.width)*64, 64*Math.floor(i/this.width), 64, 64);
			}
		}
		ctx.restore();
	}
}