var Tower_pool = function() {
	this.pool = [];
}

Tower_pool.prototype = {
	render: function(ctx) {
		ctx.save()
		for (var i = 0; i < 9; i++) {
			ctx.drawImage(resources.middle_sprite_sheet, 0, 0, 64, 64,
				576, i*64, 64, 64);
		}
		ctx.restore();
	},
	
	update: function(elapsedTime) {
		
	},
	
	addTower: function(tower) {
		tower.x = 576;
		tower.y = 512 - this.pool.length*64;
		this.pool.push(tower);
	}
}