var TD_level = function() {
	this.path = [3,3,0,0,3,3,3,3,3,0,0,0,1,1,1,1,0,0,3,3,3,3,3,3];
	
	this.data = [1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 4, 2, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 7, 7, 3, 2, 5, 7, 7, 7, 7, 1, 7, 7, 1, 7, 1, 7, 11, 7, 7, 1, 7, 7, 1, 7, 1, 7, 7, 7, 7, 1, 7, 7, 1, 7, 1, 7, 7, 7, 7, 4, 2, 2, 6, 7, 1, 7, 7, 10, 7, 7, 7, 7, 7, 7, 1, 7, 7, 7, 9, 7, 7, 7, 7, 7, 12, 7, 11];
	
	this.spawn_waves = [
		[1, 0],
		[2, 0],
		[8, 0],
		[14, 0],
		[19, 1],
		[25, 1],
		[35, 2],
		[35.2, 2]
	];
	
	this.spawn_index = 0;
	
	this.level_time = 0;
	
	this.width = 10;
	this.height = 9;
	if (this.width * this.height != this.data.length) {
		console.log("ouch!");
	}
	
	this.tileproperties = {
		"0":
		{
		"buildable":"false",
		"path":"true"
		},
		"1":
		{
		"buildable":"false",
		"path":"true"
		},
		"10":
		{
		"buildable":"true",
		"path":"false"
		},
		"11":
		{
		"buildable":"false",
		"path":"true"
		},
		"2":
		{
		"buildable":"false",
		"path":"true"
		},
		"3":
		{
		"buildable":"false",
		"path":"true"
		},
		"4":
		{
		"buildable":"false",
		"path":"true"
		},
		"5":
		{
		"buildable":"false",
		"path":"true"
		},
		"6":
		{
		"buildable":"true",
		"path":"false"
		},
		"8":
		{
		"buildable":"true",
		"path":"false"
		},
		"9":
		{
		"buildable":"true",
		"path":"false"
		}
	};
		
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
		}
	},
	
	render: function(ctx) {
		ctx.save();
		for (var i = 0; i < this.data.length; i++) {
			var img = this.data[i];
			ctx.drawImage(resources.tower_defense_sprite_sheet,
				64*(this.data[i]-1), 0, 64, 64,
				640+(i % this.width)*64, 64*Math.floor(i/this.width), 64, 64);
		}
		ctx.restore();
	}
}