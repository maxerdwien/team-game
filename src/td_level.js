var TD_level = function(level) {
	if (level == 0) {
		this.path = [3,3,0,0,3,3,3,3,3,0,0,0,1,1,1,1,0,0,3,3,3,3,3,3];
		
		this.data = [1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 4, 2, 5, 8, 8, 8, 8, 8, 8, 8, 8, 8, 1, 8, 8, 3, 2, 5, 8, 8, 8, 8, 1, 8, 8, 1, 8, 1, 8, 8, 8, 8, 1, 8, 8, 1, 8, 1, 8, 8, 8, 8, 1, 8, 8, 1, 8, 1, 8, 8, 8, 8, 4, 2, 2, 6, 8, 1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 8, 8];
		
		this.spawn_waves = [
			[1, 0],
			[2, 0],
			[8, 0],
			[14, 0],
			[19, 1],
			[25, 1],
			[35, 2]
		];
	}
	if (level == 1) {
		this.path = [3,3,3,3,3,3,3,3,3,0,1,1,1,1,1,1,1,0,3,3,3,0,1,1,0,3,0,1,0,3,3,3,3,3];
		this.data = [1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 1, 3, 5, 8, 8, 8, 8, 8, 8, 8, 1, 1, 1, 3, 5, 3, 5, 8, 8, 8, 1, 1, 1, 1, 4, 6, 1, 8, 8, 8, 1, 1, 4, 6, 8, 8, 1, 8, 8, 8, 1, 1, 8, 8, 8, 8, 1, 8, 8, 8, 1, 1, 8, 8, 8, 8, 1, 8, 8, 8, 1, 1, 8, 8, 8, 8, 7, 8, 8, 8, 4, 6, 8, 8, 8, 8, 8, 8, 8, 8];
		this.spawn_waves = [
			[1, 0],
			[2, 0],
			[8, 0],
			[14, 0],
			[19, 1],
			[25, 1],
			[35, 2]
		];
	}
	if (level == 2) {
		this.path = [3,3,0,3,0,3,0,3,2,3,0,0,1,1,0,1,2,1,0,0,3,0,3,3,2,3,3,2,3];
		this.data = [1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 4, 5, 8, 8, 3, 2, 5, 8, 8, 8, 8, 4, 5, 8, 4, 5, 4, 5, 8, 8, 8, 8, 4, 5, 3, 6, 8, 1, 8, 8, 8, 8, 3, 6, 1, 8, 3, 6, 8, 8, 8, 8, 4, 2, 6, 8, 1, 8, 8, 8, 8, 8, 8, 8, 8, 3, 6, 8, 8, 8, 8, 8, 8, 8, 8, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8];
		this.spawn_waves = [
			[1, 0],
			[2, 0],
			[8, 0],
			[14, 0],
			[19, 1],
			[25, 1],
			[35, 2]
		];
	}
	if (level == 3) {
		this.path = [3,3,0,0,0,0,0,0,0,1,0,3,3,3,2,2,2,2,3,3,2,3,0,0,3];
		this.data = [1, 8, 8, 8, 8, 8, 8, 3, 5, 8, 4, 2, 2, 2, 2, 2, 2, 6, 1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 1, 8, 8, 8, 8, 8, 3, 2, 2, 2, 6, 8, 8, 8, 8, 8, 1, 8, 8, 8, 8, 8, 8, 8, 8, 3, 6, 8, 8, 8, 8, 8, 8, 8, 8, 4, 2, 5, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8];
		this.spawn_waves = [
			[1, 0],
			[2, 0],
			[8, 0],
			[14, 0],
			[19, 1],
			[25, 1],
			[35, 2]
		];
	}
	if (level == 4) {
		this.path = [3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,1,1,1,1,1,1,2,3,3,3,3,2,2,2,2,2,2,1,1,1,1,1,0,0,0,0,3,3,3];
		this.data = [1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 1, 3, 2, 2, 2, 5, 8, 8, 8, 8, 1, 1, 8, 8, 8, 1, 8, 3, 5, 8, 1, 1, 8, 8, 8, 1, 8, 1, 1, 8, 1, 1, 8, 8, 8, 7, 8, 1, 1, 8, 1, 1, 8, 8, 8, 8, 8, 1, 1, 8, 1, 4, 2, 2, 2, 2, 2, 6, 1, 8, 1, 8, 8, 8, 8, 8, 8, 8, 1, 8, 4, 2, 2, 2, 2, 2, 2, 2, 6, 8];
		this.spawn_waves = [
			[1, 0],
			[2, 0],
			[8, 0],
			[14, 0],
			[19, 1],
			[25, 1],
			[35, 2]
		];
	}
	this.spawn_index = 0;
	
	this.level_time = 0;
	
	this.width = 10;
	this.height = 9;
	if (this.width * this.height != this.data.length) {
		console.log("ouch!");
	}
	
	this.tileproperties = [
		{},
		{buildable: false, path: true},
		{buildable: false, path: true},
		{buildable: false, path: true},
		{buildable: false, path: true},
		{buildable: false, path: true},
		{buildable: false, path: true},
		{buildable: false, path: true},
		{buildable: true, path: false},
		{buildable: true, path: false},
		{buildable: true, path: false},
		{buildable: true, path: false},
		{buildable: true, path: false}];
	
	this.noBuildZones = [];
	for (var i = 0; i < this.data.length; i++) {
		var num = this.data[i];
		if (this.tileproperties[num] != undefined) {
			if (!this.tileproperties[num].buildable) {
				this.noBuildZones.push({x:640+(i % this.width)*64, y:64*Math.floor(i/this.width)});
			}
		}
	}
	
	this.done_spawning = false;
}

TD_level.prototype = {
	update: function(elapsedTime) {
		this.level_time += elapsedTime/1000;
		if (typeof this.spawn_waves[this.spawn_index] != "undefined") {
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
			// upper right corner
			if (i == this.width-1) {
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