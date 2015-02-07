var TD_level = function() {
	this.path = [3,3,0,0,3,3,3,3,3,0,0,0,1,1,1,1,0,0,3,3,3,3,3];
	
	this.data = [1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 4, 2, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 7, 7, 3, 2, 5, 7, 7, 7, 7, 1, 7, 7, 1, 7, 1, 7, 11, 7, 7, 1, 7, 7, 1, 7, 1, 7, 7, 7, 7, 1, 7, 7, 1, 7, 1, 7, 7, 7, 7, 4, 2, 2, 6, 7, 1, 7, 7, 10, 7, 7, 7, 7, 7, 7, 1, 7, 7, 7, 9, 7, 7, 7, 7, 7, 12, 7, 11];
	
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