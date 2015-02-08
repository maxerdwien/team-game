var Tower_pool = function() {
	this.pool = [];
	this.color = 0;
}

Tower_pool.prototype = {
	render: function(ctx) {
		ctx.save()
		for (var i = 0; i < 9; i++) {
			ctx.drawImage(resources.middle_sprite_sheet, Math.floor(this.color/8)*64, 0, 64, 64,
				576, i*64, 64, 64);
		}
		this.color++;
		if (this.color == 120) this.color = 0;
		ctx.restore();
	},
	
	update: function(elapsedTime) {
		
	},
	
	addTower: function(tower) {
		tower.x = 576;
		tower.y = 512 - this.pool.length*64;
		this.pool.push(tower);
	},
	
	consolidate: function() {
		for (var i = 0; i < this.pool.length; i++) {
			if (this.pool[i].mode != "ready") {
				this.pool.splice(i, 1);
				i--;
			} else {
				this.pool[i].x = 576;
				this.pool[i].y = 512 - i*64;
			}
		}
	}
}